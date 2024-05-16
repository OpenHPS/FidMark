import { FiducialMarker, VirtualObject } from "@/models";
import { DataFrame, LengthUnit, Relative3DPosition, RelativeAngle } from "@openhps/core";
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
            this.camera.near = 1;
            this.camera.far = cameraObject.far;
            
            this.scene = new THREE.Scene();
            this.scene.add(this.camera);
            this.scene.add(new THREE.AmbientLight(0xffffff, 1))

            frame.getObjects().forEach(marker => {
                if (marker instanceof FiducialMarker && marker.position !== undefined) {
                    const virtualObjects = frame.getObjects(VirtualObject).filter(obj => {
                        return obj.getRelativePosition(marker.uid) !== undefined; 
                    });
                    virtualObjects.forEach(object => {
                        const position = (object.getRelativePosition(marker.uid, Relative3DPosition.name) as Relative3DPosition);
                        const rotation = (object.getRelativePosition(marker.uid, RelativeAngle.name) as RelativeAngle);
                        if (position && object.geometry.gltf) {
                            // Copy the scene of the gltf object
                            const mesh = object.geometry.gltf.scene.clone();
                            mesh.rotation.setFromRotationMatrix(marker.position.orientation.toRotationMatrix() as any);
                            if (rotation) {
                                // TODO
                            }
                            mesh.position.set(...
                                marker.position.toVector3()
                                    .add(position.toVector3(LengthUnit.MILLIMETER)
                                        .applyQuaternion(marker.position.orientation))
                                    .toArray());
                            const scale = ((marker.width + marker.height) / 2);
                            mesh.scale.x = mesh.scale.x * scale;
                            mesh.scale.y = mesh.scale.y * scale;
                            mesh.scale.z = mesh.scale.z * scale;
                            this.scene.add(mesh);
                        }
                    });
                }
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
