import { fidmark } from '@/ontologies';
import { ReferenceSpace, SerializableObject } from '@openhps/core';

@SerializableObject({
    rdf: {
        type: fidmark.FiducialMarker
    }
})
export class FiducialMarker extends ReferenceSpace {

}
