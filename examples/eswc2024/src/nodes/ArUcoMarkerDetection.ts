import { FiducialMarker } from '@/models';
import { fidmark } from '@/ontologies';
import { Absolute3DPosition, LengthUnit, Orientation, ProcessingNode } from '@openhps/core';
import { ImageFrame } from '@openhps/video';
import { AR } from 'js-aruco';
import { POS } from 'js-aruco/src/posit1.js'
import 'js-aruco/src/dictionaries/apriltag_16h5.js';
import 'js-aruco/src/dictionaries/apriltag_25h7.js';
import 'js-aruco/src/dictionaries/apriltag_25h9.js';
import 'js-aruco/src/dictionaries/apriltag_36h10.js';
import 'js-aruco/src/dictionaries/apriltag_36h11.js';
import 'js-aruco/src/dictionaries/apriltag_36h9.js';
import 'js-aruco/src/dictionaries/artag.js';
import 'js-aruco/src/dictionaries/aruco_4x4_1000.js';
import 'js-aruco/src/dictionaries/aruco_5x5_1000.js';
import 'js-aruco/src/dictionaries/aruco_6x6_1000.js';
import 'js-aruco/src/dictionaries/aruco_7x7_1000.js';
import 'js-aruco/src/dictionaries/aruco_default_opencv.js';
import 'js-aruco/src/dictionaries/aruco_mip_16h3.js';
import 'js-aruco/src/dictionaries/aruco_mip_25h7.js';
import 'js-aruco/src/dictionaries/aruco_mip_36h12.js';
import 'js-aruco/src/dictionaries/chilitags.js';
import { ORIGIN_BOTTOM_LEFT, ORIGIN_BOTTOM_RIGHT, ORIGIN_CENTER, ORIGIN_TOP_LEFT, ORIGIN_TOP_RIGHT } from '@/models/MarkerOrigin';

export class ArUcoMarkerDetection<InOut extends ImageFrame<ImageData>> extends ProcessingNode<InOut, InOut> {
    mapping: any = {
        [fidmark.DICT_CHILLITAGS]: 'CHILITAGS',
        [fidmark.DICT_ARUCO_MIP_36h12]: 'ARUCO_MIP_36h12',
        [fidmark.DICT_ARUCO_MIP_25h7]: 'ARUCO_MIP_25h7',
        [fidmark.DICT_ARUCO_MIP_16h3]: 'ARUCO_MIP_16h3',
        [fidmark.DICT_ARTAG]: 'ARTAG',
        [fidmark.DICT_ARUCO_ORIGINAL]: 'ARUCO_DEFAULT_OPENCV',
        [fidmark.DICT_4X4_50]: 'ARUCO_4X4_1000',
        [fidmark.DICT_4X4_100]: 'ARUCO_4X4_1000',
        [fidmark.DICT_4X4_250]: 'ARUCO_4X4_1000',
        [fidmark.DICT_4X4_1000]: 'ARUCO_4X4_1000',
        [fidmark.DICT_5X5_50]: 'ARUCO_5X5_1000',
        [fidmark.DICT_5X5_100]: 'ARUCO_5X5_1000',
        [fidmark.DICT_5X5_250]: 'ARUCO_5X5_1000',
        [fidmark.DICT_5X5_1000]: 'ARUCO_5X5_1000',
        [fidmark.DICT_6X6_50]: 'ARUCO_6X6_1000',
        [fidmark.DICT_6X6_100]: 'ARUCO_6X6_1000',
        [fidmark.DICT_6X6_250]: 'ARUCO_6X6_1000',
        [fidmark.DICT_6X6_1000]: 'ARUCO_6X6_1000',
        [fidmark.DICT_7X7_50]: 'ARUCO_7X7_1000',
        [fidmark.DICT_7X7_100]: 'ARUCO_7X7_1000',
        [fidmark.DICT_7X7_250]: 'ARUCO_7X7_1000',
        [fidmark.DICT_7X7_1000]: 'ARUCO_7X7_1000',
        [fidmark.DICT_APRILTAG_16h5]: 'APRILTAG_16h5',
        [fidmark.DICT_APRILTAG_25h9]: 'APRILTAG_25h9',
        [fidmark.DICT_APRILTAG_36h10]: 'APRILTAG_36h10',
        [fidmark.DICT_APRILTAG_36h11]: 'APRILTAG_36h11',
    };

