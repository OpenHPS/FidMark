import { FiducialMarker } from "./FiducialMarker";
import { SerializableMember, SerializableObject } from '@openhps/core';
import { MarkerDictionary } from "./MarkerDictionary";

@SerializableObject({
    rdf: {
        type: "http://purl.org/fidmark/ArUco"
    }
})
export class ArUcoMarker extends FiducialMarker {
    @SerializableMember({
        rdf: {
            predicate: "http://purl.org/fidmark/identifier"
        }
    })
    identifier: number;

    @SerializableMember({
        rdf: {
            predicate: "http://purl.org/fidmark/hasDictionary"
        }
    })
    dictionary: MarkerDictionary;
}
