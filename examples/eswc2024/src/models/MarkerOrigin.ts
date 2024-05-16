import { IriString, SerializableThing } from "@openhps/rdf";
import { fidmark } from "../ontologies";
import { SerializableObject } from "@openhps/core";

@SerializableObject({
    rdf: {
        type: fidmark.MarkerOrigin
    }
})
export class MarkerOrigin extends SerializableThing {
    static fromURI(uri: IriString): MarkerOrigin {
        const dict = new MarkerOrigin();
        (dict as any).rdf = { uri };
        return dict;
    }
}

const ORIGIN_CENTER: MarkerOrigin = MarkerOrigin.fromURI(fidmark.OriginCenter);
const ORIGIN_BOTTOM_LEFT: MarkerOrigin = MarkerOrigin.fromURI(fidmark.OriginBottomLeft);
const ORIGIN_BOTTOM_RIGHT: MarkerOrigin = MarkerOrigin.fromURI(fidmark.OriginBottomRight);
const ORIGIN_TOP_LEFT: MarkerOrigin = MarkerOrigin.fromURI(fidmark.OriginTopLeft);
const ORIGIN_TOP_RIGHT: MarkerOrigin = MarkerOrigin.fromURI(fidmark.OriginTopRight);

export { ORIGIN_BOTTOM_LEFT, ORIGIN_BOTTOM_RIGHT, ORIGIN_CENTER, ORIGIN_TOP_LEFT, ORIGIN_TOP_RIGHT };
