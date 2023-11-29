<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Camera</ion-title>
        <ion-buttons slot="end">
          <ion-button slot="icon-only" icon="qrCodeOutline"></ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Camera</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-button @click="start">Test</ion-button>
      <canvas class="ar" id="cameraCanvas"></canvas>
      <canvas class="ar" id="threeCanvas"></canvas>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { Options, Vue } from 'vue-property-decorator';
import { useCameraStore } from '../stores/camera';

@Options({
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton
  }
})
export default class CameraPage extends Vue {
  cameraStore = useCameraStore();

  mounted(): void {
    this.cameraStore.initialize().then(() => {
      console.log("ok")
    }).catch(console.error);
  }

  start(): void {
    this.cameraStore.start();
  }
}
</script>

<style scoped>
.ar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>