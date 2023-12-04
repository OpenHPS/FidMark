/// <reference types="webrtc" />

import { CallbackNode, CallbackSinkNode, Model, ModelBuilder } from '@openhps/core';
import { defineStore } from 'pinia';
import { ArUcoMarkerDetection } from '@/nodes';
import { ThreeJSNode } from '@/nodes/ThreeJSNode';
import { ColorOrder, PerspectiveCameraObject } from '@openhps/video';
import { VideoSource } from '@openhps/webrtc';
import { useMarkerStore } from './marker';
import { toRaw } from 'vue';

export interface CameraState {
    model: Model<any, any>,
}

export const useCameraStore = defineStore('camera', {
  state: (): CameraState => ({
    model: undefined,
  }),
  getters: {

  },
  actions: {
    initialize(): Promise<void> {
        return new Promise((resolve, reject) => {
            const canvas = document.getElementById("threeCanvas") as HTMLCanvasElement;
            const camera = new PerspectiveCameraObject();
            camera.distortionCoefficients = [0, 0, 0, 0, 0];
            camera.near = 1;
            camera.far = 1000;
            camera.fov = 40;
            camera.colorOrder = ColorOrder.RGBA;
            const video = document.getElementById("camera") as HTMLVideoElement;
            const markerStore = useMarkerStore();
            
            ModelBuilder.create()
                .withLogger((level, message, data) => {
                    if (level === 'error') {
                        console.error(level, message, data);
                    }
                })
                .from(new VideoSource({
                    fps: 30,
                    uid: "video",
                    source: camera,
                    videoSource: video,
                    autoPlay: true,
                    height: window.innerHeight,
                    facingMode: { ideal: "environment" } 
                }))
                .via(new CallbackNode(frame => {
                    markerStore.markers.forEach(marker => {
                        frame.addObject(toRaw(marker));
                    });
                    markerStore.objects.forEach(virtualObject => {
                        frame.addObject(toRaw(virtualObject));
                    });
                }))
                .via(new ArUcoMarkerDetection({

                }))
                .via(new ThreeJSNode({
                    canvas
                }))
                .to(new CallbackSinkNode(() => {

                }))
                .build().then((model: Model) => {
                    this.model = model;
                    this.model.on('error', console.error);
                    resolve();
                }).catch(reject);
        });
    }
  },
});
