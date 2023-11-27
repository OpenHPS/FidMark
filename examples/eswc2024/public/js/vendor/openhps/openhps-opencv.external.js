(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cv"), require("@openhps/core"));
	else if(typeof define === 'function' && define.amd)
		define("OpenHPS", ["cv", "core"], factory);
	else if(typeof exports === 'object')
		exports["OpenHPS"] = factory(require("cv"), require("@openhps/core"));
	else
		root["OpenHPS"] = root["OpenHPS"] || {}, root["OpenHPS"]["opencv"] = factory(root["cv"], root["OpenHPS"]["core"]);
})((typeof self !== 'undefined' ? self : this), (__WEBPACK_EXTERNAL_MODULE__techstark_opencv_js__, __WEBPACK_EXTERNAL_MODULE__openhps_core__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/cjs/common/data/features/ImageFeatureObject.js":
/*!*************************************************************!*\
  !*** ./dist/cjs/common/data/features/ImageFeatureObject.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageFeatureObject = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
const ImageRectShape_1 = __webpack_require__(/*! ./ImageRectShape */ "./dist/cjs/common/data/features/ImageRectShape.js");
let ImageFeatureObject = class ImageFeatureObject extends core_1.DataObject {
    constructor() {
        super(...arguments);
        this._containedFeatures = new Array();
    }
    /**
     * Confidence of image features
     * @returns {number} confidence
     */
    get confidence() {
        return this._confidence;
    }
    set confidence(confidence) {
        this._confidence = confidence;
    }
    get shape() {
        return this._shape;
    }
    set shape(shape) {
        this._shape = shape;
    }
};
exports.ImageFeatureObject = ImageFeatureObject;
tslib_1.__decorate([
    (0, core_1.SerializableArrayMember)(ImageFeatureObject),
    tslib_1.__metadata("design:type", Array)
], ImageFeatureObject.prototype, "_containedFeatures", void 0);
tslib_1.__decorate([
    (0, core_1.SerializableMember)(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], ImageFeatureObject.prototype, "confidence", null);
tslib_1.__decorate([
    (0, core_1.SerializableMember)(),
    tslib_1.__metadata("design:type", ImageRectShape_1.ImageRectShape),
    tslib_1.__metadata("design:paramtypes", [ImageRectShape_1.ImageRectShape])
], ImageFeatureObject.prototype, "shape", null);
exports.ImageFeatureObject = ImageFeatureObject = tslib_1.__decorate([
    (0, core_1.SerializableObject)()
], ImageFeatureObject);
//# sourceMappingURL=ImageFeatureObject.js.map

/***/ }),

/***/ "./dist/cjs/common/data/features/ImageRectShape.js":
/*!*********************************************************!*\
  !*** ./dist/cjs/common/data/features/ImageRectShape.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageRectShape = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const opencv4nodejs_1 = __webpack_require__(/*! @u4/opencv4nodejs */ "@techstark/opencv-js");
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
let ImageRectShape = class ImageRectShape extends opencv4nodejs_1.Rect {
    constructor(rect) {
        super(rect.x, rect.y, rect.width, rect.height);
    }
    get center() {
        return null;
    }
    get squareSize() {
        return this.width * this.height;
    }
};
exports.ImageRectShape = ImageRectShape;
exports.ImageRectShape = ImageRectShape = tslib_1.__decorate([
    (0, core_1.SerializableObject)(),
    tslib_1.__metadata("design:paramtypes", [opencv4nodejs_1.Rect])
], ImageRectShape);
//# sourceMappingURL=ImageRectShape.js.map

/***/ }),

/***/ "./dist/cjs/common/data/features/index.js":
/*!************************************************!*\
  !*** ./dist/cjs/common/data/features/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./ImageFeatureObject */ "./dist/cjs/common/data/features/ImageFeatureObject.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./ImageRectShape */ "./dist/cjs/common/data/features/ImageRectShape.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/common/data/index.js":
/*!***************************************!*\
  !*** ./dist/cjs/common/data/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initialize = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const opencv4nodejs_1 = __webpack_require__(/*! @u4/opencv4nodejs */ "@techstark/opencv-js");
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/**
 * Initialize OpenHPS OpenCV types
 */
