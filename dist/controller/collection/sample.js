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
exports.callCollectionSample = void 0;
const _ = require('lodash');
const sampleTestDataOne = [1, 2, 3, 4, 5];
const sampleTestDataTwo = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 18, active: true },
    { user: 'denis', age: 36, active: true },
    { user: 'uni', age: 18, active: true }
];
/**
 * syntex: _.sample(collection)
 *
 * Application :
    Gets a random element from collection.
*/
const callCollectionSample = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection Sample ---------------------');
    const sampleTestDataOneRes = _.sample(sampleTestDataOne);
    const sampleTestDataTwoRes = _.sample(sampleTestDataTwo);
    console.log('\n sampleTestDataOneRes: \n', sampleTestDataOneRes);
    console.log('\n sampleTestDataTwoRes: \n', sampleTestDataTwoRes);
    res.end(JSON.stringify({ sampleTestDataOneRes, sampleTestDataTwoRes }));
});
exports.callCollectionSample = callCollectionSample;
