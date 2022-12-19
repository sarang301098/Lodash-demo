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
exports.callLangIsEqual = void 0;
const _ = require('lodash');
const isEqualTestDataOne = [1, 2, 3];
const isEqualTestDataTwo = [
    { dir: 'left', code: 97 },
    { dir: 'right', code: 100 }
];
/**
 * syntex: _.isEqual(value, other)
 *
 * Application :
    Performs a deep comparison between two values to determine if they are equivalent.

    Note: This method supports comparing arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. Object objects are compared by their own, not inherited, enumerable properties. Functions and DOM nodes are compared by strict equality,
    i.e. ===.
*/
const callLangIsEqual = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsEqual ---------------------');
    const isEqualTestDataOneRes = _.isEqual(isEqualTestDataOne, isEqualTestDataOne);
    const isEqualTestDataTwoRes = _.isEqual(isEqualTestDataTwo, isEqualTestDataTwo);
    console.log("\n isEqualTestDataOneRes \n", isEqualTestDataOneRes);
    console.log("\n isEqualTestDataTwoRes \n", isEqualTestDataTwoRes);
    res.end(JSON.stringify({ isEqualTestDataOneRes, isEqualTestDataTwoRes }));
});
exports.callLangIsEqual = callLangIsEqual;
