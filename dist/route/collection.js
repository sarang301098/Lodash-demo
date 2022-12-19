"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const collection_1 = require("../controller/collection");
const router = (0, express_1.Router)();
const collectionCountBy = () => router.get('/countBy', (0, collection_1.callCollectionCountBy)());
const collectionEvery = () => router.get('/every', (0, collection_1.callCollectionEvery)());
const collectionFind = () => router.get('/find', (0, collection_1.callCollectionFind)());
const collectionFlatMap = () => router.get('/flatMap', (0, collection_1.callCollectionFlatMap)());
const collectionFlatMapDeep = () => router.get('/flatMapDeep', (0, collection_1.callCollectionFlatMapDeep)());
const collectionFlatMapDepth = () => router.get('/flatMapDepth', (0, collection_1.callCollectionFlatMapDepth)());
const collectionGroupBy = () => router.get('/groupBy', (0, collection_1.callCollectionGroupBy)());
const collectionIncludes = () => router.get('/includes', (0, collection_1.callCollectionIncludes)());
const collectionInvokeMap = () => router.get('/invokeMap', (0, collection_1.callCollectionInvokeMap)());
const collectionKeyBy = () => router.get('/keyBy', (0, collection_1.callCollectionKeyBy)());
const collectionMap = () => router.get('/map', (0, collection_1.callCollectionMap)());
const collectionOrderBy = () => router.get('/orderBy', (0, collection_1.callCollectionOrderBy)());
const collectionPartition = () => router.get('/partition', (0, collection_1.callCollectionPartition)());
const collectionSample = () => router.get('/sample', (0, collection_1.callCollectionSample)());
const collectionSampleSize = () => router.get('/sampleSize', (0, collection_1.callCollectionSampleSize)());
const collectionSize = () => router.get('/size', (0, collection_1.callCollectionSize)());
const collectionSort = () => router.get('/sort', (0, collection_1.callCollectionSortBy)());
exports.default = () => router.use([
    collectionCountBy(),
    collectionEvery(),
    collectionFind(),
    collectionFlatMap(),
    collectionFlatMapDeep(),
    collectionFlatMapDepth(),
    collectionGroupBy(),
    collectionIncludes(),
    collectionInvokeMap(),
    collectionKeyBy(),
    collectionMap(),
    collectionOrderBy(),
    collectionPartition(),
    collectionSample(),
    collectionSampleSize(),
    collectionSize(),
    collectionSort()
]);
