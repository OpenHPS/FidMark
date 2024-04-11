type IriString = `${'http' | 'https'}://${string}`;
type Property = IriString; // eslint-disable-line
type Class = IriString; // eslint-disable-line
type Datatype = IriString; // eslint-disable-line
type OwlClass = IriString; // eslint-disable-line
type OwlObjectProperty = IriString; // eslint-disable-line
type OwlDatatypeProperty = IriString; // eslint-disable-line
type HydraResource = IriString; // eslint-disable-line
type HydraClass = IriString; // eslint-disable-line
type HydraLink = IriString; // eslint-disable-line
type HydraTemplatedLink = IriString; // eslint-disable-line
type HydraVariableRepresentation = IriString; // eslint-disable-line
type OtherIndividual = IriString; // eslint-disable-line

/**
 * Current geometry state
 *
 * A current geometry state classifies the most current - and thereby valid - geometry state. Which state is most current will be defined by the added timestamp using the prov:generatedAtTime relation.
 *
 * https://w3id.org/omg#CurrentGeometryState
 */
export const CurrentGeometryState: OwlClass = 'https://w3id.org/omg#CurrentGeometryState';

/**
 * Geometry state
 *
 * A geometry state is an evaluation holding the geometry description and metadata about a geometry that was true for the given time.
 * In case of geometry states, changing geometric properties does not cause the need for a new geometry state as long as the property was changed using the OPM concepts. If this is not the case, a copy of the now valid graph must be created and attached to a new geometry state. If an object within the geometry graph is changed (e.g. changing the primitive "Box" into a primitive "Sphere"), the old primitive ("Box") should be classified as opm:Deleted and the new primitive ("Sphere") should be added to the geometry graph in the correct place. The new geometry state should then be connected to any object of the geometry graph that is not opm:Deleted using the omg:containsGeometryObject relation.
 * Metadata of a geometry state must as a minimum be the time of generation stated by prov:generatedAtTime, but preferably also a prov:wasAttributedTo reference to the agent who created the state. In case properties are changed using the OPM concepts, the most current time of generation and agent who created the state will be determined using the omg:containsPropertyState relation.
 * Derived geometry descriptions are also stored as states as these change when the base geometry changes.
 *
 * https://w3id.org/omg#GeometryState
 */
export const GeometryState: OwlClass = 'https://w3id.org/omg#GeometryState';

/**
 * Geometry
 *
 * Abstract node for geometry that should not contain geometry descriptions (neither RDF-based or text-based). This node can be used to attach additional information to the information as author, time of creation, geometry context or dependencies with other geometry descriptions as transformations, complementations or derivations. By creating subclasses of this class for specific types of geometry descriptions (e.g. OBJ, GEOM, glTF), more informational value can be added and used in querying for specific geometry description formats.
 *
 * https://w3id.org/omg#Geometry
 */
export const Geometry: OwlClass = 'https://w3id.org/omg#Geometry';

/**
 * Geometry context
 *
 * Context of one (or multiple) geometry descriptions. A context can help extracting relevant geometry descriptions by connecting those to a specific shared context. Geometric contexts can be views of planners, planning stages (versions), or individually created contexts.
 *
 * https://w3id.org/omg#GeometryContext
 */
export const GeometryContext: OwlClass = 'https://w3id.org/omg#GeometryContext';

/**
 * complements geometry
 *
 * Relation between one geometry and another that is composed by the first. E.g. a point cloud of a columns laser scan in a high geometric detail complementing a simplified CSG geometry of the same column. Both geometry descriptions are closely related, but not directly derived from each other. The complementing geometry description may also just depict a small part of the entire geometry (e.g. the column header).
 *
 * https://w3id.org/omg#complementsGeometry
 */
export const complementsGeometry: OwlObjectProperty = 'https://w3id.org/omg#complementsGeometry';

/**
 * contains geometry object
 *
 * Relation between a geometry state and any object (node) of the related RDF-based geometry description that is relevant for this specific geometry state (not including deleted objects).
 *
 * https://w3id.org/omg#containsGeometryObject
 */
export const containsGeometryObject: OwlObjectProperty = 'https://w3id.org/omg#containsGeometryObject';

/**
 * contains property state
 *
 * Relation between a geometry state and a relevant property state. Any property that belongs to the geometry state's related geometry objects (using the omg:containsGeometryObject relation) can be a host for relevant property states.
 * This relation can be inferred, as long as the connection to the geometry object (omg:containsGeometryObject), its properties (seas:hasProperty) and the considered property state (opm:hasPropertyState) are modelled correctly.
 *
 * https://w3id.org/omg#containsPropertyState
 */
export const containsPropertyState: OwlObjectProperty = 'https://w3id.org/omg#containsPropertyState';

/**
 * has complex geometry description
 *
 * Relation between an object, a geometry, or a geometry state and its RDF-based geometry description. If more than one geometry description should be added to an object, the relation omg:hasGeometry to a new individual of the type omg:Geometry should be used for each geometry description. This step is necessary to allow interconnections between the geometry descriptions regarding their derivation or complementation for easier upkeep of data integrity. The introduction of subproperties of this property for specific geometry descriptions (e.g. OntoBREP, GEOM, OntoSTEP) may ease querying for wanted geometry description formats.
 *
 * https://w3id.org/omg#hasComplexGeometryDescription
 */
export const hasComplexGeometryDescription: OwlObjectProperty = 'https://w3id.org/omg#hasComplexGeometryDescription';

