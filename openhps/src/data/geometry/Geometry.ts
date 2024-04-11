import { fog, omg } from "../../terms";
import { SerializableMember, SerializableObject } from "@openhps/core";
import { xsd } from "@openhps/rdf";
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

@SerializableObject({
    rdf: {
        type: omg.Geometry
    }
})
export class Geometry {
    @SerializableMember({
        rdf: {
            predicate: fog.asGltf,
            datatype: xsd.anyURI
        }
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
                gltf => {
                    this._gltf = gltf;
                    resolve(this._gltf);
                }, undefined, reject);
        });
    }
}
