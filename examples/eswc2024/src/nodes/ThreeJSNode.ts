import { ImageProcessingNode } from "@openhps/opencv";
import { ImageFrame } from "@openhps/video";
import { Mat } from "@u4/opencv4nodejs";

export class ThreeJSNode<InOut extends ImageFrame> extends ImageProcessingNode<InOut> {
    processImage(image: Mat, frame?: InOut): Promise<Mat> {
        throw new Error("Method not implemented.");
    }

}
