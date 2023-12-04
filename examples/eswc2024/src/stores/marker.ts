import { FiducialMarker } from '@/models';
import { DataObject } from '@openhps/core';
import { DataFactory, DefaultEngine, IriString, NamedNode, RDFSerializer, SPARQLDataDriver, Store } from '@openhps/rdf';
import { defineStore } from 'pinia';

export interface MarkerState {
  markers: FiducialMarker[];
}

export const useMarkerStore = defineStore('marker', {
  state: (): MarkerState => ({
    markers: [],
  }),
  getters: {

  },
  actions: {
    fromRDF(text: string): Promise<void> {
      return new Promise((resolve, reject) => {
        const store = new Store();
        store.addQuads(RDFSerializer.serializeToQuads(text));
        const driver = new SPARQLDataDriver(DataObject, {
          sources: [this.store],
          engine: DefaultEngine,
        });
        const query = `
          PREFIX fidmark: <http://purl.org/fidmark/>
          PREFIX ssn: <http://www.w3.org/ns/ssn/>
          PREFIX sosa: <http://www.w3.org/ns/sosa/>
  
          SELECT ?marker {
              ?marker rdfs:subClassOf* fidmark:FiducialMarker .
          }`;
        driver
          .queryBindings(query)
          .then((bindings) => {
            bindings.forEach((binding) => {
              const uri = (binding.get('marker') as NamedNode).id as IriString;
              const marker: FiducialMarker = RDFSerializer.deserializeFromStore(
                DataFactory.namedNode(uri),
                store,
              );
              this.markers.push(marker);
            });
            console.log(this.markers)
            resolve();
          })
          .catch(reject);
      });
    },
    setMarkers(markers: FiducialMarker[]): void {

    }
  },
});
