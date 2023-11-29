import { Absolute3DPosition, LengthUnit, Matrix3, Matrix4, Orientation, ProcessingNode } from '@openhps/core';
import { ImageProcessingOptions } from '@openhps/opencv/web';
import { ArUcoMarker } from "../models";
import { XRDataFrame } from '@openhps/webxr';

const { cv } = require('@openhps/opencv/web'); // eslint-disable-line

/**
 * @see {@link https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html}
 * @see {@link https://github.com/mozilla/webxr-polyfill/blob/master/examples/opencv-aruco/worker.js}
 */
export class ArUcoMarkerDetection<InOut extends XRDataFrame> extends ProcessingNode<InOut, InOut> {
    process(frame: InOut): Promise<InOut> {
        return new Promise((resolve, reject) => {
            const camera = frame.source;
            try {
                const params = new cv.aruco_DetectorParameters();
                const refineParams = new cv.aruco_RefineParameters(10, 3, true);
                const dictionary = cv.getPredefinedDictionary(cv['DICT_ARUCO_ORIGINAL']);
                const detector = new cv.aruco_ArucoDetector(dictionary, params, refineParams);
                const corners = new cv.MatVector();
                const markerIds = new cv.Mat();

                const image = cv.matFromArray(frame.height, frame.width, cv.CV_8UC4, Array.from(frame.image));

                const gray = new cv.Mat(frame.height, frame.width, cv.CV_8UC1);
                cv.cvtColor(image, gray, cv.COLOR_RGBA2GRAY);
                detector.detectMarkers(gray, corners, markerIds);
                if (markerIds.rows > 0) {
                    const rotationMat = new cv.Mat(3, 3, cv.CV_32F);
                    const rvec = new cv.Mat(markerIds.rows, 1, cv.CV_32FC3);
                    const tvec = new cv.Mat(markerIds.rows, 1, cv.CV_32FC3);
                    const cameraMatrix = cv.matFromArray(3, 3, cv.CV_64F, [
                        9.6635571716090658e+02, 
                        0., 
                        2.0679307818305685e+02, 
                        0., 
                        9.6635571716090658e+02, 
                        2.9370020600555273e+02, 
                        0., 0., 1.]);
                    const distCoeffs = cv.matFromArray(5, 1, cv.CV_64F, 
                        camera.distortionCoefficients.slice(0, 4));
                    const markerLength = 0.05;
                    const objPoints = cv.matFromArray(4, 1, cv.CV_32FC3, [
                        -markerLength / 2,
                        markerLength / 2,
                        0., 
                        markerLength / 2,
                        markerLength / 2,
                        0., 
                        markerLength / 2,
                        -markerLength / 2,
                        0., 
                        -markerLength / 2,
                        -markerLength / 2,
                        0.
                    ]);

                    // Calculate pose for each marker
                    for (let i = 0; i < markerIds.rows; i++) {
                        cv.solvePnP(objPoints, corners.get(i), cameraMatrix, distCoeffs, rvec, tvec);
                        cv.drawFrameAxes(image, cameraMatrix, distCoeffs, rvec, tvec, 0.1);
                        const marker = new ArUcoMarker();
                        marker.identifier = markerIds.data[i];
                        
                        // Get position
                        marker.setPosition(new Absolute3DPosition(
                            tvec.data32F[0], 
                            -tvec.data32F[1], 
                            tvec.data32F[2], LengthUnit.METER));

                        // Get rotation matrix
                        cv.Rodrigues(rvec, rotationMat);
                        const matrix = new Matrix4().setFromMatrix3(new Matrix3(
                            rotationMat.data32F[0],
                            rotationMat.data32F[1],
                            rotationMat.data32F[2],
                            rotationMat.data32F[3],
                            rotationMat.data32F[4],
                            rotationMat.data32F[5],
                            rotationMat.data32F[6],
                            rotationMat.data32F[7],
                            rotationMat.data32F[8],
                        ));
                        marker.position.orientation = Orientation.fromRotationMatrix(matrix);
                        frame.addObject(marker);
                    }

                    rvec.delete();
                    tvec.delete();
                    cameraMatrix.delete();
                    distCoeffs.delete();
                    objPoints.delete();
                    rotationMat.delete();
                }

                console.log(image)
                cv.imshow("cameraCanvas", image);
                // Cleanup
                markerIds.delete();
                corners.delete();
                params.delete();
                dictionary.delete();
                detector.delete();
                refineParams.delete();
                gray.delete();
                //image.delete();
                resolve(frame);
            } catch (ex) {
                if (typeof ex === 'number') {
                    const info = cv.exceptionFromPtr(ex);
                    console.error(info);
                    reject(info);
                } else {
                    console.error(ex);
                    reject(ex);
                }
            }
        });
    }

}

export interface ArUcoOptions extends ImageProcessingOptions {
    
}
