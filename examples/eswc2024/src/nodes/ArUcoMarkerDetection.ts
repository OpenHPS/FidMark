import { ImageFrame } from "@openhps/video";
import { Absolute3DPosition } from '@openhps/core';
import { ImageProcessingNode, cv as OpenCV, ImageProcessingOptions } from '@openhps/opencv/web';
import { ArUcoMarker } from "@/models";

const { cv } = require('@openhps/opencv/web'); // eslint-disable-line

/**
 * @source @link {https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html}
 */
export class ArUcoMarkerDetection<InOut extends ImageFrame> extends ImageProcessingNode<InOut> {
    processImage(image: OpenCV.Mat, frame: InOut): Promise<OpenCV.Mat> {
        return new Promise((resolve, reject) => {
            try {
                const params = new cv.aruco_DetectorParameters();
                const refineParams = new cv.aruco_RefineParameters(10, 3, true);
                const dictionary = cv.getPredefinedDictionary(cv['DICT_ARUCO_ORIGINAL']);
                const detector = new cv.aruco_ArucoDetector(dictionary, params, refineParams);
                const corners = new cv.MatVector();
                const markerIds = new cv.Mat();
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
                    const distCoeffs = cv.matFromArray(5, 1, cv.CV_64F, [-1.5007354215536557e-03, 9.8722389825801837e-01, 1.7188452542408809e-02, -2.6805958820424611e-02, -2.3313928379240205e+00]);
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
                        // Get rotation matrix
                        cv.Rodrigues(rvec, rotationMat);
                        cv.drawFrameAxes(image, cameraMatrix, distCoeffs, rvec, tvec, 0.1);
                        const marker = new ArUcoMarker();
                        marker.identifier = markerIds.data[i];
                        marker.setPosition(new Absolute3DPosition());
                    }

                    rvec.delete();
                    tvec.delete();
                    cameraMatrix.delete();
                    distCoeffs.delete();
                    objPoints.delete();
                    rotationMat.delete();
                }

                // Cleanup
                markerIds.delete();
                corners.delete();
                params.delete();
                dictionary.delete();
                detector.delete();
                refineParams.delete();
                resolve(image);
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
