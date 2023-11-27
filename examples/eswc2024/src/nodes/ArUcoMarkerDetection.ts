import { ImageFrame } from "@openhps/video";
import { ImageProcessingNode, cv as OpenCV, ImageProcessingOptions } from '@openhps/opencv/web';

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
                const dictionary = cv.getPredefinedDictionary(cv['DICT_6X6_250']);
                const detector = new cv.aruco_ArucoDetector(dictionary, params, refineParams);
                const corners = new cv.MatVector();
                const markerIds = new cv.Mat();
                const gray = new cv.Mat(frame.height, frame.width, cv.CV_8UC1);
                cv.cvtColor(image, gray, cv.COLOR_RGBA2GRAY);
                detector.detectMarkers(gray, corners, markerIds);
                if (markerIds.rows > 0) {
                    const rvecs = new cv.Mat(markerIds.rows, 1, cv.CV_8UC3);
                    const tvecs = new cv.Mat(markerIds.rows, 1, cv.CV_8UC3);
                    const cameraMatrix = cv.matFromArray(3, 3, cv.CV_64F, [9.6635571716090658e+02, 0., 2.0679307818305685e+02, 0., 9.6635571716090658e+02, 2.9370020600555273e+02, 0., 0., 1.]);
                    const distCoeffs = cv.matFromArray(5, 1, cv.CV_64F, [-1.5007354215536557e-03, 9.8722389825801837e-01, 1.7188452542408809e-02, -2.6805958820424611e-02, -2.3313928379240205e+00]);
                    const objPoints = new cv.Mat(4, 1, cv.CV_32FC3);
                    const markerLength = 0.05;
                    objPoints.floatPtr(0)[0] = -markerLength / 2;
                    objPoints.floatPtr(1)[0] = markerLength / 2;
                    objPoints.floatPtr(2)[0] = markerLength / 2;
                    objPoints.floatPtr(3)[0] = markerLength / 2;
                    objPoints.floatPtr(4)[0] = markerLength / 2;
                    objPoints.floatPtr(5)[0] = -markerLength / 2;
                    objPoints.floatPtr(6)[0] = -markerLength / 2;
                    objPoints.floatPtr(7)[0] = -markerLength / 2;

                    // Calculate pose for each marker
                    for (let i = 0; i < markerIds.rows; i++) {
                        cv.solvePnP(objPoints, corners.get(i), cameraMatrix, distCoeffs, rvecs, tvecs);
                    }

                    for (let i = 0; i < rvecs.size(); ++i) {
                        const rvec = rvecs[i];
                        const tvec = tvecs[i];
                        cv.drawFrameAxes(gray, cameraMatrix, distCoeffs, rvec, tvec, 0.1);
                    }
                }
                cv.drawDetectedMarkers(gray, corners, markerIds);
                // Cleanup
                markerIds.delete();
                corners.delete();
                params.delete();
                dictionary.delete();
                detector.delete();
                refineParams.delete();
                resolve(gray);
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
