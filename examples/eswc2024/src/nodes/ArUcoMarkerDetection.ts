import { ArUcoMarker, FiducialMarker } from '@/models';
import { Absolute3DPosition, Orientation, ProcessingNode } from '@openhps/core';
import { ImageFrame, ImageProcessingOptions } from '@openhps/video';
import { AR } from 'js-aruco';
import { POS } from 'js-aruco/src/posit1.js'

export class ArUcoMarkerDetection<InOut extends ImageFrame<ImageData>> extends ProcessingNode<InOut, InOut> {
    protected detector: AR.Detector;

    constructor(options?: ArUcoOptions) {
        super(options);
        this.detector = new AR.Detector({
            dictionaryName: options.dictionaryName ?? 'ARUCO_MIP_36h12',
        });
    }

    process(frame: InOut): Promise<InOut> {
        return new Promise((resolve) => {
            const posit = new POS.Posit(35, frame.image.width);
            const markers = this.detector.detect(frame.image);

            if (markers.length > 0) {
                markers.forEach((marker: AR.Marker) => {
                    const corners = marker.corners;
                    for (let i = 0; i < corners.length; ++ i){
                        const corner = corners[i];
                        corner.x = corner.x - (frame.image.width / 2);
                        corner.y = (frame.image.height / 2) - corner.y;
                    }
                    const pose = posit.pose(corners);

                    const markerObject = frame.getObjects().find(o => {
                        return o instanceof FiducialMarker && o.identifier === marker.id
                    });
                    if (markerObject) {
                        const translation = pose.bestTranslation;
                        const rotation = pose.bestRotation;
                        markerObject.setPosition(new Absolute3DPosition(translation[0], translation[1], -translation[2]));
                        markerObject.position.setOrientation(Orientation.fromEuler({
                           x: -Math.asin(-rotation[1][2]),
                           y: -Math.atan2(rotation[0][2], rotation[2][2]),
                           z:  Math.atan2(rotation[1][0], rotation[1][1])
                        }));
                    }
                });
            }
            resolve(frame);
        });
    }

}

export interface ArUcoOptions extends ImageProcessingOptions {
    dictionaryName?: string;
}
