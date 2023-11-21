import { DataObject, SerializableMember, SerializableObject } from "@openhps/core";
import { sosa, xsd } from "@openhps/rdf";

@SerializableObject({
    rdf: {
        type: sosa.FeatureOfInterest
    }
})
export class VirtualObject extends DataObject {
    @SerializableMember({
        rdf: {
            predicate: "https://w3id.org/fog#asGltf",
            datatype: xsd.anyURI
        }
    })
    asGltf?: string;
}
