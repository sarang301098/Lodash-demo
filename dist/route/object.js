"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const object_1 = require("../controller/object");
const router = (0, express_1.Router)();
const objectAssign = () => router.get('/assign', (0, object_1.callObjectAssign)());
exports.default = () => router.use([
    objectAssign()
]);
