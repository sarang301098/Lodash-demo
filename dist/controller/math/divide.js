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
exports.callMathDivide = void 0;
const _ = require('lodash');
/**
 * syntex: _.divide(dividend, divisor)
 *
 * Application :
   Divide two numbers.
*/
const callMathDivide = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Math Divide ---------------------');
    const divideTestDataOneRes = _.add(6, 2);
    const divideTestDataTwoRes = _.add(6, 4);
    console.log('\n divideTestDataOneRes: \n', divideTestDataOneRes);
    console.log('\n divideTestDataTwoRes: \n', divideTestDataTwoRes);
    res.end(JSON.stringify({ divideTestDataOneRes, divideTestDataTwoRes }));
});
exports.callMathDivide = callMathDivide;
