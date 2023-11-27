import { cv, ImageProcessingNode, ImageProcessingOptions } from "@openhps/opencv/web";
import { ImageFrame } from "@openhps/video";
import * as THREE from 'three';

export class ThreeJSNode<InOut extends ImageFrame> extends ImageProcessingNode<InOut> {
    declare protected options: ThreeJSNodeOptions;
    protected canvas: HTMLCanvasElement;

    constructor(options?: ThreeJSNodeOptions) {
        super(options);
    }

    processImage(image: cv.Mat): Promise<cv.Mat> {
        return new Promise((resolve) => {
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

            try {
                cv.imshow(this.options.canvas, image);
            } catch(ex) {
                console.log(ex)
            }
            resolve(image);
        });
    }

}

export interface ThreeJSNodeOptions extends ImageProcessingOptions {
    canvas: HTMLCanvasElement;
}
