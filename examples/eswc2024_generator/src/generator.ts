import { Quad, RDFSerializer, Store } from "@openhps/rdf";
import { ARTagMarker, ArUcoMarker, FiducialMarker, MarkerDictionary, VirtualObject } from "./models";
import { Absolute3DPosition, AngleUnit, GeographicalPosition, LengthUnit, Orientation, Relative3DPosition, RelativeOrientation } from "@openhps/core";
import * as fs from 'fs';
import * as path from 'path';
import { ImageDescriptor } from "./models/ImageDescriptor";
import { fidmark } from "./ontologies";
import { QRCodeMarker } from "./models/markers/QRCodeMarker";

const URI = "http://example.org/markers/";

function createArUco(): Quad[] {
    const store = new Store();
    for (let i = 1 ; i < 4 ; i++) {
        const marker = new ArUcoMarker();
        marker.uid = `marker-${i}`;
        marker.identifier = i * 21;
        marker.height = 200;
        marker.width = 200;
        marker.dictionary = MarkerDictionary.fromURI(fidmark.DICT_4X4_1000);
        marker.setPosition(new Absolute3DPosition(i * 19, i * 10, 0, LengthUnit.METER));
        marker.position.setOrientation(Orientation.fromEuler({
            yaw: 31,
            roll: 20,
            pitch: 12,
            unit: AngleUnit.DEGREE
        }));
        const quads = RDFSerializer.serializeToQuads(marker, URI);
        store.addQuads(quads);
    }
    return store.getQuads(undefined, undefined, undefined, undefined);
}

function createARTag(): Quad[] {
    const store = new Store();
    for (let i = 4 ; i < 7 ; i++) {
        const marker = new ARTagMarker();
        marker.uid = `marker-${i}`;
        marker.identifier = i * 21;
        marker.height = 150;
        marker.width = 150;
        marker.setPosition(new Absolute3DPosition(i * 19, i * 10, 0, LengthUnit.METER));
        marker.position.setOrientation(Orientation.fromEuler({
            yaw: 31,
            roll: 20,
            pitch: 12,
            unit: AngleUnit.DEGREE
        }));
        const quads = RDFSerializer.serializeToQuads(marker, URI);
        store.addQuads(quads);
    }
    return store.getQuads(undefined, undefined, undefined, undefined);
}

function createCustomMarker(): Quad[] {
    const store = new Store();
    const marker = new FiducialMarker();
    marker.uid = `marker-hiro`;
    marker.height = 120;
    marker.width = 120;
    marker.imageDescriptor = new ImageDescriptor();
    marker.imageDescriptor.image = "https://arprojectsdemo.netlify.app/markers/hiro.png";
    marker.imageDescriptor.pattern = "https://arprojectsdemo.netlify.app/data/hiro.patt";
    const quads = RDFSerializer.serializeToQuads(marker, URI);
    store.addQuads(quads);
    return store.getQuads(undefined, undefined, undefined, undefined);
}

function createVirtualObjects(): Quad[] {
    const store = new Store();
    for (let i = 1 ; i < 7 ; i++) {
        const object = new VirtualObject();
        object.uid = `virtualobject-${i}`;
        object.addRelativePosition(new RelativeOrientation(`marker-${i}`, Orientation.fromEuler({
            yaw: 31,
            roll: 20,
            pitch: 12,
            unit: AngleUnit.DEGREE
        })))
        object.addRelativePosition(new Relative3DPosition(`marker-${i}`, 0, 0, 0, LengthUnit.METER));
        const quads = RDFSerializer.serializeToQuads(object, URI);
        store.addQuads(quads);
    }
    return store.getQuads(undefined, undefined, undefined, undefined);
}

function createQRCode(): Quad[] {
    const store = new Store();
    const marker = new QRCodeMarker();
    marker.uid = `marker-qrcode`;
    marker.height = 3;
    marker.width = 3;
    marker.data = "https://2024.eswc-conferences.org/";
    marker.setPosition(new GeographicalPosition(35.307364, 25.369789, 20));
    const quads = RDFSerializer.serializeToQuads(marker, URI);
    store.addQuads(quads);
    return store.getQuads(undefined, undefined, undefined, undefined);
}

async function generate() {
    const store = new Store();
    store.addQuads(createArUco());
    store.addQuads(createARTag());
    store.addQuads(createCustomMarker());
    store.addQuads(createVirtualObjects());
    store.addQuads(createQRCode());
    fs.writeFileSync(path.join("./data", "virtual_objects.ttl"), await RDFSerializer.stringify(store, {
        prettyPrint: true,
        prefixes: {
            example: URI,
            fidmark: "http://purl.org/fidmark/"
        }
    }));
}

generate();
