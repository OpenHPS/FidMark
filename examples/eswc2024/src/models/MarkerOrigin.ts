import { IriString } from "@openhps/rdf";
import { fidmark } from "../ontologies";
import { SerializableObject } from "@openhps/core";

@SerializableObject({
    rdf: {
        type: fidmark.MarkerOrigin
    }
})
export class MarkerOrigin {

    static fromURI(uri: IriString): MarkerOrigin {
        const dict = new MarkerOrigin();
        (dict as any).rdf = { uri };
        return dict;
    }
}
