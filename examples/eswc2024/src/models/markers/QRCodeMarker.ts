import { FiducialMarker } from "../FiducialMarker";
import { SerializableObject } from '@openhps/core';
import { fidmark } from "../../ontologies";

@SerializableObject({
    rdf: {
        type: fidmark.QRCode
    }
})
export class QRCodeMarker extends FiducialMarker {
}
