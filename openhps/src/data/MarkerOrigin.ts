import { IriString } from '@openhps/rdf';
import { fidmark } from '../terms';
import { SerializableObject } from '@openhps/core';

@SerializableObject({
    rdf: {
        type: fidmark.MarkerOrigin,
    },
})
export class MarkerOrigin {
    static CENTER: MarkerOrigin = MarkerOrigin.fromURI(fidmark.OriginCenter);
    static BOTTOM_LEFT: MarkerOrigin = MarkerOrigin.fromURI(fidmark.OriginBottomLeft);
    static BOTTOM_RIGHT: MarkerOrigin = MarkerOrigin.fromURI(fidmark.OriginBottomRight);
    static TOP_LEFT: MarkerOrigin = MarkerOrigin.fromURI(fidmark.OriginTopLeft);
    static TOP_RIGHT: MarkerOrigin = MarkerOrigin.fromURI(fidmark.OriginTopRight);

    static fromURI(uri: IriString): MarkerOrigin {
        const dict = new MarkerOrigin();
        (dict as any).rdf = { uri };
        return dict;
    }
}