/**
 * has geometry
 *
 * Relation between any object and its geometric representation. An object may have multiple geometric representations, while one geometric represenation may always just be connected to one object (inverse functional).
 *
 * https://w3id.org/omg#hasGeometry
 */
export const hasGeometry: OwlObjectProperty = 'https://w3id.org/omg#hasGeometry';

/**
 * has geometry context
 *
 * Relation between a geometry or geometry state and its geometric context. A singular geometry may have multiple contexts, just as one context can be used for different geometries (of different objects)
 *
 * https://w3id.org/omg#hasGeometryContext
 */
export const hasGeometryContext: OwlObjectProperty = 'https://w3id.org/omg#hasGeometryContext';

/**
 * has geometry state
 *
 * Relation between a geometry and one of its geometry states. For each revision in an RDF-based geometry descriptions where changes were made to the graph nodes and not the properties, a new state must be defined to capture the new graph. This property is inverse functional as one geometry state can only belong to one geometry.
 *
 * https://w3id.org/omg#hasGeometryState
 */
export const hasGeometryState: OwlObjectProperty = 'https://w3id.org/omg#hasGeometryState';

/**
 * has inferred property state
 *
 * Relation between a property and its property state that has been inferred from the omg:isExplicitlyDerivedFrom relation. This relation will be inferred by the a chain axiom for every property that is derived from another (geometric) property (using omg:isExplicitlyDerivedFrom) which in turn has its own property state connected with the opm:hasPropertyState relation.
 *
 * https://w3id.org/omg#hasInferredPropertyState
 */
export const hasInferredPropertyState: OwlObjectProperty = 'https://w3id.org/omg#hasInferredPropertyState';

/**
 * is explicitly derived from
 *
 * Relation between two properties, where the first property is explicitly derived from the other. This means that the first property will always have the same value as the second. Cases where this relation can be used are if an object's geometry is modelled RDF-based and contains a property defining e.g. the height of the object. Then the non-geometric property for height should be explicitly derived from the geometric property to ensure data integrity.
 *
 * https://w3id.org/omg#isExplicitlyDerivedFrom
 */
export const isExplicitlyDerivedFrom: OwlObjectProperty = 'https://w3id.org/omg#isExplicitlyDerivedFrom';

/**
 * is derived from geometry
 *
 * Relation between two geometry descriptions where the first geometry can be derived from the second. It is possible for a geometry to be derived from multiple sources, as well as to model a bi-directional derivation between two geometries by using this relation.
 *
 * https://w3id.org/omg#isDerivedFromGeometry
 */
export const isDerivedFromGeometry: OwlObjectProperty = 'https://w3id.org/omg#isDerivedFromGeometry';

/**
 * is derived from geometry state
 *
 * Relation between two geometry states where the first (domain) has been converted from the second (range). A geometry state can only be converted from one other geometry state.
 *
 * https://w3id.org/omg#isDerivedFromGeometryState
 */
export const isDerivedFromGeometryState: OwlObjectProperty = 'https://w3id.org/omg#isDerivedFromGeometryState';

/**
 * is implicitly derived from
 *
 * Relation between a property and a geometry, where the property is implicitly derived from the geometry (e.g. properties for volumes or areas). This relation can be used to find inconsistencies, e.g. if the property has been changed while the geometry has not and vice versa.
 *
 * https://w3id.org/omg#isImplicitlyDerivedFrom
 */
export const isImplicitlyDerivedFrom: OwlObjectProperty = 'https://w3id.org/omg#isImplicitlyDerivedFrom';

/**
 * is part of geometry
 *
 * Relation between a referencing geometry and its origin geometry. The origin geometry contains a large geometry description, including the reference geometry's description. The reference geometry contains only its identifier within its origin geometry description.
 *
 * https://w3id.org/omg#isPartOfGeometry
 */
export const isPartOfGeometry: OwlObjectProperty = 'https://w3id.org/omg#isPartOfGeometry';

/**
 * transforms geometry
 *
 * Relation between one geometry and another one, where the first is a transformation of the second. This might be used when placing multiple objects of the same type and geometry within the same graph (e.g. multiple chairs into a building model). The first geometry will only consist of a transformation or tanslation matrix.
 *
 * https://w3id.org/omg#transformsGeometry
 */
export const transformsGeometry: OwlObjectProperty = 'https://w3id.org/omg#transformsGeometry';

/**
 * has referenced geometry identifier
 *
 * Property to add an identifier to a referencing geometry that can be used to identify the referencing geometry in its origin's complete geometry descritpion.
 *
 * https://w3id.org/omg#hasReferencedGeometryId
 */
export const hasReferencedGeometryId: OwlDatatypeProperty = 'https://w3id.org/omg#hasReferencedGeometryId';

/**
 * has simple geometry description
 *
 * Datatype property to connect a simple (non RDF-based), text-based or file-based geometry description to an object, geometry or geometry state. In case the geometry description is text-based or in a binary file format, it can be directly added to this property, if it is a file-based geometry description, the URI linking to the file should be added to this property. Should multiple geometries be added to the object, the omg:Geometry class with its relation (omg:hasGeometry) or even geometry states (omg:GeometryState and omg:hasGeometryState) should be introduced for each geometry resp. geometry version.
 *
 * https://w3id.org/omg#hasSimpleGeometryDescription
 */
export const hasSimpleGeometryDescription: OwlDatatypeProperty = 'https://w3id.org/omg#hasSimpleGeometryDescription';

export const _BASE: IriString = 'https://w3id.org/omg#';
export const _PREFIX: string = 'omg';