function initialize() {
    core_1.DataSerializer.registerType(opencv4nodejs_1.Mat, {
        serializer: (image) => {
            if (!image) {
                return undefined;
            }
            return (0, opencv4nodejs_1.imencode)('.jpg', image);
        },
        deserializer: (buffer) => {
            if (!buffer) {
                return undefined;
            }
            return (0, opencv4nodejs_1.imdecode)(buffer);
        },
    });
}
exports.initialize = initialize;
if (typeof window === 'object') {
    if (window.cv.Mat) {
        initialize();
    }
    else {
        // eslint-disable-next-line
        var Module = {
            onRuntimeInitialized: function () {
                initialize();
            },
        };
    }
}
else {
    initialize();
}
tslib_1.__exportStar(__webpack_require__(/*! ./features */ "./dist/cjs/common/data/features/index.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! @openhps/video */ "./node_modules/@openhps/video/dist/esm5/index.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/common/index.js":
/*!**********************************!*\
  !*** ./dist/cjs/common/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./data */ "./dist/cjs/common/data/index.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/index.web.js":
/*!*******************************!*\
  !*** ./dist/cjs/index.web.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./common */ "./dist/cjs/common/index.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./web */ "./dist/cjs/web/index.js"), exports);
//# sourceMappingURL=index.web.js.map

/***/ }),

/***/ "./dist/cjs/web/cv.js":
/*!****************************!*\
  !*** ./dist/cjs/web/cv.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cv = void 0;
exports.cv = __webpack_require__(/*! @techstark/opencv-js */ "@techstark/opencv-js");
//# sourceMappingURL=cv.js.map

/***/ }),

/***/ "./dist/cjs/web/index.js":
/*!*******************************!*\
  !*** ./dist/cjs/web/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./nodes */ "./dist/cjs/web/nodes/index.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./cv */ "./dist/cjs/web/cv.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/web/nodes/index.js":
/*!*************************************!*\
  !*** ./dist/cjs/web/nodes/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./source */ "./dist/cjs/web/nodes/source/index.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./processing */ "./dist/cjs/web/nodes/processing/index.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./sink */ "./dist/cjs/web/nodes/sink/index.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/web/nodes/processing/ColorMaskNode.js":
/*!********************************************************!*\
  !*** ./dist/cjs/web/nodes/processing/ColorMaskNode.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorMaskNode = void 0;
const ImageProcessingNode_1 = __webpack_require__(/*! ./ImageProcessingNode */ "./dist/cjs/web/nodes/processing/ImageProcessingNode.js");
const cv_1 = __webpack_require__(/*! ../../cv */ "./dist/cjs/web/cv.js");
class ColorMaskNode extends ImageProcessingNode_1.ImageProcessingNode {
    constructor(options) {
        super(options);
    }
    processImage(image) {
        return new Promise((resolve) => {
            const hsv = new cv_1.cv.Mat();
            cv_1.cv.cvtColor(image, hsv, cv_1.cv.COLOR_BGR2HSV);
            const dst = new cv_1.cv.Mat();
            const low = cv_1.cv.matFromArray(3, 1, cv_1.cv.CV_64FC1, this.options.minRange);
            const high = cv_1.cv.matFromArray(3, 1, cv_1.cv.CV_64FC1, this.options.maxRange);
            cv_1.cv.inRange(hsv, low, high, dst);
            low.delete();
            high.delete();
            hsv.delete();
            resolve(dst);
        });
    }
}
exports.ColorMaskNode = ColorMaskNode;
//# sourceMappingURL=ColorMaskNode.js.map

/***/ }),

/***/ "./dist/cjs/web/nodes/processing/ImageDilateNode.js":
/*!**********************************************************!*\
  !*** ./dist/cjs/web/nodes/processing/ImageDilateNode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDilateNode = void 0;
const ImageProcessingNode_1 = __webpack_require__(/*! ./ImageProcessingNode */ "./dist/cjs/web/nodes/processing/ImageProcessingNode.js");
const cv_1 = __webpack_require__(/*! ../../cv */ "./dist/cjs/web/cv.js");
class ImageDilateNode extends ImageProcessingNode_1.ImageProcessingNode {
    constructor(options) {
        super(options);
    }
    processImage(image) {
        return new Promise((resolve) => {
            const dst = new cv_1.cv.Mat();
            const kernel = new cv_1.cv.Mat();
            cv_1.cv.dilate(image, dst, kernel, new cv_1.cv.Point(0, 0), this.options.iterations ? this.options.iterations : 1);
            kernel.delete();
            resolve(dst);
        });
    }
}
exports.ImageDilateNode = ImageDilateNode;
//# sourceMappingURL=ImageDilateNode.js.map

