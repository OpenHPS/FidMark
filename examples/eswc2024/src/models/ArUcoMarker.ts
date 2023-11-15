import { FiducialMarker } from "./FiducialMarker";
import { SerializableMember, SerializableObject } from '@openhps/core';

@SerializableObject({
    rdf: {
        type: "http://purl.org/fidmark/ArUco"
    }
})
export class ArUcoMarker extends FiducialMarker {
    @SerializableMember({
        rdf: {
            predicate: "http://purl.org/fidmark/markerIdentifier"
        }
    })
    identifier: number;
}
