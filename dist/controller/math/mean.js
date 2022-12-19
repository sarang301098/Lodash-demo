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
exports.callMathMean = void 0;
const _ = require('lodash');
const meanTestDataOne = [4, 2, 8, 6];
/**
 * syntex: _.mean(array)

 *
 * Application :
   Computes the mean of the values in array.
*/
const callMathMean = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Math Mean ---------------------');
    const meanTestDataOneRes = _.max([]);
    const meanTestDataTwoRes = _.max(meanTestDataOne);
    console.log('\n meanTestDataOneRes: \n', meanTestDataOneRes);
    console.log('\n meanTestDataTwoRes: \n', meanTestDataTwoRes);
    res.end(JSON.stringify({ meanTestDataOneRes, meanTestDataTwoRes }));
});
exports.callMathMean = callMathMean;
