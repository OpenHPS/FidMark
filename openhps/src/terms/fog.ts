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
 * Referenced content
 *
 * Referenced content of the following geometry descriptions: glTF and OBJ. It contains exactly one link to a texture, separate binary glTF geometry or a OBJ material that is referenced by the main file (resp. .gltf and .obj). The name of the referenced file, as stored in the main file, is connected via a rdfs:label node
 *
 * https://w3id.org/fog#ReferencedContent
 */
export const ReferencedContent: OwlClass = 'https://w3id.org/fog#ReferencedContent';

/**
 * as 3DMO ontology
 *
 * The object relation pointing to a RDF-based geometry description following the 3DMO ontology. It is strongly adviced to use the more specific subproperty (fog:as3dmo_v1.1)
 *
 * https://w3id.org/fog#as3dmo
 */
export const as3dmo: OtherIndividual = 'https://w3id.org/fog#as3dmo';

/**
 * as GeoJSON-LD
 *
 * The object relation pointing to a GeoJSON-LD geometry description: a GeoJSON geometry description complemented with the corresponding JSON-LD context to make it RDF. It should be connected to the topnode of the geometry description. Note that this geometry description can only be used to depict single points, as the current JSON-LD specification v1.0 does not implement the deserialisation of nested lists to RDF
 *
 * https://w3id.org/fog#asGeojson-ld
 */
export const asGeojson_ld: OtherIndividual = 'https://w3id.org/fog#asGeojson-ld';

/**
 * as GEOM ontology
 *
 * The object relation pointing to a RDF-based geometry description following the GEOM ontology. It should be connected to the topnode of the geometry description.
 *
 * https://w3id.org/fog#asGeomOntology
 */
export const asGeomOntology: OtherIndividual = 'https://w3id.org/fog#asGeomOntology';

/**
 * as ifcOWL ontology
 *
 * The object relation pointing to a RDF-based geometry description following the IfcOWL ontology.
 *
 * https://w3id.org/fog#asIfcowl
 */
export const asIfcowl: OtherIndividual = 'https://w3id.org/fog#asIfcowl';

/**
 * as ifcOWL v2x3 Final ontology
 *
 * The object relation pointing to a RDF-based geometry description following the IfcOWL v2x3 Final ontology.
 *
 * https://w3id.org/fog#asIfcowl_v2x3final
 */
export const asIfcowl_v2x3final: OtherIndividual = 'https://w3id.org/fog#asIfcowl_v2x3final';

/**
 * as ifcOWL v2x3 TC1 ontology
 *
 * The object relation pointing to a RDF-based geometry description following the IfcOWL v2x3 TC1 ontology.
 *
 * https://w3id.org/fog#asIfcowl_v2x3tc1
 */
export const asIfcowl_v2x3tc1: OtherIndividual = 'https://w3id.org/fog#asIfcowl_v2x3tc1';

/**
 * as ifcOWL v2x4 Add1 ontology
 *
 * The object relation pointing to a RDF-based geometry description following the IfcOWL v2x4 Add1 ontology.
 *
 * https://w3id.org/fog#asIfcowl_v2x4add1
 */
export const asIfcowl_v2x4add1: OtherIndividual = 'https://w3id.org/fog#asIfcowl_v2x4add1';

/**
 * as ifcOWL v2x4 Add2 ontology
 *
 * The object relation pointing to a RDF-based geometry description following the IfcOWL v2x4 Add2 ontology.
 *
 * https://w3id.org/fog#asIfcowl_v2x4add2
 */
export const asIfcowl_v2x4add2: OtherIndividual = 'https://w3id.org/fog#asIfcowl_v2x4add2';

/**
 * as ifcOWL v2x4 Final ontology
 *
 * The object relation pointing to a RDF-based geometry description following the IfcOWL v2x4 Final ontology.
 *
 * https://w3id.org/fog#asIfcowl_v2x4final
 */
export const asIfcowl_v2x4final: OtherIndividual = 'https://w3id.org/fog#asIfcowl_v2x4final';

/**
 * as OntoBREP ontology
 *
 * The object relation pointing to a RDF-based geometry description following the OntoBREP ontology. It should be connected to the topnode of the geometry description.
 *
 * https://w3id.org/fog#asOntobrepOntology
 */
export const asOntobrepOntology: OtherIndividual = 'https://w3id.org/fog#asOntobrepOntology';

