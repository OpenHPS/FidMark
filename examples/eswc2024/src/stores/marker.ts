import { ArUcoMarker, FiducialMarker, Geometry, MarkerDictionary, VirtualObject } from '@/models';
import { fidmark, fog, omg } from '@/ontologies';
import { DataObject, LengthUnit, Relative3DPosition } from '@openhps/core';
import { DataFactory, DefaultEngine, IriString, NamedNode, Parser, Quad, RDFSerializer, SPARQLDataDriver, Store } from '@openhps/rdf';
import { defineStore } from 'pinia';

export interface MarkerState {
  rdf: string;
  markers: FiducialMarker[];
  objects: VirtualObject[];
}

export const useMarkerStore = defineStore('marker', {
  state: (): MarkerState => ({
    rdf: undefined,
    markers: [],
    objects: []
  }),
  getters: {

  },
  actions: {
    initialize(): Promise<void> {
      return new Promise((resolve, reject) => {
        const BASE_URI = "http://example.org/";
        const marker = new ArUcoMarker();
        marker.uid = "marker";
        marker.dictionary = MarkerDictionary.fromURI(fidmark.DICT_MIP_36h12);
        marker.identifier = 10;
        marker.height = 50;
        marker.width = 50;
        const earth = new VirtualObject("earth");
        earth.addRelativePosition(new Relative3DPosition("marker", 0, 0, 100, LengthUnit.MILLIMETER));
        earth.geometry = new Geometry();
        earth.geometry.asGltf = "https://raw.githubusercontent.com/microsoft/mixed-reality-extension-sdk-samples/master/samples/solar-system/public/assets/earth.gltf";
        
        const store = new Store();
        store.addQuads(RDFSerializer.serializeToQuads(marker, BASE_URI));
        store.addQuads(RDFSerializer.serializeToQuads(earth, BASE_URI));
        RDFSerializer.stringify(store, {
          prettyPrint: true,
          baseUri: "http://example.org/",
          prefixes: {
            fidmark: "http://purl.org/fidmark/",
            example: "http://example.org/",
            [omg._PREFIX]: omg._BASE,
            [fog._PREFIX]: fog._BASE
          }
        }).then(text => {
          this.rdf = text;
          return this.fromRDF(this.rdf);
        }).then(() => {
          resolve();
        }).catch(reject);
      });
    },
    fromRDF(text: string): Promise<void> {
      return new Promise((resolve, reject) => {
        const parser = new Parser();
        const quads: Quad[] = parser.parse(text);
        const store = new Store(quads);
        const driver = new SPARQLDataDriver(DataObject, {
          sources: [store],
          engine: DefaultEngine,
        });
        const query = `
          PREFIX fidmark: <http://purl.org/fidmark/>
          PREFIX ssn: <http://www.w3.org/ns/ssn/>
          PREFIX sosa: <http://www.w3.org/ns/sosa/>
          PREFIX omg: <https://w3id.org/omg#>

          SELECT ?object {
              { ?object a fidmark:ArUco }
              UNION
              { 
                ?object a sosa:FeatureOfInterest .
                ?object omg:hasGeometry ?geometry .
              }
          }`;
        driver
          .queryBindings(query)
          .then((bindings) => {
            this.markers = [];
            this.objects = [];
            bindings.forEach((binding) => {
              const uri = (binding.get('object') as NamedNode).id as IriString;
              const object: DataObject = RDFSerializer.deserializeFromStore(
                DataFactory.namedNode(uri),
                store,
              );
              
              if (object instanceof FiducialMarker) {
                this.markers.push(object);
              } else if (object instanceof VirtualObject) {
                (object as VirtualObject).geometry.load();
                this.objects.push(object);
              }
            });
            console.log("Virtual objects", this.objects)
            resolve();
          })
          .catch(reject);
      });
    }
  },
});
