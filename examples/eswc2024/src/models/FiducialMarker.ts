import { fidmark } from '../ontologies';
import { LengthUnit, NumberType, ReferenceSpace, SerializableMember, SerializableObject } from '@openhps/core';
import { MarkerDictionary } from './MarkerDictionary';
import { RDFBuilder, Thing, qudt, rdf, xsd } from '@openhps/rdf';
import { ImageDescriptor } from './ImageDescriptor';

@SerializableObject({
    rdf: {
        type: fidmark.FiducialMarker
    }
})
export class FiducialMarker extends ReferenceSpace {
    @SerializableMember({
        rdf: {
            predicate: fidmark.markerData,
            datatype: xsd.string
        },
    })
    data?: string;

    @SerializableMember({
        rdf: {
            predicate: fidmark.markerIdentifier,
            datatype: xsd.integer
        },
        numberType: NumberType.INTEGER
    })
    identifier?: number;

    @SerializableMember({
        rdf: {
            predicate: fidmark.hasDictionary
        }
    })
    dictionary?: MarkerDictionary;

    @SerializableMember({
        rdf: {
            predicate: [fidmark.hasHeight],
            serializer: (value: number) => {
                return RDFBuilder.blankNode()
                    .add(rdf.type, qudt.QuantityValue)
                    .add(qudt.unit, LengthUnit.MILLIMETER)
                    .add(qudt.numericValue, value, xsd.double)
                    .build();
            },
            deserializer: (thing: Thing) => {
                return parseFloat(thing.predicates[qudt.numericValue][0].value);
            },
        },
    })
    height?: number;

    @SerializableMember({
        rdf: {
            predicate: [fidmark.hasWidth],
            serializer: (value: number) => {
                return RDFBuilder.blankNode()
                    .add(rdf.type, qudt.QuantityValue)
                    .add(qudt.unit, LengthUnit.MILLIMETER)
                    .add(qudt.numericValue, value, xsd.double)
                    .build();
            },
            deserializer: (thing: Thing) => {
                return parseFloat(thing.predicates[qudt.numericValue][0].value);
            },
        },
    })
    width?: number;

    @SerializableMember({
        rdf: {
            predicate: fidmark.hasImageDesciptor
        }
    })
    imageDescriptor?: ImageDescriptor;
}