/***/ }),

/***/ "./dist/cjs/web/nodes/processing/ImageErodeNode.js":
/*!*********************************************************!*\
  !*** ./dist/cjs/web/nodes/processing/ImageErodeNode.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageErodeNode = void 0;
const ImageProcessingNode_1 = __webpack_require__(/*! ./ImageProcessingNode */ "./dist/cjs/web/nodes/processing/ImageProcessingNode.js");
const cv_1 = __webpack_require__(/*! ../../cv */ "./dist/cjs/web/cv.js");
class ImageErodeNode extends ImageProcessingNode_1.ImageProcessingNode {
    constructor(options) {
        super(options);
    }
    processImage(image) {
        return new Promise((resolve) => {
            const dst = new cv_1.cv.Mat();
            const kernel = new cv_1.cv.Mat();
            cv_1.cv.erode(image, dst, kernel, new cv_1.cv.Point(0, 0), this.options.iterations ? this.options.iterations : 1);
            kernel.delete();
            resolve(dst);
        });
    }
}
exports.ImageErodeNode = ImageErodeNode;
//# sourceMappingURL=ImageErodeNode.js.map

/***/ }),

/***/ "./dist/cjs/web/nodes/processing/ImageProcessingNode.js":
/*!**************************************************************!*\
  !*** ./dist/cjs/web/nodes/processing/ImageProcessingNode.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageProcessingNode = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
class ImageProcessingNode extends core_1.ProcessingNode {
    constructor(options) {
        super(options);
    }
    process(frame) {
        return new Promise((resolve, reject) => {
            if (frame.image) {
                this.processImage(frame.image, frame)
                    .then((image) => {
                    frame.image = image;
                    resolve(frame);
                })
                    .catch(reject);
            }
            else {
                resolve(frame);
            }
        });
    }
}
exports.ImageProcessingNode = ImageProcessingNode;
//# sourceMappingURL=ImageProcessingNode.js.map

/***/ }),

/***/ "./dist/cjs/web/nodes/processing/detection/ArucoMarkerNode.js":
/*!********************************************************************!*\
  !*** ./dist/cjs/web/nodes/processing/detection/ArucoMarkerNode.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArucoMarkerNode = void 0;
const ImageProcessingNode_1 = __webpack_require__(/*! ../ImageProcessingNode */ "./dist/cjs/web/nodes/processing/ImageProcessingNode.js");
class ArucoMarkerNode extends ImageProcessingNode_1.ImageProcessingNode {
    constructor(options) {
        super(options);
    }
    processImage(image) {
        return new Promise((resolve) => {
            resolve(image);
        });
    }
}
exports.ArucoMarkerNode = ArucoMarkerNode;
//# sourceMappingURL=ArucoMarkerNode.js.map

/***/ }),

/***/ "./dist/cjs/web/nodes/processing/detection/index.js":
/*!**********************************************************!*\
  !*** ./dist/cjs/web/nodes/processing/detection/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./ArucoMarkerNode */ "./dist/cjs/web/nodes/processing/detection/ArucoMarkerNode.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/web/nodes/processing/index.js":
/*!************************************************!*\
  !*** ./dist/cjs/web/nodes/processing/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./ColorMaskNode */ "./dist/cjs/web/nodes/processing/ColorMaskNode.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./ImageProcessingNode */ "./dist/cjs/web/nodes/processing/ImageProcessingNode.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./ImageDilateNode */ "./dist/cjs/web/nodes/processing/ImageDilateNode.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./ImageErodeNode */ "./dist/cjs/web/nodes/processing/ImageErodeNode.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./detection */ "./dist/cjs/web/nodes/processing/detection/index.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/web/nodes/sink/ImageDisplaySink.js":
