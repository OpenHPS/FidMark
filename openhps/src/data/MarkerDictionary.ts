import { IriString } from '@openhps/rdf';
import { fidmark } from '../terms';
import { SerializableMember, SerializableObject } from '@openhps/core';

@SerializableObject({
    rdf: {
        type: fidmark.MarkerDictionary,
    },
})
export class MarkerDictionary {
    @SerializableMember({
        rdf: {
            predicate: fidmark.dictionarySize,
        },
    })
    size: number;

    @SerializableMember({
        rdf: {
            predicate: fidmark.hammingDistance,
        },
    })
    hammingSize: number;

    static fromURI(uri: IriString): MarkerDictionary {
        const dict = new MarkerDictionary();
        (dict as any).rdf = { uri };
        return dict;
    }
}
