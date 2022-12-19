"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const function_1 = require("../controller/function");
const router = (0, express_1.Router)();
const functionTest = () => router.get('/test', (0, function_1.callFunctionTest)());
exports.default = () => router.use([
    functionTest()
]);
