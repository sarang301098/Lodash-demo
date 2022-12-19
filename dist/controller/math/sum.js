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
exports.callMathSum = void 0;
const _ = require('lodash');
const sumTestDataOne = [4, 2, 8, 6];
/**
 * syntex: _.sum(array)
 *
 * Application :
   Computes the sumimum value of array. If array is empty or falsey, undefined is returned.
*/
const callMathSum = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Math Sum ---------------------');
    const sumTestDataOneRes = _.sum([]);
    const sumTestDataTwoRes = _.sum(sumTestDataOne);
    console.log('\n sumTestDataOneRes: \n', sumTestDataOneRes);
    console.log('\n sumTestDataTwoRes: \n', sumTestDataTwoRes);
    res.end(JSON.stringify({ sumTestDataOneRes, sumTestDataTwoRes }));
});
exports.callMathSum = callMathSum;
