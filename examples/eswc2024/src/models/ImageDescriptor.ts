import { SerializableObject } from '@openhps/core';

@SerializableObject({
    rdf: {
        type: "http://purl.org/fidmark/ImageDescriptor"
    }
})
export class ImageDescriptor {
    image: string;
}
