/// <reference types="webrtc" />

import { CallbackSinkNode, Model, ModelBuilder } from '@openhps/core';
import { defineStore } from 'pinia';
import { VideoSource } from '@openhps/opencv';
import { ArUcoMarkerDetection } from '@/nodes';
import { ThreeJSNode } from '@/nodes/ThreeJSNode';

export interface CameraState {
    model: Model<any, any>
}

export const useCameraStore = defineStore('camera', {
  state: (): CameraState => ({
    model: undefined
  }),
  getters: {

  },
  actions: {
    initialize(): Promise<void> {
        return new Promise((resolve, reject) => {
            navigator.getUserMedia = navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia;

            if (navigator.getUserMedia) {
                navigator.getUserMedia({ audio: true, video: { 
                        width: 1024, 
                        height: 720,
                        facingMode: "user"  // Front facing camera
                    }},
                    (stream: any) => {
                        const video = document.getElementById('camera') as HTMLVideoElement;
                        video.srcObject = stream;
                        video.onloadedmetadata = () => {
                            video.play();
                            ModelBuilder.create()
                                .from(new VideoSource({
                                    autoPlay: true,
                                    fps: 25,
                                    videoSource: video,
                                }))
                                .via(new ArUcoMarkerDetection({

                                }))
                                .via(new ThreeJSNode({
                                    canvas: document.getElementById("threeCanvas") as HTMLCanvasElement
                                }))
                                .to(new CallbackSinkNode(() => {

                                }))
                                .build((model: Model) => {
                                    console.log("model ok")
                                    this.model = model;
                                    this.model.on('error', console.error);
                                    resolve();
                                }).catch(reject);
                        };
                    },
                    (err: Error) => {
                        reject(new Error("The following error occurred: " + err.name));
                    }
                );
            } else {
                reject(new Error("getUserMedia not supported"));
            }
        });
    }
  },
});
