"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const array_1 = require("../controller/array");
const router = (0, express_1.Router)();
const arrayChunk = () => router.get('/chunk', (0, array_1.callArrayChunk)());
const arrayCompact = () => router.get('/compact', (0, array_1.callArrayCompact)());
const arrayConcat = () => router.get('/concat', (0, array_1.callArrayConcat)());
const arrayDifference = () => router.get('/difference', (0, array_1.callArrayDifference)());
const arrayDifferenceBy = () => router.get('/differenceBy', (0, array_1.callArrayDifferenceBy)());
const arrayDifferenceWith = () => router.get('/differenceWith', (0, array_1.callArrayDifferenceWith)());
const arrayFindIndex = () => router.get('/findIndex', (0, array_1.callArrayarrayFindIndex)());
const arrayFlatten = () => router.get('/flatten', (0, array_1.callArrayarrayFlatten)());
const arrayFromPairs = () => router.get('/fromPairs', (0, array_1.callArrayarrayFromPairs)());
const arrayFlattenDeep = () => router.get('/flattenDeep', (0, array_1.callArrayarrayFlattenDeep)());
const arrayIntersection = () => router.get('/intersection', (0, array_1.callArrayIntersection)());
const arrayIntersectionBy = () => router.get('/intersectionBy', (0, array_1.callArrayIntersectionBy)());
const arrayIntersectionWith = () => router.get('/intersectionWith', (0, array_1.callArrayIntersectionWith)());
const arrayPull = () => router.get('/pull', (0, array_1.callArrayarrayPull)());
const arrayPullAll = () => router.get('/pullAll', (0, array_1.callArrayarrayPullAll)());
const arrayPullAllBy = () => router.get('/pullAllBy', (0, array_1.callArrayarrayPullAllBy)());
const arrayPullAllWith = () => router.get('/pullAllWith', (0, array_1.callArrayarrayPullAllWith)());
const arraySortedIndex = () => router.get('/sortedIndex', (0, array_1.callArrayarraySortedIndex)());
const arraySortedUniq = () => router.get('/sortedUniq', (0, array_1.callArrayarraySortedUniq)());
const arraySortedUniqBy = () => router.get('/sortedUniqBy', (0, array_1.callArrayarraySortedUniqBy)());
const arrayUnion = () => router.get('/union', (0, array_1.callArrayarrayUnion)());
const arrayUnionBy = () => router.get('/unionBy', (0, array_1.callArrayUnionBy)());
const arrayUniq = () => router.get('/uniq', (0, array_1.callArrayUniq)());
const arrayUniqBy = () => router.get('/uniqBy', (0, array_1.callArrayUniqBy)());
const arrayUniqWith = () => router.get('/uniqWith', (0, array_1.callArrayUniqWith)());
const arrayUnzip = () => router.get('/unzip', (0, array_1.callArrayUnzip)());
const arrayZip = () => router.get('/zip', (0, array_1.callArrayZip)());
const arrayZipObject = () => router.get('/zipObject', (0, array_1.callArrayZipObject)());
const arrayZipObjectDeep = () => router.get('/zipObjectDeep', (0, array_1.callArrayZipObjectDeep)());
const arrayZipWith = () => router.get('/zipWith', (0, array_1.callArrayZipWith)());
exports.default = () => router.use([
    arrayChunk(),
    arrayCompact(),
    arrayConcat(),
    arrayDifference(),
    arrayDifferenceBy(),
    arrayDifferenceWith(),
    arrayFindIndex(),
    arrayFlatten(),
    arrayFromPairs(),
    arrayFlattenDeep(),
    arrayIntersection(),
    arrayIntersectionBy(),
    arrayIntersectionWith(),
    arrayPull(),
    arrayPullAll(),
    arrayPullAllBy(),
    arrayPullAllWith(),
    arraySortedIndex(),
    arraySortedUniq(),
    arraySortedUniqBy(),
    arrayUnion(),
    arrayUnionBy(),
    arrayUniq(),
    arrayUniqBy(),
    arrayUniqWith(),
    arrayUnzip(),
    arrayZip(),
    arrayZipObject(),
    arrayZipObjectDeep(),
    arrayZipWith()
]);
