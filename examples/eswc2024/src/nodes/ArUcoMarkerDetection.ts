import { ProcessingNode, ProcessingNodeOptions, PushOptions } from "@openhps/core";
import { ImageFrame } from "@openhps/video";
import { OpenCV } from '@openhps/opencv';

export class ArUcoMarkerDetection<In extends ImageFrame> extends ProcessingNode<In, In> {

    process(frame: In, options?: PushOptions): Promise<In> {
        return new Promise((resolve, reject) => {
            
        });
    }

}

export interface ArUcoOptions extends ProcessingNodeOptions {
    
}
