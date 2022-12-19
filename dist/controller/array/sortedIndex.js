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
exports.callArrayarraySortedIndex = void 0;
const _ = require('lodash');
const sortedIndexTestDataOne = [10, 20, 30, 40, 50];
const sortedIndexTestDataTwo = ['a', 'b', 'c', 'd', 'e', 'e', 'e', 'f'];
const sortedIndexTestDataThree = ['ajax', 'django', 'mongoDb', 'react', 'reactnative', 'yarn'];
/**
 * syntex: _.sortedIndex(array, value)
 *
 * Application :
   Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order
*/
const callArrayarraySortedIndex = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array SortedIndex ---------------------');
    const sortedIndexTestDataOneRes = _.sortedIndex(sortedIndexTestDataOne, 25);
    const sortedIndexTestDataTwoRes = _.sortedIndex(sortedIndexTestDataTwo, 'e');
    const sortedIndexTestDataThreeRes = _.sortedIndex(sortedIndexTestDataThree, 'ruby');
    console.log('\n sortedIndexTestDataOneRes: \n', sortedIndexTestDataOneRes);
    console.log('\n sortedIndexTestDataTwoRes: \n', sortedIndexTestDataTwoRes);
    console.log('\n sortedIndexTestDataThreeRes: \n', sortedIndexTestDataThreeRes);
    res.end(JSON.stringify({ sortedIndexTestDataOneRes, sortedIndexTestDataTwoRes, sortedIndexTestDataThreeRes }));
});
exports.callArrayarraySortedIndex = callArrayarraySortedIndex;
