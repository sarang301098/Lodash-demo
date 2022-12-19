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
exports.callArrayIntersectionBy = void 0;
const _ = require('lodash');
const intersectionByTestDataOne = [1.1, 2.2, 3.3, 4.4];
const intersectionByTestDataTwo = [{ 'x': 1 }, { 'x': 2 }, { 'x': 2 }];
/**
 * syntex: _.intersectionBy([arrays], [iteratee=_.identity])
 *
 * Application :
    This method is like _.intersection except that it accepts iteratee which is invoked for each element
    of each arrays to generate the criterion by which they're compared.
    The order and references of result values are determined by the first array.
    The iteratee is invoked with one argument:
    (value).
*/
const callArrayIntersectionBy = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array IntersectionBy ---------------------');
    const differenceTestDataOneRes = _.intersectionBy(intersectionByTestDataOne, [2.3, 3.4], Math.floor);
    const differenceTestDataTwoRes = _.intersectionBy(intersectionByTestDataTwo, [{ 'x': 1 }], 'x');
    console.log('\n differenceTestDataOneRes: \n', differenceTestDataOneRes);
    console.log('\n differenceTestDataTwoRes: \n', differenceTestDataTwoRes);
    res.end(JSON.stringify({ differenceTestDataOneRes, differenceTestDataTwoRes }));
});
exports.callArrayIntersectionBy = callArrayIntersectionBy;
