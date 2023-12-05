<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="camera" href="/tabs/camera">
          <ion-icon aria-hidden="true" :icon="cameraOutline" />
          <ion-label>AR</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="editor" href="/tabs/editor">
          <ion-icon aria-hidden="true" :icon="code" />
          <ion-label>text/turtle</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="objects" href="/tabs/objects">
          <ion-icon aria-hidden="true" :icon="cubeOutline" />
          <ion-label>Objects</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { cameraOutline, code, cubeOutline } from 'ionicons/icons';
</script>
