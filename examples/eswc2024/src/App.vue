<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { Options, Vue } from 'vue-property-decorator';
import { loadWASM } from 'onigasm';
import { RDFSerializer } from '@openhps/rdf';
import { useMarkerStore } from './stores/marker';

@Options({
  components: {
    IonApp, IonRouterOutlet
  }
})
export default class App extends Vue {
  markerStore = useMarkerStore();
  
  async beforeMount() {
    await loadWASM(process.env.BASE_URL + "js/vendor/onigasm/onigasm.wasm");
  }

  mounted(): void {
    RDFSerializer.initialize("video");
    this.markerStore.initialize();
  }
}
</script>