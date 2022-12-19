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
exports.callLangClone = void 0;
const _ = require('lodash');
const cloneTestDataOne = { x: 23 };
const cloneTestDataTwo = [{ x: 1 }, { y: 2 }];
/**
 * syntex: _.clone(value)
 *
 * Application :
    Creates a shallow clone of value.

    Note: This method is loosely based on the structured clone algorithm and supports cloning arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.
*/
const callLangClone = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang Clone ---------------------');
    const castArrayTestDataOneRes = _.clone(cloneTestDataOne);
    console.log('Comparing original with' + ' shallow ', cloneTestDataOne === castArrayTestDataOneRes);
    cloneTestDataOne.x = 10;
    console.log('\n After changing original value \n');
    console.log("\n Original value \n", cloneTestDataOne);
    console.log("\n Shallow Copy value \n", castArrayTestDataOneRes);
    const castArrayTestDataTwoRes = _.clone(cloneTestDataTwo);
    console.log('\n\n --------------------------------------');
    console.log('Comparing original with' + ' shallow ', cloneTestDataTwo === castArrayTestDataTwoRes);
    cloneTestDataTwo[0].x = 10;
    console.log('\n After changing original value \n');
    console.log("\n Original value \n", cloneTestDataTwo);
    console.log("\n Shallow Copy value \n", castArrayTestDataTwoRes);
    res.end(JSON.stringify({ castArrayTestDataOneRes, castArrayTestDataTwoRes }));
});
exports.callLangClone = callLangClone;
