import { ArUcoMarker, FiducialMarker } from "@/models";
import { DataFrame } from "@openhps/core";
import { ImageProcessingNode, ImageProcessingOptions, PerspectiveCameraObject } from "@openhps/video";
import * as THREE from 'three';

export class ThreeJSNode extends ImageProcessingNode<any, any> {
    declare protected options: ThreeJSNodeOptions;
    protected canvas: HTMLCanvasElement;
    protected renderer: THREE.WebGLRenderer;
    protected camera: THREE.PerspectiveCamera;
    protected scene: THREE.Scene;

    constructor(options?: ThreeJSNodeOptions) {
        super(options);

        this.once('build', this._onBuild.bind(this));
    }

    private _onBuild(): void {
        this.canvas = this.options.canvas;
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: this.options.canvas });
        this.renderer.setClearColor(0xffffff, 1);
        this.camera = new THREE.PerspectiveCamera();
        this.scene = new THREE.Scene();
        this.scene.add(this.camera);
    }

    rotation = 0;

    processImage(image: ImageData, frame: DataFrame): Promise<ImageData> {
        return new Promise((resolve) => {
            this.renderer.setSize(image.width, image.height);
            const cameraObject = frame.source as PerspectiveCameraObject;
            this.camera.fov = cameraObject.fov;
            this.camera.aspect = image.width / image.height;
            this.camera.near = cameraObject.near;
            this.camera.far = cameraObject.far;
            this.camera.position.z = 1;

            this.scene = new THREE.Scene();
            this.scene.add(this.camera);

            frame.getObjects(FiducialMarker).forEach(marker => {
                const markerSize = marker.width;
                const geometry = new THREE.BoxGeometry(1, 1, 1);
                const material = new THREE.MeshNormalMaterial();
                const mesh = new THREE.Mesh(geometry, material);
                mesh.rotation.setFromRotationMatrix(marker.position.orientation.toRotationMatrix());
                mesh.position.set(...marker.position.toVector3().toArray());
                mesh.scale.x = markerSize;
                mesh.scale.y = markerSize;
                mesh.scale.z = markerSize;
                this.scene.add(mesh);
            });

            this.scene.background = new THREE.Texture(image);
            this.scene.background.needsUpdate = true;
            this.renderer.render(this.scene, this.camera);
            resolve(image);
        });
    }

}

export interface ThreeJSNodeOptions extends ImageProcessingOptions {
    canvas: HTMLCanvasElement;
}