/*!*****************************************************!*\
  !*** ./dist/cjs/web/nodes/sink/ImageDisplaySink.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDisplaySink = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
const cv_1 = __webpack_require__(/*! ../../cv */ "./dist/cjs/web/cv.js");
/**
 * OpenCV Image Display Sink
 *
 * ## About
 * This sink node will display the image frame using ```imshow```
 */
class ImageDisplaySink extends core_1.SinkNode {
    constructor(options) {
        super(options);
        this.options.canvas = this.options.canvas || 'debug';
    }
    /**
     * Push the data to the output
     * @param {ImageFrame} data Input data
     * @returns {Promise<void>} Push promise
     */
    onPush(data) {
        return new Promise((resolve) => {
            cv_1.cv.imshow(this.options.canvas, data.image);
            resolve();
        });
    }
}
exports.ImageDisplaySink = ImageDisplaySink;
//# sourceMappingURL=ImageDisplaySink.js.map

/***/ }),

/***/ "./dist/cjs/web/nodes/sink/index.js":
/*!******************************************!*\
  !*** ./dist/cjs/web/nodes/sink/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./ImageDisplaySink */ "./dist/cjs/web/nodes/sink/ImageDisplaySink.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/cjs/web/nodes/source/VideoSource.js":
/*!**************************************************!*\
  !*** ./dist/cjs/web/nodes/source/VideoSource.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VideoSource = void 0;
const core_1 = __webpack_require__(/*! @openhps/core */ "@openhps/core");
const cv_1 = __webpack_require__(/*! ../../cv */ "./dist/cjs/web/cv.js");
const video_1 = __webpack_require__(/*! @openhps/video */ "./node_modules/@openhps/video/dist/esm5/index.js");
class VideoSource extends core_1.SourceNode {
    constructor(options) {
        super(options);
        this.frame = 0;
        this.options.sharedImageFrame =
            this.options.sharedImageFrame === undefined ? true : this.options.sharedImageFrame;
        this.once('build', this._onBuild.bind(this));
        this.once('destroy', this.stop.bind(this));
    }
    _onBuild() {
        if (this.options.videoSource) {
            this.load(this.options.videoSource);
        }
        if (this.options.autoPlay) {
            this.play();
        }
        if (this.options.sharedImageFrame) {
            this.mat = new cv_1.cv.Mat(this.options.height, this.options.width, cv_1.cv.CV_8UC4);
        }
    }
    reset() {
        this.frame = 0;
    }
    release() {
        if (this.mat) {
            this.mat.delete();
        }
    }
    /**
     * Start playback of the video stream
     * @returns {number} Running frame grab timer
     */
    play() {
        let ready = true;
        this.timer = setInterval(() => {
            if (ready || !this.options.throttleRead) {
                ready = false;
                this._readFrame()
                    .then((videoFrame) => {
                    if (!videoFrame) {
                        return clearInterval(this.timer);
                    }
                    if (!this.options.throttlePush) {
                        ready = true;
                    }
                    return this.push(videoFrame);
                })
                    .then(() => {
                    if (this.options.throttlePush) {
                        ready = true;
                    }
                })
                    .catch((ex) => {
                    this.logger('error', { ex });
                });
            }
        }, this.options.fps === -1 ? 0 : 1000 / this.options.fps);
        this.start = Date.now();
        return this.timer;
    }
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    get currentFrameCount() {
        return this.frame;
    }
    get totalFrameCount() {
        return this.totalFrames;
    }
    get actualFPS() {
        return Math.round((this.frame / ((Date.now() - this.start) / 1000)) * 100) / 100;
    }
    /**
     * Pull the next frame
     * @returns {Promise<VideoSource>} Pull promise
     */
    onPull() {
        return this._readFrame();
    }
    _readFrame() {
        return new Promise((resolve, reject) => {
            const videoFrame = new video_1.VideoFrame();
            videoFrame.source = this.source;
            videoFrame.fps = this.options.fps;
            this.readFrame()
                .then((frameImage) => {
                if (!frameImage || frameImage.empty()) {
                    return resolve(undefined);
                }
                this.frame++; // Increase frame
                videoFrame.phenomenonTimestamp = core_1.TimeUnit.SECOND.convert(this.frame * (1.0 / videoFrame.fps), core_1.TimeService.getUnit());
                videoFrame.rows = this.options.height || frameImage.size().height;
                videoFrame.cols = this.options.width || frameImage.size().width;
                videoFrame.image = frameImage;
                resolve(videoFrame);
            })
                .catch(reject);
        });
    }
    /**
     * Load video from file, stream, port
     * @param {string} videoSource File path
     * @returns {VideoSource} Video source instance
     */
    load(videoSource) {
        this.videoCapture = new cv_1.cv.VideoCapture(videoSource);
        if (videoSource instanceof HTMLVideoElement) {
            this.options.height = videoSource.videoHeight;
            this.options.width = videoSource.videoWidth;
            videoSource.height = videoSource.videoHeight;
            videoSource.width = videoSource.videoWidth;
        }
        return this;
    }
    readFrame() {
        return new Promise((resolve, reject) => {
            let mat = this.mat;
            try {
                if (mat === undefined) {
                    mat = new cv_1.cv.Mat(this.options.height, this.options.width, cv_1.cv.CV_8UC4);
                }
                this.videoCapture.read(mat);
                resolve(mat);
            }
            catch (ex) {
                if (this.mat == undefined) {
                    mat.delete(); // Clear
                }
                reject(ex);
            }
        });
    }
}
exports.VideoSource = VideoSource;
//# sourceMappingURL=VideoSource.js.map

