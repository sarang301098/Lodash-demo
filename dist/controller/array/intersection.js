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
exports.callArrayIntersection = void 0;
const _ = require('lodash');
const intersectionTestDataOne = [1, 2, 3];
const intersectionTestDataTwo = [3, 4, 5];
/**
 * _.intersection([arrays])
 *
 * Application :
  Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons.
  The order and references of result values are determined by the first array.
*/
const callArrayIntersection = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array Intersection ---------------------');
    const intersectionTestDataOneRes = _.intersection(intersectionTestDataOne, intersectionTestDataTwo);
    const intersectionTestDataTwoRes = _.intersection(intersectionTestDataOne, ['1', '2', '3']);
    console.log('\n intersectionTestDataOneRes: \n', intersectionTestDataOneRes);
    console.log('\n intersectionTestDataTwoRes: \n', intersectionTestDataTwoRes);
    res.end(JSON.stringify({ intersectionTestDataOneRes, intersectionTestDataTwoRes }));
});
exports.callArrayIntersection = callArrayIntersection;
