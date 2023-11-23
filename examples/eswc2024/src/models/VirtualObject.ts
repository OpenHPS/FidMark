import { DataObject, SerializableMember, SerializableObject } from "@openhps/core";
import { sosa } from "@openhps/rdf";
import { Geometry } from "./geometry/Geometry";

@SerializableObject({
    rdf: {
        type: sosa.FeatureOfInterest
    }
})
export class VirtualObject extends DataObject {
    @SerializableMember({
        rdf: {
            predicate: "https://w3id.org/omg#hasGeometry",
        }
    })
    geometry?: Geometry;
}
