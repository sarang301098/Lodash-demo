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
exports.callArrayarrayFromPairs = void 0;
const _ = require('lodash');
const fromPairsTestDataOne = [['x', 1], ['y', 2], ['z', 3]];
const fromPairsTestDataTwo = [['one', 1], ['two', 2], ['three', 3]];
const fromPairsTestDataThree = [
    ['name', 'lodash'],
    ['live', 'npm'],
    ['used', 'nodejs']
];
/**
 * syntex: _.pull(array, [values])
 *
 * Application :
 * Removes all given values from array using SameValueZero for equality comparisons.
*/
const callArrayarrayFromPairs = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array FromPairs ---------------------');
    const fromPairsTestDataOneRes = _.fromPairs(fromPairsTestDataOne);
    const fromPairsTestDataTwoRes = _.fromPairs(fromPairsTestDataTwo);
    const fromPairsTestDataThreeRes = _.fromPairs(fromPairsTestDataThree);
    console.log('\n fromPairsTestDataOneRes: \n', fromPairsTestDataOneRes);
    console.log('\n fromPairsTestDataTwoRes: \n', fromPairsTestDataTwoRes);
    console.log('\n fromPairsTestDataThreeRes: \n', fromPairsTestDataThreeRes);
    // fromPairsTestDataThreeRes
    res.end(JSON.stringify({ fromPairsTestDataOneRes, fromPairsTestDataTwoRes, fromPairsTestDataThreeRes }));
});
exports.callArrayarrayFromPairs = callArrayarrayFromPairs;