/***/ }),

/***/ "./dist/cjs/web/nodes/source/index.js":
/*!********************************************!*\
  !*** ./dist/cjs/web/nodes/source/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./VideoSource */ "./dist/cjs/web/nodes/source/VideoSource.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@openhps/video/dist/esm5/DepthImageFrame.js":
/*!******************************************************************!*\
  !*** ./node_modules/@openhps/video/dist/esm5/DepthImageFrame.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepthImageFrame: () => (/* binding */ DepthImageFrame)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ImageFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageFrame */ "./node_modules/@openhps/video/dist/esm5/ImageFrame.js");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openhps_core__WEBPACK_IMPORTED_MODULE_0__);



let DepthImageFrame = class DepthImageFrame extends _ImageFrame__WEBPACK_IMPORTED_MODULE_1__.ImageFrame {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)
], DepthImageFrame.prototype, "depth", void 0);
DepthImageFrame = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableObject)()
], DepthImageFrame);

//# sourceMappingURL=DepthImageFrame.js.map

/***/ }),

/***/ "./node_modules/@openhps/video/dist/esm5/DepthVideoFrame.js":
/*!******************************************************************!*\
  !*** ./node_modules/@openhps/video/dist/esm5/DepthVideoFrame.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepthVideoFrame: () => (/* binding */ DepthVideoFrame)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openhps_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DepthImageFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DepthImageFrame */ "./node_modules/@openhps/video/dist/esm5/DepthImageFrame.js");



let DepthVideoFrame = class DepthVideoFrame extends _DepthImageFrame__WEBPACK_IMPORTED_MODULE_1__.DepthImageFrame {
};
DepthVideoFrame = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableObject)()
], DepthVideoFrame);

//# sourceMappingURL=DepthVideoFrame.js.map

/***/ }),

/***/ "./node_modules/@openhps/video/dist/esm5/ImageFrame.js":
/*!*************************************************************!*\
  !*** ./node_modules/@openhps/video/dist/esm5/ImageFrame.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageFrame: () => (/* binding */ ImageFrame)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openhps_core__WEBPACK_IMPORTED_MODULE_0__);


let ImageFrame = class ImageFrame extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.DataFrame {
    /**
     * Height of image
     *
     * @returns {number} Height
     */
    get rows() {
        return this.height;
    }
    set rows(value) {
        this.height = value;
    }
    /**
     * Width of image
     *
     * @returns {number} Width
     */
    get cols() {
        return this.width;
    }
    set cols(value) {
        this.width = value;
    }
    /**
     * Source object clone that captured the data frame
     *
     * @returns {CameraObject} Source data object
     */
    get source() {
        return super.source;
    }
    /**
     * Set the source object clone that captured the data frame
     *
     * @param {CameraObject} object Source data object
     */
    set source(object) {
        super.source = object;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
], ImageFrame.prototype, "image", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)
], ImageFrame.prototype, "height", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)
], ImageFrame.prototype, "width", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)
], ImageFrame.prototype, "fourcc", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)
], ImageFrame.prototype, "fps", void 0);
ImageFrame = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableObject)()
], ImageFrame);

