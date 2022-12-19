"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lang_1 = require("../controller/lang");
const router = (0, express_1.Router)();
const langCastArray = () => router.get('/castArray', (0, lang_1.callLangCastArray)());
const langClone = () => router.get('/clone', (0, lang_1.callLangClone)());
const langCloneDeep = () => router.get('/cloneDeep', (0, lang_1.callLangCloneDeep)());
const langConforms = () => router.get('/conforms', (0, lang_1.callLangConforms)());
const langConformsTo = () => router.get('/conformsTo', (0, lang_1.callLangConformsTo)());
const langEq = () => router.get('/eq', (0, lang_1.callLangEq)());
const langGt = () => router.get('/gt', (0, lang_1.callLangGt)());
const langIsArray = () => router.get('/isArray', (0, lang_1.callLangIsArray)());
const langIsArrayLike = () => router.get('/isArrayLike', (0, lang_1.callLangIsArrayLike)());
const langIsArrayLikeObject = () => router.get('/isArrayLikeObject', (0, lang_1.callLangIsArrayLikeObject)());
const langIsBoolean = () => router.get('/isBoolean', (0, lang_1.callLangIsBoolean)());
const langIsBuffer = () => router.get('/isBuffer', (0, lang_1.callLangIsBuffer)());
const langIsDate = () => router.get('/isDate', (0, lang_1.callLangIsDate)());
const langIsElement = () => router.get('/isElement', (0, lang_1.callLangIsElement)());
const langIsEmpty = () => router.get('/isEmpty', (0, lang_1.callLangIsEmpty)());
const langIsEqual = () => router.get('/isEqual', (0, lang_1.callLangIsEqual)());
const langIsError = () => router.get('/isError', (0, lang_1.callLangIsError)());
const langIsFunction = () => router.get('/isFunction', (0, lang_1.callLangIsFunction)());
const langIsLength = () => router.get('/isLength', (0, lang_1.callLangIsLength)());
const langIsMap = () => router.get('/isMap', (0, lang_1.callLangIsMap)());
const langIsMatch = () => router.get('/isMatch', (0, lang_1.callLangIsMatch)());
const langIsObject = () => router.get('/isObject', (0, lang_1.callLangIsObject)());
exports.default = () => router.use([
    langCastArray(),
    langClone(),
    langCloneDeep(),
    langConforms(),
    langConformsTo(),
    langEq(),
    langGt(),
    langIsArray(),
    langIsArrayLike(),
    langIsArrayLikeObject(),
    langIsBoolean(),
    langIsBuffer(),
    langIsDate(),
    langIsElement(),
    langIsEmpty(),
    langIsEqual(),
    langIsError(),
    langIsFunction(),
    langIsLength(),
    langIsMap(),
    langIsMatch(),
    langIsObject()
]);
