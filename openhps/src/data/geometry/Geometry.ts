import { fog, omg } from '../../terms';
import { SerializableMember, SerializableObject } from '@openhps/core';
import { xsd } from '@openhps/rdf';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

@SerializableObject({
    rdf: {
        type: omg.Geometry,
    },
})
export class Geometry {
    @SerializableMember({
        rdf: {
            predicate: fog.asGltf,
            datatype: xsd.anyURI,
        },
    })
    asGltf?: string;
    private _gltf: GLTF;

    get gltf(): GLTF {
        return this._gltf;
    }

    load(): Promise<GLTF> {
        return new Promise((resolve, reject) => {
            const loader = new GLTFLoader();
            loader.load(
                this.asGltf,
                (gltf) => {
                    this._gltf = gltf;
                    const bbox = new THREE.Box3().setFromObject(gltf.scene);
                    const measure = new THREE.Vector3();
                    const size = bbox.getSize(measure);
                    // Size contains a vector with the size in meters
                    // normalize the object to 1 meter for the largest axis
                    const max = Math.max(size.x, size.y, size.z);
                    this._gltf.scene.scale.setScalar(1 / max);
                    resolve(this._gltf);
                },
                undefined,
                reject,
            );
        });
    }
}
