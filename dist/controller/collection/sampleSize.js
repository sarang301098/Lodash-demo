"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callCollectionSampleSize = void 0;
const _ = require('lodash');
const sampleSizeTestDataOne = [1, 2, 3, 4, 5];
const sampleSizeTestDataTwo = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 18, active: true },
    { user: 'denis', age: 36, active: true },
    { user: 'uni', age: 18, active: true }
];
/**
 * syntex: _.sampleSize(collection, [n=1])
 *
 * Application :
    Gets n random elements at unique keys from collection up to the size of collection.
*/
const callCollectionSampleSize = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection SampleSize ---------------------');
    const sampleSizeTestDataOneRes = _.sampleSize(sampleSizeTestDataOne, 3);
    const sampleSizeTestDataTwoRes = _.sampleSize(sampleSizeTestDataOne, 8);
    const sampleSizeTestDataThreeRes = _.sampleSize(sampleSizeTestDataTwo, 3);
    console.log('\n sampleSizeTestDataOneRes: \n', sampleSizeTestDataOneRes);
    console.log('\n sampleSizeTestDataTwoRes: \n', sampleSizeTestDataTwoRes);
    console.log('\n sampleSizeTestDataThreeRes: \n', sampleSizeTestDataThreeRes);
    res.end(JSON.stringify({ sampleSizeTestDataOneRes, sampleSizeTestDataTwoRes, sampleSizeTestDataThreeRes }));
});
exports.callCollectionSampleSize = callCollectionSampleSize;