//# sourceMappingURL=ImageFrame.js.map

/***/ }),

/***/ "./node_modules/@openhps/video/dist/esm5/StereoImageFrame.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@openhps/video/dist/esm5/StereoImageFrame.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StereoImageFrame: () => (/* binding */ StereoImageFrame)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openhps_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageFrame */ "./node_modules/@openhps/video/dist/esm5/ImageFrame.js");



let StereoImageFrame = class StereoImageFrame extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.DataFrame {
    /**
     * Source object clone that captured the data frame
     *
     * @returns {StereoCameraObject} Source data object
     */
    get source() {
        return super.source;
    }
    /**
     * Set the source object clone that captured the data frame
     *
     * @param {StereoCameraObject} object Source data object
     */
    set source(object) {
        super.source = object;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _ImageFrame__WEBPACK_IMPORTED_MODULE_2__.ImageFrame)
], StereoImageFrame.prototype, "left", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _ImageFrame__WEBPACK_IMPORTED_MODULE_2__.ImageFrame)
], StereoImageFrame.prototype, "right", void 0);
StereoImageFrame = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableObject)()
], StereoImageFrame);

//# sourceMappingURL=StereoImageFrame.js.map

/***/ }),

/***/ "./node_modules/@openhps/video/dist/esm5/StereoVideoFrame.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@openhps/video/dist/esm5/StereoVideoFrame.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StereoVideoFrame: () => (/* binding */ StereoVideoFrame)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openhps_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StereoImageFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StereoImageFrame */ "./node_modules/@openhps/video/dist/esm5/StereoImageFrame.js");



let StereoVideoFrame = class StereoVideoFrame extends _StereoImageFrame__WEBPACK_IMPORTED_MODULE_1__.StereoImageFrame {
};
StereoVideoFrame = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableObject)()
], StereoVideoFrame);

//# sourceMappingURL=StereoVideoFrame.js.map

/***/ }),

/***/ "./node_modules/@openhps/video/dist/esm5/VideoFrame.js":
/*!*************************************************************!*\
  !*** ./node_modules/@openhps/video/dist/esm5/VideoFrame.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoFrame: () => (/* binding */ VideoFrame)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ImageFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageFrame */ "./node_modules/@openhps/video/dist/esm5/ImageFrame.js");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openhps_core__WEBPACK_IMPORTED_MODULE_0__);



let VideoFrame = class VideoFrame extends _ImageFrame__WEBPACK_IMPORTED_MODULE_1__.ImageFrame {
};
VideoFrame = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableObject)()
], VideoFrame);

//# sourceMappingURL=VideoFrame.js.map

/***/ }),

