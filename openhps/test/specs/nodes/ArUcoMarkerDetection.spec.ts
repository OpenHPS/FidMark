import 'mocha';
import 'reflect-metadata';
import './three-shim';
import { expect } from 'chai';
import { Absolute3DPosition, LengthUnit } from '@openhps/core';
import { ImageFrame } from '@openhps/video';
import { AR } from 'js-aruco';
import { POS } from 'js-aruco/src/posit1.js';
import { fidmark } from '../../../src/terms';
import { FiducialMarker, MarkerDictionary } from '../../../src/data';
import {
    MarkerOrigin,
    ORIGIN_BOTTOM_LEFT,
    ORIGIN_BOTTOM_RIGHT,
    ORIGIN_CENTER,
    ORIGIN_TOP_LEFT,
    ORIGIN_TOP_RIGHT,
} from '../../../src/data/MarkerOrigin';
import { ArUcoMarkerDetection } from '../../../src/nodes';

describe('ArUcoMarkerDetection', () => {
    const MARKER_ID = 42;
    const DICT_URI = fidmark.DICT_ARUCO_ORIGINAL;
    const MARKER_WIDTH = 10;
    const MARKER_HEIGHT = 10;
    const BEST_TRANSLATION = [10, 20, 30];
    let detect: any;
    let pose: any;

    before(() => {
        detect = (AR.Detector.prototype as any).detect;
        pose = (POS.Posit.prototype as any).pose;
        (AR.Detector.prototype as any).detect = function () {
            return [
                {
                    id: MARKER_ID,
                    corners: [
                        { x: 100, y: 100 },
                        { x: 200, y: 100 },
                        { x: 200, y: 200 },
                        { x: 100, y: 200 },
                    ],
                },
            ];
        };
        (POS.Posit.prototype as any).pose = function () {
            return {
                bestError: 0,
                bestRotation: [
                    [1, 0, 0],
                    [0, 1, 0],
                    [0, 0, 1],
                ],
                bestTranslation: BEST_TRANSLATION.slice(),
            };
        };
    });

    after(() => {
        (AR.Detector.prototype as any).detect = detect;
        (POS.Posit.prototype as any).pose = pose;
    });

    function createFrame(origin?: MarkerOrigin): ImageFrame {
        const frame = new ImageFrame();
        (frame as any).image = { width: 1280, height: 720 };
        const marker = new FiducialMarker();
        marker.identifier = MARKER_ID;
        marker.dictionary = MarkerDictionary.fromURI(DICT_URI);
        marker.width = MARKER_WIDTH;
        marker.height = MARKER_HEIGHT;
        if (origin) {
            marker.origin = origin;
        }
        frame.addObject(marker);
        // Make sure the identity fields used for matching survive the clone round trip
        const frameMarker = frame.getObjects(FiducialMarker)[0];
        frameMarker.identifier = MARKER_ID;
        frameMarker.dictionary = marker.dictionary;
        frameMarker.width = MARKER_WIDTH;
        frameMarker.height = MARKER_HEIGHT;
        if (origin) {
            frameMarker.origin = origin;
        }
        return frame;
    }

    it('exposes the marker origin constants', () => {
        expect(ORIGIN_CENTER.id).to.equal(fidmark.OriginCenter);
        expect(ORIGIN_TOP_LEFT.id).to.equal(fidmark.OriginTopLeft);
        expect(ORIGIN_TOP_RIGHT.id).to.equal(fidmark.OriginTopRight);
        expect(ORIGIN_BOTTOM_LEFT.id).to.equal(fidmark.OriginBottomLeft);
        expect(ORIGIN_BOTTOM_RIGHT.id).to.equal(fidmark.OriginBottomRight);
        const ids = [ORIGIN_CENTER.id, ORIGIN_TOP_LEFT.id, ORIGIN_TOP_RIGHT.id, ORIGIN_BOTTOM_LEFT.id, ORIGIN_BOTTOM_RIGHT.id];
        expect(new Set(ids as string[]).size).to.equal(5);
    });

    it('should process a marker without an explicit origin', async () => {
        const node = new ArUcoMarkerDetection({ id: 'aruco' } as any);
        const frame = createFrame();
        await node.process(frame);
        const position = frame.getObjects(FiducialMarker)[0].position as Absolute3DPosition;
        expect(position).to.be.instanceOf(Absolute3DPosition);
        expect(position.x).to.equal(BEST_TRANSLATION[0]);
        expect(position.y).to.equal(BEST_TRANSLATION[1]);
        expect(position.z).to.equal(-BEST_TRANSLATION[2]);
        expect(position.unit).to.equal(LengthUnit.MILLIMETER);
    });

    it('should apply the top-left origin offset', async () => {
        const node = new ArUcoMarkerDetection({ id: 'aruco' } as any);
        const frame = createFrame(ORIGIN_TOP_LEFT);
        await node.process(frame);
        const position = frame.getObjects(FiducialMarker)[0].position as Absolute3DPosition;
        expect(position.x).to.equal(BEST_TRANSLATION[0] - MARKER_WIDTH / 2);
        expect(position.y).to.equal(BEST_TRANSLATION[1] + MARKER_HEIGHT / 2);
        expect(position.z).to.equal(-BEST_TRANSLATION[2]);
    });
});
