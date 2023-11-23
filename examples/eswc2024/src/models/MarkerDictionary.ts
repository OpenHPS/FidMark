import { SerializableMember, SerializableObject } from "@openhps/core";

@SerializableObject({
    rdf: {
        type: "http://purl.org/fidmark/MarkerDictionary"
    }
})
export class MarkerDictionary {
    @SerializableMember({
        rdf: {
            predicate: "http://purl.org/fidmark/dictionarySize"
        }
    })
    size: number;

    @SerializableMember({
        rdf: {
            predicate: "http://purl.org/fidmark/hammingDistance"
        }
    })
    hammingSize: number;
}
