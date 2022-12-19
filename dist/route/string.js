"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const string_1 = require("../controller/string");
const router = (0, express_1.Router)();
const stringCamleCase = () => router.get('/camleCase', (0, string_1.callStringCamleCase)());
const stringCapitalize = () => router.get('/capitalize', (0, string_1.callStringCapitalize)());
const stringPad = () => router.get('/pad', (0, string_1.callStringPad)());
const stringPadEnd = () => router.get('/padEnd', (0, string_1.callStringPadEnd)());
const stringPadStart = () => router.get('/padStart', (0, string_1.callStringPadStart)());
const stringParseInt = () => router.get('/parseInt', (0, string_1.callStringParseInt)());
const stringRepeat = () => router.get('/repeat', (0, string_1.callStringRepeat)());
const stringReplace = () => router.get('/replace', (0, string_1.callStringReplace)());
const stringSplit = () => router.get('/split', (0, string_1.callStringSplit)());
const stringTrim = () => router.get('/trim', (0, string_1.callStringTrim)());
exports.default = () => router.use([
    stringCamleCase(),
    stringCapitalize(),
    stringPad(),
    stringPadEnd(),
    stringPadStart(),
    stringParseInt(),
    stringRepeat(),
    stringReplace(),
    stringSplit(),
    stringTrim()
]);
