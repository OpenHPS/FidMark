<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Camera</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Camera</ion-title>
        </ion-toolbar>
      </ion-header>

      <video id="camera"></video>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { Options, Vue } from 'vue-property-decorator';
import { useCameraStore } from '@/stores/camera';

@Options({
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent
  }
})
export default class ARPage extends Vue {
  cameraStore = useCameraStore();

  mounted(): void {
    this.cameraStore.initialize();
  }
}
</script>

<style scoped>
#camera {
  width: 100%;
  height: 100%;
}
</style>