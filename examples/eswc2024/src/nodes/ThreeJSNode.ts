import { ImageProcessingNode, ImageProcessingOptions } from "@openhps/opencv";
import { ImageFrame } from "@openhps/video";
import { Mat } from "@u4/opencv4nodejs";
import * as THREE from 'three';

const { OpenCV } = require('@openhps/opencv'); // eslint-disable-line

export class ThreeJSNode<InOut extends ImageFrame> extends ImageProcessingNode<InOut> {
    declare protected options: ThreeJSNodeOptions;
    protected canvas: HTMLCanvasElement;

    constructor(options?: ThreeJSNodeOptions) {
        super(options);
    }

    processImage(image: Mat): Promise<Mat> {
        return new Promise((resolve) => {
            console.log("test");
            this.options.canvas.width = image.cols;
            this.options.canvas.height = image.rows;

            const camera = new THREE.PerspectiveCamera(40, 812 / 339, 0.01, 1000);
            camera.position.z = 1;

            const scene = new THREE.Scene();

            const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
            const material = new THREE.MeshNormalMaterial();

            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            // const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: this.options.canvas });
            // renderer.setSize(this.options.canvas.width, this.options.canvas.height);
            // renderer.render(scene, camera);

            try{
                OpenCV.imshow(this.options.canvas, image);
            }catch(ex) {
                console.log(ex)
            }

            (image as any).delete(); // Ready
            resolve(image);
        });
    }

}

export interface ThreeJSNodeOptions extends ImageProcessingOptions {
    canvas: HTMLCanvasElement;
}
