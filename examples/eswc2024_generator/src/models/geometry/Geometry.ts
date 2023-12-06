import { fog, omg } from "../../ontologies";
import { SerializableMember, SerializableObject } from "@openhps/core";
import { xsd } from "@openhps/rdf";

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
}