/**
 * as OntoSTEP ontology
 *
 * The object relation pointing to a RDF-based geometry description following the OntoSTEP ontology. It should be connected to the topnode of the geometry description.
 *
 * https://w3id.org/fog#asOntostepOntology
 */
export const asOntostepOntology: OtherIndividual = 'https://w3id.org/fog#asOntostepOntology';

/**
 *
 *
 *
 *
 * https://w3id.org/fog#hasReferencedContent
 */
export const hasReferencedContent: OtherIndividual = 'https://w3id.org/fog#hasReferencedContent';

/**
 * as COLLADA format
 *
 * The datatype relation pointing to a geometry description following the open COLLADA format from the Khronos Group. The format consists of a single .dae file (text-based). It is strongly adviced to use the more specific subproperties (e.g. fog:asCollada_v1.4.1).
 *
 * https://w3id.org/fog#asCollada
 */
export const asCollada: OtherIndividual = 'https://w3id.org/fog#asCollada';

/**
 * as DWG format
 *
 * The datatype relation pointing to a geometry description following the proprietary DWG format from Autodesk. The Open Design Alliance created a 'specification for .dwg files' that is publicly available. The format consists of a single .dwg file (binary). It is strongly adviced to use the more specific subproperties (e.g. fog:asDwg_v2018).
 *
 * https://w3id.org/fog#asDwg
 */
export const asDwg: OtherIndividual = 'https://w3id.org/fog#asDwg';

/**
 * as DWG 2010 format (.dwg)
 *
 * The datatype relation pointing to a geometry description following the proprietary DWG v2010 format from Autodesk. It consists of a single .dwg file (binary).
 *
 * https://w3id.org/fog#asDwg_v2010
 */
export const asDwg_v2010: OtherIndividual = 'https://w3id.org/fog#asDwg_v2010';

/**
 * as DWG 2013 format (.dwg)
 *
 * The datatype relation pointing to a geometry description following the proprietary DWG v2013 format from Autodesk. It consists of a single .dwg file (binary).
 *
 * https://w3id.org/fog#asDwg_v2013
 */
export const asDwg_v2013: OtherIndividual = 'https://w3id.org/fog#asDwg_v2013';

/**
 * as DWG 2018 format (.dwg)
 *
 * The datatype relation pointing to a geometry description following the proprietary DWG v2018 format from Autodesk. It consists of a single .dwg file (binary).
 *
 * https://w3id.org/fog#asDwg_v2018
 */
export const asDwg_v2018: OtherIndividual = 'https://w3id.org/fog#asDwg_v2018';

/**
 * as E57 format
 *
 * The datatype relation pointing to a point cloud geometry description following the open E57 format developed by the ASTM Committee E57. The format consists of a single .e57 file (partially binary, partially text-based). It is strongly adviced to use the more specific subproperties (e.g. fog:asE57_v1.0).
 *
 * https://w3id.org/fog#asE57
 */
export const asE57: OtherIndividual = 'https://w3id.org/fog#asE57';

/**
 * as GeoJSON format
 *
 * The datatype relation pointing to a geometry description following the open GeoJSON format. The format consists of a single .json file (text-based). It is strongly adviced to use the more specific subproperties (e.g. fog:asGeojson_v2016). Note that the version proposed by the IETF GeoJSON Working Group (fog:asGeojson_v2016) is derived from the now obsolete 2008 version (fog:asGeojson_v2008).
 *
 * https://w3id.org/fog#asGeojson
 */
export const asGeojson: OtherIndividual = 'https://w3id.org/fog#asGeojson';

/**
 * as GeoJSON format v2008 (.json)
 *
 * The datatype relation pointing to a geometry description following the open GeoJSON v2008 format. The format consists of a single .json file (text-based). Note that the version proposed by the IETF (fog:asGeojson_v2016) is derived from the now obsolete 2008 version (fog:asGeojson_v2008).
 *
 * https://w3id.org/fog#asGeojson_v2008
 */
export const asGeojson_v2008: OtherIndividual = 'https://w3id.org/fog#asGeojson_v2008';

/**
 * as GeoJSON v2016 format (.json)
 *
 * The datatype relation pointing to a geometry description following the open GeoJSON v2016 format developed by the IETF GeoJSON Working Group. The format consists of a single .json file (text-based). Note that the version proposed by the IETF (fog:asGeojson_v2016) is derived from the now obsolete 2008 version (fog:asGeojson_v2008).
 *
 * https://w3id.org/fog#asGeojson_v2016
 */
