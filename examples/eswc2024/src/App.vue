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

@Options({
  components: {
    IonApp, IonRouterOutlet
  }
})
export default class App extends Vue {
  
  async beforeMount() {
    await loadWASM("/js/vendor/onigasm/onigasm.wasm");
  }

  mounted(): void {
    RDFSerializer.initialize("video");
  }
}
</script>