import { ArUcoMarker } from "@/models";
import { DataFrame } from "@openhps/core";
import { cv, ImageProcessingNode, ImageProcessingOptions } from "@openhps/opencv/web";
import { ImageFrame, PerspectiveCameraObject } from "@openhps/video";
import * as THREE from 'three';

export class ThreeJSNode<InOut extends ImageFrame> extends ImageProcessingNode<InOut> {
    declare protected options: ThreeJSNodeOptions;
    protected canvas: HTMLCanvasElement;

    constructor(options?: ThreeJSNodeOptions) {
        super(options);
        const camera = new PerspectiveCameraObject("camera");
        camera.fov = 40;
        camera.width = 1024;
        camera.height = 720;
        camera.near = 0.01;
        camera.far = 1000;
    }

    processImage(image: cv.Mat, frame: DataFrame): Promise<cv.Mat> {
        return new Promise((resolve) => {
            this.options.canvas.width = image.cols;
            this.options.canvas.height = image.rows;

            const camera = new THREE.PerspectiveCamera(40, 812 / 339, 0.01, 1000);
            camera.position.z = 1;

            const scene = new THREE.Scene();

            frame.getObjects(ArUcoMarker).forEach(marker => {
                const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
                const material = new THREE.MeshNormalMaterial();
                const mesh = new THREE.Mesh(geometry, material);
                mesh.rotation.setFromRotationMatrix(marker.position.orientation.toRotationMatrix());
                scene.add(mesh);
            });

            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: this.options.canvas });
            renderer.setSize(this.options.canvas.width, this.options.canvas.height);
            renderer.render(scene, camera);

            resolve(image);
        });
    }

}

export interface ThreeJSNodeOptions extends ImageProcessingOptions {
    canvas: HTMLCanvasElement;
}
