/// <reference types="webrtc" />

import { CallbackSinkNode, Model, ModelBuilder } from '@openhps/core';
import { defineStore } from 'pinia';
import { ArUcoMarkerDetection } from '@/nodes';
import { ThreeJSNode } from '@/nodes/ThreeJSNode';
import { ColorOrder, ImageFrame, PerspectiveCameraObject } from '@openhps/video';
import { WebXRService, XRSource } from '@openhps/webxr';
import { Uint8ImageToMat } from '@openhps/opencv/web';

export interface CameraState {
    model: Model<any, any>,
    service: WebXRService
}

export const useCameraStore = defineStore('camera', {
  state: (): CameraState => ({
    model: undefined,
    service: undefined
  }),
  getters: {

  },
  actions: {
    initialize(): Promise<void> {
        return new Promise((resolve, reject) => {
            const canvas = document.getElementById("threeCanvas") as HTMLCanvasElement;
            const camera = new PerspectiveCameraObject();
            camera.distortionCoefficients = [0, 0, 0, 0, 0];
            camera.near = 0.01;
            camera.far = 1000;
            camera.fov = 40;
            camera.colorOrder = ColorOrder.RGBA;

            this.service = new WebXRService({
            });

            ModelBuilder.create()
                .withLogger((level, message, data) => {
                    if (level === 'error') {
                        console.error(level, message, data);
                    }
                })
                .addService(this.service)
                .from(new XRSource({
                    uid: "video",
                    source: camera,
                    output: false,
                    includeImage: true
                }))
                .via(new Uint8ImageToMat(ImageFrame))
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
    },
    start(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.service.createSession().then(() => {
                return this.model.findNodeByUID("video").start();
            }).then(() => {
                resolve();
            }).catch(reject);
        });
    }
  },
});
