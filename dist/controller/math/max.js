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
exports.callMathMax = void 0;
const _ = require('lodash');
const maxTestDataOne = [4, 2, 8, 6];
/**
 * syntex: _.max(array)
 *
 * Application :
   Computes the maximum value of array. If array is empty or falsey, undefined is returned.
*/
const callMathMax = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Math Max ---------------------');
    const maxTestDataOneRes = _.max([]);
    const maxTestDataTwoRes = _.max(maxTestDataOne);
    console.log('\n maxTestDataOneRes: \n', maxTestDataOneRes);
    console.log('\n maxTestDataTwoRes: \n', maxTestDataTwoRes);
    res.end(JSON.stringify({ maxTestDataOneRes, maxTestDataTwoRes }));
});
exports.callMathMax = callMathMax;
