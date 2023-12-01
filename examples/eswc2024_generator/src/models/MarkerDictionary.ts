import { fidmark } from "@/ontologies";
import { SerializableMember, SerializableObject } from "@openhps/core";

@SerializableObject({
    rdf: {
        type: fidmark.MarkerDictionary
    }
})
export class MarkerDictionary {
    @SerializableMember({
        rdf: {
            predicate: fidmark.dictionarySize
        }
    })
    size: number;

    @SerializableMember({
        rdf: {
            predicate: fidmark.hammingDistance
        }
    })
    hammingSize: number;
}