export const asGeojson_v2016: OtherIndividual = 'https://w3id.org/fog#asGeojson_v2016';

/**
 * as glTF format
 *
 * The datatype relation pointing to a geometry description following the open glTF format from the Khronos Group. The format consists of one (.gltf with embedded binary geometry/textures/shaders, or .glb) or multiple files (combination of binary and/or text-based files). It is strongly adviced to use the more specific subsubproperties (e.g. fog:asGltf_v2.0-gltf).
 *
 * https://w3id.org/fog#asGltf
 */
export const asGltf: OwlDatatypeProperty = 'https://w3id.org/fog#asGltf';

/**
 * as GML format
 *
 * The datatype relation pointing to a text-based geometry description following one of the open GML formats developed by OGC and ISO. The format consists of a single .gml file (text-based). It is strongly adviced to use the more specific subproperties (e.g. fog:asGml_v3.3.0). Note that this property is disjoint with geo:asGML because of the more strict domain and range restrictions in GeoSPARQL.
 *
 * https://w3id.org/fog#asGml
 */
export const asGml: OtherIndividual = 'https://w3id.org/fog#asGml';

/**
 * as IFC format
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format as documented by buildingSMART and in its ISO 16739 standard. The format consists of a single .ifc or .ifcxml file (text-based). It is strongly adviced to use the more specific subproperties (e.g. fog:asIfc_v2x4-icfxml).
 *
 * https://w3id.org/fog#asIfc
 */
export const asIfc: OtherIndividual = 'https://w3id.org/fog#asIfc';

/**
 * as IFC v2x3
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x3 as documented by buildingSMART and in its ISO 16739 standard
 *
 * https://w3id.org/fog#asIfc_v2x3
 */
export const asIfc_v2x3: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x3';

/**
 * as IFC v2x3 file (.ifc)
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x3 as documented by buildingSMART and in its ISO 16739 standard. The IFC file is serialised in the STEP Physical File Format (SPFF).
 *
 * https://w3id.org/fog#asIfc_v2x3-ifc
 */
export const asIfc_v2x3_ifc: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x3-ifc';

/**
 * as IFC v2x3 file (.ifcxml)
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x3 as documented by buildingSMART and in its ISO 16739 standard. The IFC file is serialised in the XML format.
 *
 * https://w3id.org/fog#asIfc_v2x3-ifcxml
 */
export const asIfc_v2x3_ifcxml: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x3-ifcxml';

/**
 * as IFC v2x3 TC1
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x3 TC1 as documented by buildingSMART and in its ISO 16739 standard
 *
 * https://w3id.org/fog#asIfc_v2x3tc1
 */
export const asIfc_v2x3tc1: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x3tc1';

/**
 * as IFC v2x3 TC1 file (.ifc)
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x3 TC1 as documented by buildingSMART and in its ISO 16739 standard. The IFC file is serialised in the STEP Physical File Format (SPFF).
 *
 * https://w3id.org/fog#asIfc_v2x3tc1-ifc
 */
export const asIfc_v2x3tc1_ifc: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x3tc1-ifc';

/**
 * as IFC v2x3 TC1 file (.ifcxml)
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x3 TC1 as documented by buildingSMART and in its ISO 16739 standard. The IFC file is serialised in the XML format.
 *
 * https://w3id.org/fog#asIfc_v2x3tc1-ifcxml
 */
export const asIfc_v2x3tc1_ifcxml: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x3tc1-ifcxml';

/**
 * as IFC v2x4
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x4 as documented by buildingSMART and in its ISO 16739 standard
 *
 * https://w3id.org/fog#asIfc_v2x4
 */
export const asIfc_v2x4: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x4';

/**
 * as IFC v2x4 file (.ifc)
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x4 as documented by buildingSMART and in its ISO 16739 standard. The IFC file is serialised in the STEP Physical File Format (SPFF).
 *
 * https://w3id.org/fog#asIfc_v2x4-ifc
 */
export const asIfc_v2x4_ifc: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x4-ifc';

