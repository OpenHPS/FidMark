import { IriString, xsd } from '@openhps/rdf';
import { fidmark } from '../terms';
import { SerializableMember, SerializableObject } from '@openhps/core';

@SerializableObject({
    rdf: {
        type: fidmark.ImageDescriptor
    }
})
export class ImageDescriptor {
    @SerializableMember({
        rdf: {
            predicate: fidmark.asImage,
            datatype: xsd.anyURI
        }
    })
    image?: IriString;

    @SerializableMember({
        rdf: {
            predicate: fidmark.asNFT,
            datatype: xsd.anyURI
        }
    })
    nft?: IriString;

    @SerializableMember({
        rdf: {
            predicate: fidmark.asPATT,
            datatype: xsd.anyURI
        }
    })
    pattern?: IriString;
}