/***/ "./node_modules/@openhps/video/dist/esm5/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@openhps/video/dist/esm5/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraObject: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_0__.CameraObject),
/* harmony export */   ColorOrder: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_0__.ColorOrder),
/* harmony export */   DepthImageFrame: () => (/* reexport safe */ _DepthImageFrame__WEBPACK_IMPORTED_MODULE_5__.DepthImageFrame),
/* harmony export */   DepthVideoFrame: () => (/* reexport safe */ _DepthVideoFrame__WEBPACK_IMPORTED_MODULE_6__.DepthVideoFrame),
/* harmony export */   ImageFrame: () => (/* reexport safe */ _ImageFrame__WEBPACK_IMPORTED_MODULE_2__.ImageFrame),
/* harmony export */   PerspectiveCameraObject: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCameraObject),
/* harmony export */   StereoCameraObject: () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_0__.StereoCameraObject),
/* harmony export */   StereoImageFrame: () => (/* reexport safe */ _StereoImageFrame__WEBPACK_IMPORTED_MODULE_3__.StereoImageFrame),
/* harmony export */   StereoVideoFrame: () => (/* reexport safe */ _StereoVideoFrame__WEBPACK_IMPORTED_MODULE_4__.StereoVideoFrame),
/* harmony export */   VideoFrame: () => (/* reexport safe */ _VideoFrame__WEBPACK_IMPORTED_MODULE_1__.VideoFrame)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/@openhps/video/dist/esm5/object/index.js");
/* harmony import */ var _VideoFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoFrame */ "./node_modules/@openhps/video/dist/esm5/VideoFrame.js");
/* harmony import */ var _ImageFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageFrame */ "./node_modules/@openhps/video/dist/esm5/ImageFrame.js");
/* harmony import */ var _StereoImageFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StereoImageFrame */ "./node_modules/@openhps/video/dist/esm5/StereoImageFrame.js");
/* harmony import */ var _StereoVideoFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StereoVideoFrame */ "./node_modules/@openhps/video/dist/esm5/StereoVideoFrame.js");
/* harmony import */ var _DepthImageFrame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DepthImageFrame */ "./node_modules/@openhps/video/dist/esm5/DepthImageFrame.js");
/* harmony import */ var _DepthVideoFrame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DepthVideoFrame */ "./node_modules/@openhps/video/dist/esm5/DepthVideoFrame.js");







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@openhps/video/dist/esm5/object/CameraObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@openhps/video/dist/esm5/object/CameraObject.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraObject: () => (/* binding */ CameraObject),
/* harmony export */   ColorOrder: () => (/* binding */ ColorOrder)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openhps_core__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Camera source object
 */
let CameraObject = class CameraObject extends _openhps_core__WEBPACK_IMPORTED_MODULE_0__.DataObject {
    constructor(uid, displayName, width, height) {
        super(uid, displayName);
        /**
         * Camera color order
         */
        this.colorOrder = ColorOrder.RGB;
        this.width = width || 0;
        this.height = height || 0;
    }
    /**
     * Get the focal length in pixels
     *
     * @returns {[number, number]} Focal length for x and y axis
     */
    get focalLength() {
        if (!this.cameraMatrix) {
            return undefined;
        }
        return [this.cameraMatrix.elements[0], this.cameraMatrix.elements[4]];
    }
    /**
     * Get the principal point in pixels
     *
     * @returns {[number, number]} Principal point for x and y axis
     */
    get principalPoint() {
        if (!this.cameraMatrix) {
            return undefined;
        }
        return [this.cameraMatrix.elements[6], this.cameraMatrix.elements[7]];
    }
    /**
     * Camera frustum aspect ratio.
     *
     * @returns {number} Aspect ratio
     */
    get aspect() {
        return this.width / this.height;
    }
    /**
     * Height of image
     *
     * @returns {number} Height
     */
    get rows() {
        return this.height;
    }
    set rows(value) {
        this.height = value;
    }
    /**
     * Width of image
     *
     * @returns {number} Width
     */
    get cols() {
        return this.width;
    }
    set cols(value) {
        this.width = value;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)
], CameraObject.prototype, "width", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)
], CameraObject.prototype, "height", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableArrayMember)(Number),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Array)
], CameraObject.prototype, "distortionCoefficients", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", _openhps_core__WEBPACK_IMPORTED_MODULE_0__.Matrix3)
], CameraObject.prototype, "cameraMatrix", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)
], CameraObject.prototype, "fps", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Number)
], CameraObject.prototype, "colorOrder", void 0);
CameraObject = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableObject)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [String, String, Number, Number])
], CameraObject);

/**
 * Color order
 */
var ColorOrder;
(function (ColorOrder) {
    ColorOrder[ColorOrder["RGB"] = 0] = "RGB";
    ColorOrder[ColorOrder["BGR"] = 1] = "BGR";
    ColorOrder[ColorOrder["GRAYSCALE"] = 2] = "GRAYSCALE";
})(ColorOrder || (ColorOrder = {}));
//# sourceMappingURL=CameraObject.js.map

/***/ }),

/***/ "./node_modules/@openhps/video/dist/esm5/object/PerspectiveCameraObject.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@openhps/video/dist/esm5/object/PerspectiveCameraObject.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerspectiveCameraObject: () => (/* binding */ PerspectiveCameraObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openhps_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CameraObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CameraObject */ "./node_modules/@openhps/video/dist/esm5/object/CameraObject.js");



