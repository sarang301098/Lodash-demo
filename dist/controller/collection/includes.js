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
exports.callCollectionIncludes = void 0;
const _ = require('lodash');
const groupByTestDataOne = [1, 2, 3, 4, 5];
const groupByTestDataTwo = { 'a': 1, 'b': 2 };
/**
 * syntex: _.includes(collection, value, [fromIndex=0])
 *
 * Application :
   Checks if value is in collection. If collection is a string, it's checked for a substring of value,
   otherwise SameValueZero is used for equality comparisons.
   If fromIndex is negative, it's used as the offset from the end of collection.
*/
const callCollectionIncludes = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection Includes ---------------------');
    const includesTestDataOneRes = _.includes(groupByTestDataOne, 1);
    const includesTestDataTwoRes = _.includes(groupByTestDataOne, 1, 2);
    const includesTestDataThreeRes = _.includes(groupByTestDataTwo, 1);
    const includesTestDataFourRes = _.includes('abcde', 'bc');
    console.log('\n includesTestDataOneRes: \n', includesTestDataOneRes);
    console.log('\n includesTestDataTwoRes: \n', includesTestDataTwoRes);
    console.log('\n includesTestDataThreeRes: \n', includesTestDataThreeRes);
    console.log('\n includesTestDataFourRes: \n', includesTestDataFourRes);
    res.end(JSON.stringify({ includesTestDataOneRes, includesTestDataTwoRes, includesTestDataThreeRes, includesTestDataFourRes }));
});
exports.callCollectionIncludes = callCollectionIncludes;