    protected detectors: Map<string, AR.Detector> = new Map();
    protected poseEstimators: Map<number, POS.Posit> = new Map();
    
    process(frame: InOut): Promise<InOut> {
        return new Promise((resolve) => {
            frame.getObjects().forEach(markerObject => {
                if (markerObject instanceof FiducialMarker) {
                    markerObject.position = undefined;
                    const dictionaryName = this.mapping[(markerObject.dictionary as any).rdf.uri];
                    const detector = this.detectors.get(dictionaryName) ?? new AR.Detector({
                        dictionaryName: dictionaryName
                    });
                    if (!this.detectors.has(dictionaryName)) {
                        this.detectors.set(dictionaryName, detector);
                    }

                    if (!this.poseEstimators.has(markerObject.width)) {
                        this.poseEstimators.set(markerObject.width, new POS.Posit(markerObject.width, frame.image.width));
                    }
                }
            });

            this.detectors.forEach((detector, dictionaryName) => {
                const markers = detector.detect(frame.image);
                if (markers.length > 0) {
                    markers.forEach((marker: AR.Marker) => {
                        // Get the detected marker object
                        const markerObject = frame.getObjects().find(o => {
                            return o instanceof FiducialMarker && o.identifier === marker.id &&
                                this.mapping[(o.dictionary as any).rdf.uri] === dictionaryName;
                        }) as FiducialMarker;

                        if (markerObject && markerObject.identifier === marker.id) {
                            const posit = this.poseEstimators.get(markerObject.width);
                            const corners = marker.corners;
                            for (let i = 0; i < corners.length; ++ i){
                                const corner = corners[i];
                                corner.x = corner.x - (frame.image.width / 2);
                                corner.y = (frame.image.height / 2) - corner.y;
                            }
                            const pose = posit.pose(corners);

                            // Center origin
                            const translation = pose.bestTranslation;
                            const rotation = pose.bestRotation;
                            // Convert translation to what is expected
                            const expectedOrigin = markerObject.origin.id;
                            switch (expectedOrigin) {
                                case ORIGIN_TOP_LEFT.id:
                                    translation[0] = translation[0] - (markerObject.width / 2);
                                    translation[1] = translation[1] + (markerObject.height / 2);
                                    break;
                                case ORIGIN_TOP_RIGHT.id:
                                    translation[0] = translation[0] + (markerObject.width / 2);
                                    translation[1] = translation[1] + (markerObject.height / 2);
                                    break;
                                case ORIGIN_BOTTOM_LEFT.id:
                                    translation[0] = translation[0] - (markerObject.width / 2);
                                    translation[1] = translation[1] - (markerObject.height / 2);
                                    break;
                                case ORIGIN_BOTTOM_RIGHT.id:
                                    translation[0] = translation[0] + (markerObject.width / 2);
                                    translation[1] = translation[1] - (markerObject.height / 2);
                                    break;
                                default:
                                case ORIGIN_CENTER.id:
                                    break;
                            }
                            
                            markerObject.setPosition(new Absolute3DPosition(
                                translation[0], 
                                translation[1], 
                                -translation[2], 
                                LengthUnit.MILLIMETER));
                            markerObject.position.setOrientation(Orientation.fromEuler({
                               x: -Math.asin(-rotation[1][2]),
                               y: -Math.atan2(rotation[0][2], rotation[2][2]),
                               z:  Math.atan2(rotation[1][0], rotation[1][1])
                            }));
                        }
                    });
                }
            });
            resolve(frame);
        });
    }

}
