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
exports.callCollectionKeyBy = void 0;
const _ = require('lodash');
const keyByTestDataOne = [
    { dir: 'left', code: 97 },
    { dir: 'right', code: 100 }
];
const keyByTestDataTwo = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 18, active: true },
    { user: 'denis', age: 36, active: true },
    { user: 'uni', age: 18, active: true }
];
/**
 * syntex: _.keyBy(collection, [iteratee=_.identity])
 *
 * Application :
    Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
    The corresponding value of each key is the last element responsible for generating the key.
    The iteratee is invoked with one argument: (value).
*/
const callCollectionKeyBy = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection KeyBy ---------------------');
    const keyByTestDataOneRes = _.keyBy(keyByTestDataOne, function (o) { return String.fromCharCode(o.code); });
    const keyByTestDatatwoRes = _.keyBy(keyByTestDataOne, 'dir');
    // dosen't use while these type of Data is there. it's overright the values on single keys.
    const keyByTestDataThreeRes = _.keyBy(keyByTestDataTwo, function (o) { return o.age; });
    console.log('\n keyByTestDataOneRes: \n', keyByTestDataOneRes);
    console.log('\n keyByTestDatatwoRes: \n', keyByTestDatatwoRes);
    console.log('\n keyByTestDataThreeRes: \n', keyByTestDataThreeRes);
    res.end(JSON.stringify({ keyByTestDataOneRes, keyByTestDatatwoRes, keyByTestDataThreeRes }));
});
exports.callCollectionKeyBy = callCollectionKeyBy;
