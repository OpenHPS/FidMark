import { DataObject, SerializableMember, SerializableObject } from '@openhps/core';
import { sosa } from '@openhps/rdf';
import { Geometry } from './geometry/Geometry';
import { omg } from '../terms';

@SerializableObject({
    rdf: {
        type: sosa.FeatureOfInterest,
    },
})
export class VirtualObject extends DataObject {
    @SerializableMember({
        rdf: {
            predicate: omg.hasGeometry,
        },
    })
    geometry?: Geometry;
}