/**
 * as IFC v2x4 file (.ifcxml)
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x4 as documented by buildingSMART and in its ISO 16739 standard. The IFC file is serialised in the XML format.
 *
 * https://w3id.org/fog#asIfc_v2x4-ifcxml
 */
export const asIfc_v2x4_ifcxml: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x4-ifcxml';

/**
 * as IFC v2x4 Add1
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x4 Add1 as documented by buildingSMART and in its ISO 16739 standard
 *
 * https://w3id.org/fog#asIfc_v2x4add1
 */
export const asIfc_v2x4add1: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x4add1';

/**
 * as IFC v2x4 Add1 file (.ifc)
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x4 Add1 as documented by buildingSMART and in its ISO 16739 standard. The IFC file is serialised in the STEP Physical File Format (SPFF).
 *
 * https://w3id.org/fog#asIfc_v2x4add1-ifc
 */
export const asIfc_v2x4add1_ifc: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x4add1-ifc';

/**
 * as IFC v2x4 Add1 file (.ifcxml)
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x4 Add1 as documented by buildingSMART and in its ISO 16739 standard. The IFC file is serialised in the XML format.
 *
 * https://w3id.org/fog#asIfc_v2x4add1-ifcxml
 */
export const asIfc_v2x4add1_ifcxml: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x4add1-ifcxml';

/**
 * as IFC v2x4 Add2
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x4 Add2 as documented by buildingSMART and in its ISO 16739 standard
 *
 * https://w3id.org/fog#asIfc_v2x4add2
 */
export const asIfc_v2x4add2: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x4add2';

/**
 * as IFC v2x4 Add2 file (.ifc)
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x4 Add2 as documented by buildingSMART and in its ISO 16739 standard. The IFC file is serialised in the STEP Physical File Format (SPFF).
 *
 * https://w3id.org/fog#asIfc_v2x4add2-ifc
 */
export const asIfc_v2x4add2_ifc: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x4add2-ifc';

/**
 * as IFC v2x4 Add 2 file (.ifcxml)
 *
 * The datatype relation pointing to a text-based geometry description following the open IFC format v2x4 Add2 as documented by buildingSMART and in its ISO 16739 standard. The IFC file is serialised in the XML format.
 *
 * https://w3id.org/fog#asIfc_v2x4add2-ifcxml
 */
export const asIfc_v2x4add2_ifcxml: OtherIndividual = 'https://w3id.org/fog#asIfc_v2x4add2-ifcxml';

/**
 * as IGES format
 *
 * The datatype relation pointing to a geometry description following the IGES format as documented in its ANSI standard. The format consists of a single .iges/.igs file (text-based). It is strongly adviced to use the more specific subproperties (e.g. fog:asIges_v5.3).
 *
 * https://w3id.org/fog#asIges
 */
export const asIges: OtherIndividual = 'https://w3id.org/fog#asIges';

/**
 * as LAS point cloud format
 *
 * The datatype relation pointing to a binary encoded point cloud following the open LAS format which was developed by the ASPRS. The format consists of a single .las or .laz file (binary). It is strongly adviced to use the more specific subproperties (e.g. fog:asLas_v1.4-las).
 *
 * https://w3id.org/fog#asLas
 */
export const asLas: OtherIndividual = 'https://w3id.org/fog#asLas';

/**
 * as Nexus format
 *
 * The datatype relation pointing to a geometry description following the Nexus format for multiresoltion meshes and point clouds (ISTI - Italian National Research Council - Visual Computing Lab). The format consists of a single .nxs or .nxz file (binary). It is strongly adviced to use the more specific subproperties (e.g. fog:asNexus_v4.2-nxs)
 *
 * https://w3id.org/fog#asNexus
 */
export const asNexus: OtherIndividual = 'https://w3id.org/fog#asNexus';

/**
 * as OBJ format
 *
 * The datatype relation pointing to a text-based geometry description following the OBJ format developed by Wavefront Technologies. The format consists of a single .obj file and an optional material file (.mtl). It is strongly adviced to use the more specific subsubproperties (e.g. fog:asObj_v3.0-obj).
 *
 * https://w3id.org/fog#asObj
 */
export const asObj: OwlDatatypeProperty = 'https://w3id.org/fog#asObj';

/**
 * as PCD point cloud format
 *
 * The datatype relation pointing to a binary encoded point cloud following the open PCD format which was developed as part of the open source project PCL (point cloud library). The format consists of a single .pcd file (binary or text-based). It is strongly adviced to use the more specific subproperties (e.g. fog:asPcd_v0.7).
 *
 * https://w3id.org/fog#asPcd
 */
