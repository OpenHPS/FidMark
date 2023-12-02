import { FiducialMarker } from "../FiducialMarker";
import { SerializableObject } from '@openhps/core';
import { fidmark } from "../../ontologies";

@SerializableObject({
    rdf: {
        type: fidmark.ArUco
    }
})
export class ArUcoMarker extends FiducialMarker {
}
