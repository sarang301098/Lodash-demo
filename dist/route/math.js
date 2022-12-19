"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const math_1 = require("../controller/math");
const router = (0, express_1.Router)();
const mathAdd = () => router.get('/add', (0, math_1.callMathAdd)());
const mathCeil = () => router.get('/ceil', (0, math_1.callMathCeil)());
const mathDivide = () => router.get('/divide', (0, math_1.callMathDivide)());
const mathFloor = () => router.get('/floor', (0, math_1.callMathFloor)());
const mathMax = () => router.get('/max', (0, math_1.callMathMax)());
const mathMaxBy = () => router.get('/maxBy', (0, math_1.callMathMaxBy)());
const mathMean = () => router.get('/mean', (0, math_1.callMathMean)());
const mathMeanBy = () => router.get('/meanBy', (0, math_1.callMathMeanBy)());
const mathMin = () => router.get('/min', (0, math_1.callMathMin)());
const mathMinBy = () => router.get('/minBy', (0, math_1.callMathMinBy)());
const mathSum = () => router.get('/sum', (0, math_1.callMathSum)());
const mathSumBy = () => router.get('/sumBy', (0, math_1.callMathSumBy)());
exports.default = () => router.use([
    mathAdd(),
    mathCeil(),
    mathDivide(),
    mathFloor(),
    mathMax(),
    mathMaxBy(),
    mathMean(),
    mathMeanBy(),
    mathMin(),
    mathMinBy(),
    mathSum(),
    mathSumBy()
]);