export const asPcd: OtherIndividual = 'https://w3id.org/fog#asPcd';

/**
 *
 *
 * The datatype relation pointing to a geometry description following the PLY format which was developed by Greg Turk (Stanford University). The format consists of a single .ply file which is either text-based or binary. It is strongly adviced to use the more specific subsubproperties (e.g. fog:asPly_v1.0-ascii).
 *
 * https://w3id.org/fog#asPly
 */
export const asPly: OtherIndividual = 'https://w3id.org/fog#asPly';

/**
 * as Revit format
 *
 * The datatype relation pointing to a geometry description following the proprietary Revit format (Autodesk). The format consists of a single .rvt file (binary). It is strongly adviced to use the more specific subproperties (e.g. fog:asRevit_v2020)
 *
 * https://w3id.org/fog#asRevit
 */
export const asRevit: OtherIndividual = 'https://w3id.org/fog#asRevit';

/**
 * as Revit format v2017 (.rvt)
 *
 * The datatype relation pointing to a geometry description following the proprietary Revit v2017 format (Autodesk). The format consists of a single .rvt file (binary).
 *
 * https://w3id.org/fog#asRevit_v2017
 */
export const asRevit_v2017: OtherIndividual = 'https://w3id.org/fog#asRevit_v2017';

/**
 * as Revit format v2018 (.rvt)
 *
 * The datatype relation pointing to a geometry description following the proprietary Revit v2018 format (Autodesk). The format consists of a single .rvt file (binary).
 *
 * https://w3id.org/fog#asRevit_v2018
 */
export const asRevit_v2018: OtherIndividual = 'https://w3id.org/fog#asRevit_v2018';

/**
 * as Revit format v2019 (.rvt)
 *
 * The datatype relation pointing to a geometry description following the proprietary Revit v2019 format (Autodesk). The format consists of a single .rvt file (binary).
 *
 * https://w3id.org/fog#asRevit_v2019
 */
export const asRevit_v2019: OtherIndividual = 'https://w3id.org/fog#asRevit_v2019';

/**
 * as Revit format v2020 (.rvt)
 *
 * The datatype relation pointing to a geometry description following the proprietary Revit v2020 format (Autodesk). The format consists of a single .rvt file (binary).
 *
 * https://w3id.org/fog#asRevit_v2020
 */
export const asRevit_v2020: OtherIndividual = 'https://w3id.org/fog#asRevit_v2020';

/**
 * as Rhino format
 *
 * The datatype relation pointing to a geometry description following the proprietary Rhinoceros format (McNeel). The format consists of a single .3dm file (binary). It is strongly adviced to use the more specific subproperties (e.g. fog:asRhino_v6)
 *
 * https://w3id.org/fog#asRhino
 */
export const asRhino: OtherIndividual = 'https://w3id.org/fog#asRhino';

/**
 * as Rhino format v5 (.3dm)
 *
 * The datatype relation pointing to a geometry description following the proprietary Rhinoceros format v5 (McNeel). The format consists of a single .3dm file (binary).
 *
 * https://w3id.org/fog#asRhino_v5
 */
export const asRhino_v5: OtherIndividual = 'https://w3id.org/fog#asRhino_v5';

/**
 * as Rhino format v6 (.3dm)
 *
 * The datatype relation pointing to a geometry description following the proprietary Rhinoceros format v6 (McNeel). The format consists of a single .3dm file (binary).
 *
 * https://w3id.org/fog#asRhino_v6
 */
export const asRhino_v6: OtherIndividual = 'https://w3id.org/fog#asRhino_v6';

/**
 * as Simple Feature Access geometry format
 *
 * The datatype relation pointing to a geometry description following the open Simple Feature Access (SFA) standard developed by the OGC and ISO. The format consists of a single .wkt (text-based) or .wkb (binary) file. It is strongly adviced to use the more specific subsubproperties (e.g. fog:asSfa_v2-wkt).
 *
 * https://w3id.org/fog#asSfa
 */
export const asSfa: OtherIndividual = 'https://w3id.org/fog#asSfa';

