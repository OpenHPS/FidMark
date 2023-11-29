import { ArUcoMarker } from "@/models";
import { DataFrame } from "@openhps/core";
import { cv } from "@openhps/opencv/web";
import { ImageProcessingNode, ImageProcessingOptions, PerspectiveCameraObject } from "@openhps/video";
import * as THREE from 'three';

export class ThreeJSNode extends ImageProcessingNode<any, any> {
    declare protected options: ThreeJSNodeOptions;
    protected canvas: HTMLCanvasElement;

    constructor(options?: ThreeJSNodeOptions) {
        super(options);
    }

    processImage(image: cv.Mat, frame: DataFrame): Promise<cv.Mat> {
        return new Promise((resolve) => {
            this.options.canvas.width = image.cols;
            this.options.canvas.height = image.rows;

            const cameraObject = frame.source as PerspectiveCameraObject;
            const camera = new THREE.PerspectiveCamera(
                cameraObject.fov, 
                cameraObject.width / cameraObject.height, 
                cameraObject.near, 
                cameraObject.far);
            //camera.rotation.setFromRotationMatrix(cameraObject.position.orientation.toRotationMatrix());
            camera.position.set(...cameraObject.position.toVector3().toArray());

            const scene = new THREE.Scene();

            frame.getObjects(ArUcoMarker).forEach(marker => {
                const markerSize = 0.05;
                const geometry = new THREE.BoxGeometry(markerSize, markerSize, markerSize);
                const material = new THREE.MeshNormalMaterial();
                const mesh = new THREE.Mesh(geometry, material);
                mesh.rotation.setFromRotationMatrix(marker.position.orientation.toRotationMatrix());
                mesh.position.set(...marker.position.toVector3().toArray());
                scene.add(mesh);
            });

            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: this.options.canvas });
            renderer.xr.enabled = true;
            renderer.setSize(this.options.canvas.width, this.options.canvas.height);
            renderer.render(scene, camera);

            resolve(image);
        });
    }

}

export interface ThreeJSNodeOptions extends ImageProcessingOptions {
    canvas: HTMLCanvasElement;
}
