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
exports.callMathSumBy = void 0;
const _ = require('lodash');
const sumByTestDataOne = [
    { dir: 'left', code: 97 },
    { dir: 'right', code: 100 }
];
const sumByTestDataTwo = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 25, active: false },
    { user: 'pebbles', age: 40, active: true },
    { user: 'denis', age: 40, active: true },
    { user: 'uni', age: 18, active: true }
];
/**
 * syntex: _.sumBy(array, [iteratee=_.identity])
 *
 * Application :
    This method is like _.sum except that it accepts iteratee which is invoked for each element in array to generate the value to be summed.
    The iteratee is invoked with one argument: (value).
*/
const callMathSumBy = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Math SumBy ---------------------');
    const sumByTestDataOneRes = _.sumBy(sumByTestDataOne, function getCode(o) { return o.code; });
    const sumByTestDatatwoRes = _.sumBy(sumByTestDataTwo, 'age');
    console.log('\n sumByTestDataOneRes: \n', sumByTestDataOneRes);
    console.log('\n sumByTestDatatwoRes: \n', sumByTestDatatwoRes);
    res.end(JSON.stringify({ sumByTestDataOneRes, sumByTestDatatwoRes }));
});
exports.callMathSumBy = callMathSumBy;