/**
 * as Simple Feature Access v1 format
 *
 * The datatype relation pointing to a geometry description following the open Simple Feature Access (SFA) v1 standard developed by the OGC. The format is text-based. It is strongly adviced to use the more specific subproperties (e.g. fog:asSfa_v1-wkt). Note that this standard is now considered depreciated in favor of SFA v2.
 *
 * https://w3id.org/fog#asSfa_v1
 */
export const asSfa_v1: OtherIndividual = 'https://w3id.org/fog#asSfa_v1';

/**
 * as Well Known Text SFA v1 geometry
 *
 * The datatype relation pointing to a Well Know Text (WKT) geometry following the open Simple Feature Access (SFA) v1 standard developed by the OGC. The format is text-based. Note that the SFA v1 standard is now considered depreciated in favor of SFA v2. Note that this property is disjoint with geo:asWKT because of the more strict domain and range restrictions in GeoSPARQL.
 *
 * https://w3id.org/fog#asSfa_v1-wkt
 */
export const asSfa_v1_wkt: OtherIndividual = 'https://w3id.org/fog#asSfa_v1-wkt';

/**
 * as Simple Feature Access v2 format
 *
 * The datatype relation pointing to a geometry description following the open Simple Feature Access (SFA) v2 standard developed by the OGC and ISO. The format is either text-based (WKT) or binary (WKB). It is strongly adviced to use the more specific subproperties (e.g. fog:asSfa_v2-wkt).
 *
 * https://w3id.org/fog#asSfa_v2
 */
export const asSfa_v2: OtherIndividual = 'https://w3id.org/fog#asSfa_v2';

/**
 * as Well Known Binary SFA v2 geometry
 *
 * The datatype relation pointing to a Well Know Binary (WKB) geometry following the open Simple Feature Access (SFA) v2 standard developed by the OGC and ISO.
 *
 * https://w3id.org/fog#asSfa_v2-wkb
 */
export const asSfa_v2_wkb: OtherIndividual = 'https://w3id.org/fog#asSfa_v2-wkb';

/**
 * as Well Known Text SFA v2 geometry
 *
 * The datatype relation pointing to a Well Know Text (WKT) geometry following the open Simple Feature Access (SFA) v2 standard developed by the OGC and ISO. The format is text-based. Note that this property is disjoint with geo:asWKT because of the more strict domain and range restrictions in GeoSPARQL.
 *
 * https://w3id.org/fog#asSfa_v2-wkt
 */
export const asSfa_v2_wkt: OtherIndividual = 'https://w3id.org/fog#asSfa_v2-wkt';

/**
 * as Shapefile format
 *
 * The datatype relation pointing to a geometry description following the open Shapefile format developed by ESRI. The format consists of multiple files, including as a minimum the geometry (.shp), the index of the feature geometry (.shx) and attribute information of features (.dbf). These three files are binary, while others can be text-based (e.g. the .prj file). It is strongly adviced to use the more specific subsubproperties (e.g. fog:asShapefile-shp). Note that no file format version is provided by ESRI and that the format is expected to be stable.
 *
 * https://w3id.org/fog#asShapefile
 */
export const asShapefile: OwlDatatypeProperty = 'https://w3id.org/fog#asShapefile';

/**
 * as Shapefile dBASE table (.dbf)
 *
 * The datatype relation pointing to a dBASE table file (.dbf) following the open Shapefile format developed by ESRI. This file contains the attributes of each shape. The Shapefile format consists of multiple files, including as a minimum the geometry (.shp), the index of the feature geometry (.shx) and attribute information of features (.dbf). These three files are binary, while others can be text-based (e.g. the .prj file).
 *
 * https://w3id.org/fog#asShapefile-dbf
 */
export const asShapefile_dbf: OtherIndividual = 'https://w3id.org/fog#asShapefile-dbf';

/**
 *
 *
 * The datatype relation pointing to a projection format file (.prj) following the open Shapefile format developed by ESRI. This file contains the the coordinate system and projection information of the shapes. The Shapefile format consists of multiple files, including as a minimum the geometry (.shp), the index of the feature geometry (.shx) and attribute information of features (.dbf). These three files are binary, while others can be text-based (e.g. the .prj file).
 *
 * https://w3id.org/fog#asShapefile-prj
 */
export const asShapefile_prj: OtherIndividual = 'https://w3id.org/fog#asShapefile-prj';

