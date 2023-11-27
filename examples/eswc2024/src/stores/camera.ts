/// <reference types="webrtc" />

import { CallbackSinkNode, Model, ModelBuilder } from '@openhps/core';
import { defineStore } from 'pinia';
import { VideoSource } from '@/nodes/VideoSource';
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
                        const canvas = document.getElementById("threeCanvas") as HTMLCanvasElement;
                        video.srcObject = stream;
                        video.onloadedmetadata = () => {
                            video.play().then(() => {
                                return ModelBuilder.create()
                                    .withLogger((level, message, data) => {
                                        if (level === 'error') {
                                            console.error(level, message, data);
                                        }
                                    })
                                    .from(new VideoSource({
                                        fps: 30,
                                        uid: "video"
                                    }))
                                    .via(new ArUcoMarkerDetection({

                                    }))
                                    .via(new ThreeJSNode({
                                        canvas
                                    }))
                                    .to(new CallbackSinkNode(() => {

                                    }))
                                    .build();
                            }).then((model: Model) => {
                                const videoNode = model.findNodeByUID("video") as VideoSource;
                                videoNode.load(video);
                                videoNode.load("camera");
                                videoNode.play();

                                canvas.width = video.videoWidth;
                                canvas.height = video.videoHeight;
                                
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
