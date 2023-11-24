import { ImageFrame } from "@openhps/video";
import { ImageProcessingNode, OpenCV as CV, ImageProcessingOptions } from '@openhps/opencv';

const { OpenCV } = require('@openhps/opencv'); // eslint-disable-line

/**
 * @source @link {https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html}
 */
export class ArUcoMarkerDetection<InOut extends ImageFrame> extends ImageProcessingNode<InOut> {
    processImage(image: CV.Mat, frame: InOut): Promise<CV.Mat> {
        return new Promise((resolve, reject) => {
            try {
                const params = new OpenCV.aruco_DetectorParameters();
                const refineParams = new OpenCV.aruco_RefineParameters(10, 3, true);
                const dictionary = OpenCV.getPredefinedDictionary(OpenCV['DICT_6X6_250']);
                const detector = new OpenCV.aruco_ArucoDetector(dictionary, params, refineParams);
                const corners = new OpenCV.MatVector();
                const markerIds = new OpenCV.Mat();
                const gray = new OpenCV.Mat(frame.height, frame.width, CV.CV_8UC1);
                OpenCV.cvtColor(image, gray, OpenCV.COLOR_RGBA2GRAY);
                detector.detectMarkers(gray, corners, markerIds);
                if (markerIds.rows > 0) {
                    console.log("yes")
                }
                OpenCV.drawDetectedMarkers(gray, corners, markerIds);
                // Cleanup
                markerIds.delete();
                corners.delete();
                (image as any).delete();
                resolve(gray);
            } catch (ex) {
                if (typeof ex === 'number') {
                    const info = OpenCV.exceptionFromPtr(ex);
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