/**
 *
 *
 * The datatype relation pointing to a geometry file (.shp) following the open Shapefile format developed by ESRI. This file contains the geometry of the shape. The Shapefile format consists of multiple files, including as a minimum the geometry (.shp), the index of the feature geometry (.shx) and attribute information of features (.dbf). These three files are binary, while others can be text-based (e.g. the .prj file).
 *
 * https://w3id.org/fog#asShapefile-shp
 */
export const asShapefile_shp: OtherIndividual = 'https://w3id.org/fog#asShapefile-shp';

/**
 *
 *
 * The datatype relation pointing to a shape index format file (.shx) following the open Shapefile format developed by ESRI. This file contains the positional index of the geometry. The Shapefile format consists of multiple files, including as a minimum the geometry (.shp), the index of the feature geometry (.shx) and attribute information of features (.dbf). These three files are binary, while others can be text-based (e.g. the .prj file).
 *
 * https://w3id.org/fog#asShapefile-shx
 */
export const asShapefile_shx: OtherIndividual = 'https://w3id.org/fog#asShapefile-shx';

/**
 * as SketchUp format
 *
 * The datatype relation pointing to a geometry description following the proprietary SketchUp format (Trimble). The format consists of a single .skp file (binary). It is strongly adviced to use the more specific subproperties (e.g. fog:asSketchUp_v2019)
 *
 * https://w3id.org/fog#asSketchUp
 */
export const asSketchUp: OtherIndividual = 'https://w3id.org/fog#asSketchUp';

/**
 * as SketchUp format v2017 (.skp)
 *
 * The datatype relation pointing to a geometry description following the proprietary SketchUp v2017 format (Trimble). The format consists of a single .skp file (binary).
 *
 * https://w3id.org/fog#asSketchUp_v2017
 */
export const asSketchUp_v2017: OtherIndividual = 'https://w3id.org/fog#asSketchUp_v2017';

/**
 * as SketchUp format v2018 (.skp)
 *
 * The datatype relation pointing to a geometry description following the proprietary SketchUp v2018 format (Trimble). The format consists of a single .skp file (binary).
 *
 * https://w3id.org/fog#asSketchUp_v2018
 */
export const asSketchUp_v2018: OtherIndividual = 'https://w3id.org/fog#asSketchUp_v2018';

/**
 * as SketchUp format v2019 (.skp)
 *
 * The datatype relation pointing to a geometry description following the proprietary SketchUp v2019 format (Trimble). The format consists of a single .skp file (binary).
 *
 * https://w3id.org/fog#asSketchUp_v2019
 */
export const asSketchUp_v2019: OtherIndividual = 'https://w3id.org/fog#asSketchUp_v2019';

/**
 * as SPFF file (.step)
 *
 * The datatype relation pointing to a geometry description following the STEP Physical File Format (SPFF) format which was developed by ISO. The format consists of a single .step file which is text-based. It is strongly adviced to use more specific subproperties.
 *
 * https://w3id.org/fog#asStep
 */
export const asStep: OtherIndividual = 'https://w3id.org/fog#asStep';

/**
 * as STEP SPFF file (AP214)
 *
 * The datatype relation pointing to a geometry description following the STEP Physical File Format (SPFF) format which was developed by ISO. The format consists of a single .step file which is text-based. The STEP file is structured according to the Application Profile (AP) 214 - Core data for automative mechanical design processes.
 *
 * https://w3id.org/fog#asStep_ap214
 */
export const asStep_ap214: OtherIndividual = 'https://w3id.org/fog#asStep_ap214';

/**
 * as STEP SPFF file (AP242)
 *
 * The datatype relation pointing to a geometry description following the STEP Physical File Format (SPFF) format which was developed by ISO. The format consists of a single .step file which is text-based. The STEP file is structured according to the Application Profile (AP) 242 - Managed model-based 3D engineering.
 *
 * https://w3id.org/fog#asStep_ap242
 */
export const asStep_ap242: OtherIndividual = 'https://w3id.org/fog#asStep_ap242';

/**
 * as STL format
 *
 * The datatype relation pointing to a geometry description following the STL format which was developed by 3D Systems. The format consists of a single .stl file which is either text-based or binary. It is strongly adviced to use the more specific subsubproperties (e.g. fog:asStl_v1.0-ascii).
 *
 * https://w3id.org/fog#asStl
 */
