// three (r185) exports map does not resolve extensionless `three/examples/jsm/*`
// subpaths from CommonJS (mocha/ts-node). Map them to the concrete .js files
// before the package code imports three's loaders.
import * as path from 'path';

const Module = require('module');
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function (request: string, ...rest: any[]) {
    if (request.startsWith('three/examples/jsm/') && !path.extname(request)) {
        return originalResolve.call(this, `${request}.js`, ...rest);
    }
    return originalResolve.call(this, request, ...rest);
};
