import { SerializableMember, SerializableObject } from "@openhps/core";
import { xsd } from "@openhps/rdf";

@SerializableObject({
    rdf: {
        type: "http://w3id.org/omg#Geometry"
    }
})
export class Geometry {
    @SerializableMember({
        rdf: {
            predicate: "https://w3id.org/fog#asGltf",
            datatype: xsd.anyURI
        }
    })
    asGltf?: string;
}