export const asStl: OtherIndividual = 'https://w3id.org/fog#asStl';

/**
 * as SVG format
 *
 * The datatype relation pointing to a geometry description following the open SVG format which was developed by the W3C. The format consists of a single .svg file which is text-based. It is strongly adviced to use the more specific subsubproperties (e.g. fog:asSvg_v1.1).
 *
 * https://w3id.org/fog#asSvg
 */
export const asSvg: OtherIndividual = 'https://w3id.org/fog#asSvg';

/**
 * as X3D format
 *
 * The datatype relation pointing to a geometry description following the open X3D format which was developed by the Web3D. The format consists of a single file which is either binary or text-based. It is strongly adviced to use the more specific subsubproperties (e.g. fog:asX3d_v3.3_xml).
 *
 * https://w3id.org/fog#asX3d
 */
export const asX3d: OtherIndividual = 'https://w3id.org/fog#asX3d';

/**
 * an IFC id
 *
 * The property links to a string containing an IFC (Industry Foundation Classes) identifier. Use any of the subproperties to be more specific regarding the type of ID.
 *
 * https://w3id.org/fog#hasIfcId
 */
export const hasIfcId: OwlDatatypeProperty = 'https://w3id.org/fog#hasIfcId';

/**
 * an IFC GUID
 *
 * The property links to a string containing an IFC GUID as identifier.
 *
 * https://w3id.org/fog#hasIfcId-guid
 */
export const hasIfcId_guid: OwlDatatypeProperty = 'https://w3id.org/fog#hasIfcId-guid';

/**
 * an OBJ identifier
 *
 * The property links to a string containing a OBJ identifier. Use any of the subproperties to be more specific regarding the type of ID.
 *
 * https://w3id.org/fog#hasObjId
 */
export const hasObjId: OwlDatatypeProperty = 'https://w3id.org/fog#hasObjId';

/**
 * an OBJ group identifier
 *
 * The property links to a string containing an OBJ group identifier.
 *
 * https://w3id.org/fog#hasObjId-group
 */
export const hasObjId_group: OwlDatatypeProperty = 'https://w3id.org/fog#hasObjId-group';

/**
 * an OBJ object identifier
 *
 * The property links to a string containing an OBJ object identifier.
 *
 * https://w3id.org/fog#hasObjId-object
 */
export const hasObjId_object: OwlDatatypeProperty = 'https://w3id.org/fog#hasObjId-object';

/**
 * a Revit identifier
 *
 * The property links to a string containing a Revit identifier. Use any of the subproperties to be more specific regarding the type of ID.
 *
 * https://w3id.org/fog#hasRevitId
 */
export const hasRevitId: OwlDatatypeProperty = 'https://w3id.org/fog#hasRevitId';

/**
 * a Revit element identifier
 *
 * The property links to a string containing a Revit element identifier. This is a short ID accessible directly from the Revit interface. Beware that this ID cannot be assumed unique outside the Revit project.
 *
 * https://w3id.org/fog#hasRevitId-element
 */
export const hasRevitId_element: OwlDatatypeProperty = 'https://w3id.org/fog#hasRevitId-element';

/**
 * a Revit unique identifier (UUID)
 *
 * The property links to a string containing a Revit unique identifier (UUID). According to the Autodesk specifications, it is in fact a GUID concatenated with 8 additional hexadecimal characters  corresponding to the Revit element ID.
 *
 * https://w3id.org/fog#hasRevitId-uniqueId
 */
export const hasRevitId_uniqueId: OwlDatatypeProperty = 'https://w3id.org/fog#hasRevitId-uniqueId';

/**
 * a Rhinoceros identifier
 *
 * The property links to a string containing a Rhinoceros identifier. Use any of the subproperties to be more specific regarding the type of ID.
 *
 * https://w3id.org/fog#hasRhinoId
 */
export const hasRhinoId: OwlDatatypeProperty = 'https://w3id.org/fog#hasRhinoId';

/**
 * a Rhinoceros object identifier
 *
 * The property links to a string containing a Rhinoceros object identifier, i.e. a GUID.
 *
 * https://w3id.org/fog#hasRhinoId-object
 */
export const hasRhinoId_object: OwlDatatypeProperty = 'https://w3id.org/fog#hasRhinoId-object';

export const _BASE: IriString = 'https://w3id.org/fog#';
export const _PREFIX: string = 'fog';
