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
exports.callCollectionMap = void 0;
const _ = require('lodash');
const mapTestDataOne = [1, 2, 3, 4, 5];
const mapTestDataTwo = [
    { dir: 'left', code: 97 },
    { dir: 'right', code: 100 }
];
const mapTestDataThree = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 18, active: true },
    { user: 'denis', age: 36, active: true },
    { user: 'uni', age: 18, active: true }
];
/**
 * syntex: _.map(collection, [iteratee=_.identity])
 *
 * Application :
    Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
    (value, index|key, collection).

    Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues, _.reject, and _.some.

    The guarded methods are:
    ary, chunk, curry, curryRight, drop, dropRight, every, fill, invert, parseInt, random, range,
    rangeRight, repeat, sampleSize, slice, some, sortBy, split, take, takeRight, template, trim, trimEnd, trimStart, and words
*/
const callCollectionMap = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection Map ---------------------');
    const mapTestDataOneRes = _.map(mapTestDataOne, function square(o) { return o * o; });
    const mapTestDatatwoRes = _.map(mapTestDataTwo, 'dir');
    const mapTestDataThreeRes = _.map(mapTestDataThree, 'age');
    console.log('\n mapTestDataOneRes: \n', mapTestDataOneRes);
    console.log('\n mapTestDatatwoRes: \n', mapTestDatatwoRes);
    console.log('\n mapTestDataThreeRes: \n', mapTestDataThreeRes);
    res.end(JSON.stringify({ mapTestDataOneRes, mapTestDatatwoRes, mapTestDataThreeRes }));
});
exports.callCollectionMap = callCollectionMap;
