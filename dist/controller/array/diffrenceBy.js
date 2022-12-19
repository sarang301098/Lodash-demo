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
exports.callArrayDifferenceBy = void 0;
const _ = require('lodash');
const differenceByTestDataOne = [1.1, 2.2, 3.3, 4.4];
const differenceByTestDataTwo = [{ 'x': 1 }, { 'x': 2 }];
/**
 * syntex: _.differenceBy(array, [values], [iteratee=_.identity])
 *
 * Application :
 * This method is like _.difference except that it accepts iteratee which is invoked for each element
   of array and values to generate the criterion by which they're compared.
    The order and references of result values are determined by the first array.
    The iteratee is invoked with one argument: (value).

   Note: Unlike _.pullAllBy, this method returns a new array.
*/
const callArrayDifferenceBy = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array DifferenceBy ---------------------');
    // _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    const differenceTestDataOneRes = _.differenceBy(differenceByTestDataOne, [2.3, 3.4], Math.floor);
    const differenceTestDataTwoRes = _.differenceBy(differenceByTestDataTwo, [{ 'x': 1 }], 'x');
    console.log('\n differenceTestDataOneRes: \n', differenceTestDataOneRes);
    console.log('\n differenceTestDataTwoRes: \n', differenceTestDataTwoRes);
    res.end(JSON.stringify({ differenceTestDataOneRes, differenceTestDataTwoRes }));
});
exports.callArrayDifferenceBy = callArrayDifferenceBy;
