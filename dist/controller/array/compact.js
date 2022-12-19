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
exports.callArrayCompact = void 0;
const _ = require('lodash');
const compactTestDataOne = [0, 1, false, 2, '', 3];
const compactTestDataTwo = [0, false, '', undefined, NaN];
const compactTestDataThree = [false, 'HTML', NaN, 'CSS', 'undefined'];
const compactTestDataFour = [false, true, 'yes', 'no', "no2"];
/**
 * usages:  I need to remove the unnecessary data from array.
 *
 * syntex: _.compact(array);
 *
 * Application :
   Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 */
const callArrayCompact = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array Compact ---------------------');
    const compactTestDataOneRes = _.compact(compactTestDataOne);
    const compactTestDataTwoRes = _.compact(compactTestDataTwo);
    const compactTestDataThreeRes = _.compact(compactTestDataThree);
    const compactTestDataFourRes = _.compact(compactTestDataFour);
    console.log('\n compactTestDataOneRes: \n', compactTestDataOneRes);
    console.log('\n compactTestDataTwoRes: \n', compactTestDataTwoRes);
    console.log('\n compactTestDataThreeRes: \n', compactTestDataThreeRes);
    console.log('\n compactTestDataFourRes: \n', compactTestDataFourRes);
    res.end(JSON.stringify({ compactTestDataOneRes, compactTestDataTwoRes, compactTestDataThreeRes, compactTestDataFourRes }));
});
exports.callArrayCompact = callArrayCompact;
