import { ProcessingNodeOptions } from "@openhps/core";
import { ImageFrame } from "@openhps/video";
import { ImageProcessingNode, OpenCV as CV } from '@openhps/opencv';

const { OpenCV } = require('@openhps/opencv'); // eslint-disable-line

/**
 * @source @link {https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html}
 */
export class ArUcoMarkerDetection<InOut extends ImageFrame> extends ImageProcessingNode<InOut> {
    processImage(image: CV.Mat, frame?: InOut): Promise<CV.Mat> {
        return new Promise((resolve) => {
            const params = new OpenCV.aruco_DetectorParameters();
            const refineParams = new OpenCV.aruco_RefineParameters(10, 3, true);
            const dictionary = OpenCV.getPredefinedDictionary(OpenCV['DICT_ARUCO_ORIGINAL']);
            const detector = new OpenCV.aruco_ArucoDetector(dictionary, params, refineParams);
            console.log(frame, detector)
            resolve(image);
        });
    }

}

export interface ArUcoOptions extends ProcessingNodeOptions {
    
}
