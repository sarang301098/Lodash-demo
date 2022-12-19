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
exports.callMathMin = void 0;
const _ = require('lodash');
const minTestDataOne = [4, 2, 8, 6];
/**
 * syntex: _.min(array)

 *
 * Application :
   Computes the minimum value of array. If array is empty or falsey, undefined is returned.
*/
const callMathMin = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Math Min ---------------------');
    const minTestDataOneRes = _.min([]);
    const minTestDataTwoRes = _.min(minTestDataOne);
    console.log('\n minTestDataOneRes: \n', minTestDataOneRes);
    console.log('\n minTestDataTwoRes: \n', minTestDataTwoRes);
    res.end(JSON.stringify({ minTestDataOneRes, minTestDataTwoRes }));
});
exports.callMathMin = callMathMin;