let PerspectiveCameraObject = class PerspectiveCameraObject extends _CameraObject__WEBPACK_IMPORTED_MODULE_1__.CameraObject {
    constructor(uid, displayName, width, height, fov = 50, near = 0.1, far = 2000) {
        super(uid, displayName, width, height);
        this.fov = fov;
        this.near = near;
        this.far = far;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)
], PerspectiveCameraObject.prototype, "fov", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)
], PerspectiveCameraObject.prototype, "near", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)
], PerspectiveCameraObject.prototype, "far", void 0);
PerspectiveCameraObject = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableObject)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String, String, Number, Number, Object, Object, Object])
], PerspectiveCameraObject);

//# sourceMappingURL=PerspectiveCameraObject.js.map

/***/ }),

/***/ "./node_modules/@openhps/video/dist/esm5/object/StereoCameraObject.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@openhps/video/dist/esm5/object/StereoCameraObject.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StereoCameraObject: () => (/* binding */ StereoCameraObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _CameraObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CameraObject */ "./node_modules/@openhps/video/dist/esm5/object/CameraObject.js");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openhps/core */ "@openhps/core");
/* harmony import */ var _openhps_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openhps_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PerspectiveCameraObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PerspectiveCameraObject */ "./node_modules/@openhps/video/dist/esm5/object/PerspectiveCameraObject.js");




let StereoCameraObject = class StereoCameraObject extends _CameraObject__WEBPACK_IMPORTED_MODULE_1__.CameraObject {
    constructor(uid, displayName, left, right) {
        super(uid, displayName);
        /**
         * Camera eye separation
         *
         * @default 0.064
         */
        this.eyeSep = 0.064;
        this.cameraL = left;
        this.cameraR = right;
        if (left !== undefined && right !== undefined) {
            this.uid = left.uid + right.uid;
        }
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _PerspectiveCameraObject__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCameraObject)
], StereoCameraObject.prototype, "cameraL", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _PerspectiveCameraObject__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCameraObject)
], StereoCameraObject.prototype, "cameraR", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableMember)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)
], StereoCameraObject.prototype, "eyeSep", void 0);
StereoCameraObject = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_openhps_core__WEBPACK_IMPORTED_MODULE_0__.SerializableObject)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [String, String, _PerspectiveCameraObject__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCameraObject, _PerspectiveCameraObject__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCameraObject])
], StereoCameraObject);

//# sourceMappingURL=StereoCameraObject.js.map

/***/ }),

/***/ "./node_modules/@openhps/video/dist/esm5/object/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@openhps/video/dist/esm5/object/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraObject: () => (/* reexport safe */ _CameraObject__WEBPACK_IMPORTED_MODULE_0__.CameraObject),
/* harmony export */   ColorOrder: () => (/* reexport safe */ _CameraObject__WEBPACK_IMPORTED_MODULE_0__.ColorOrder),
/* harmony export */   PerspectiveCameraObject: () => (/* reexport safe */ _PerspectiveCameraObject__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCameraObject),
/* harmony export */   StereoCameraObject: () => (/* reexport safe */ _StereoCameraObject__WEBPACK_IMPORTED_MODULE_1__.StereoCameraObject)
/* harmony export */ });
/* harmony import */ var _CameraObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CameraObject */ "./node_modules/@openhps/video/dist/esm5/object/CameraObject.js");
/* harmony import */ var _StereoCameraObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StereoCameraObject */ "./node_modules/@openhps/video/dist/esm5/object/StereoCameraObject.js");
/* harmony import */ var _PerspectiveCameraObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PerspectiveCameraObject */ "./node_modules/@openhps/video/dist/esm5/object/PerspectiveCameraObject.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "@openhps/core":
/*!****************************************************************************************************************!*\
  !*** external {"commonjs":"@openhps/core","commonjs2":"@openhps/core","amd":"core","root":["OpenHPS","core"]} ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__openhps_core__;

/***/ }),

/***/ "@techstark/opencv-js":
/*!****************************************************************************!*\
  !*** external {"commonjs":"cv","commonjs2":"cv","amd":"cv","root":["cv"]} ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__techstark_opencv_js__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/cjs/index.web.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=openhps-opencv.external.js.map