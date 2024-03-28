<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Objects</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Objects</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-list>
            <ion-item-group>
                <ion-item-divider>
                    <ion-label>Markers</ion-label>
                </ion-item-divider>

                <ion-item>
                  <ion-label>
                    <a href="https://chev.me/arucogen/" target="_blank">ArUco Generator</a>
                  </ion-label>
                </ion-item>

                <ion-item v-for="object in markerStore.markers" :key="object.rdf.uri">
                    <ion-label>
                        <h3>{{ object.rdf.uri }}</h3>
                        <p>ID={{ object.identifier }}, DICT={{  object.dictionary.rdf.uri }}</p>
                    </ion-label>
                </ion-item>
            </ion-item-group>

            <ion-item-group>
                <ion-item-divider>
                    <ion-label>Virtual Objects</ion-label>
                </ion-item-divider>

                <ion-item v-for="object in markerStore.objects" :key="object.rdf.uri">
                    <ion-label>
                        <h3>{{ object.rdf.uri }}</h3>
                        <p>GLTF={{ object.geometry.asGltf }}</p>
                    </ion-label>
                </ion-item>
            </ion-item-group>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonLabel, IonItem, IonItemGroup } from '@ionic/vue';
  import { Options, Vue } from 'vue-property-decorator';
  import { useMarkerStore } from '../stores/marker';
  
  
  @Options({
    components: {
      IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
      IonList, IonLabel, IonItem, IonItemGroup
    }
  })
  export default class ObjectsPage extends Vue {
    markerStore = useMarkerStore();
  
  }
  </script>
  
  <style scoped>
  </style>