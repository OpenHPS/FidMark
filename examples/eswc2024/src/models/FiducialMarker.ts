import { ReferenceSpace, SerializableObject } from '@openhps/core';

@SerializableObject({
    rdf: {
        type: "http://purl.org/fidmark/FiducialMarker"
    }
})
export class FiducialMarker extends ReferenceSpace {

}
