import { fidmark } from '@/ontologies';
import { SerializableMember, SerializableObject } from '@openhps/core';

@SerializableObject({
    rdf: {
        type: fidmark.ImageDescriptor
    }
})
export class ImageDescriptor {
    @SerializableMember({
        rdf: {
            predicate: fidmark.asImage
        }
    })
    image: string;
}
