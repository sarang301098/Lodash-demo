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
exports.callMathCeil = void 0;
const _ = require('lodash');
/**
 * syntex: _.ceil(number, [precision=0])
 *
 * Application :
    Computes number rounded up to precision.
*/
const callMathCeil = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Math Ceil ---------------------');
    const ceilTestDataOneRes = _.ceil(4.006);
    const ceilTestDataTwoRes = _.ceil(6.004, 2);
    const ceilTestDataThreeRes = _.ceil(6040, -2);
    console.log('\n ceilTestDataOneRes: \n', ceilTestDataOneRes);
    console.log('\n ceilTestDataTwoRes: \n', ceilTestDataTwoRes);
    console.log('\n ceilTestDataThreeRes: \n', ceilTestDataThreeRes);
    res.end(JSON.stringify({ ceilTestDataOneRes, ceilTestDataTwoRes, ceilTestDataThreeRes }));
});
exports.callMathCeil = callMathCeil;
