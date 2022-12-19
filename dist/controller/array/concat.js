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
exports.callArrayConcat = void 0;
const _ = require('lodash');
const concatTestDataOne = [1, 2, 3];
const concatTestDataTwo = [3, 4, 5];
/**
 * usages:  I want to concat values.
 *
 * syntex: _.concat(array, [values]);
 *
 * Application :
   Creates a new array concatenating array with any additional arrays and/or values..
 */
const callArrayConcat = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array Concat ---------------------');
    const concatTestDataOneRes = _.concat(concatTestDataOne, concatTestDataTwo);
    const concatTestDataTwoRes = _.concat(concatTestDataOne, ['1', '2', '3']);
    const concatTestDataThreeRes = _.concat(concatTestDataOne, { a: 1, b: 2 }, [6, 7]);
    console.log('\n concatTestDataOneRes: \n', concatTestDataOneRes);
    console.log('\n concatTestDataTwoRes: \n', concatTestDataTwoRes);
    console.log('\n concatTestDataThreeRes: \n', concatTestDataThreeRes);
    res.end(JSON.stringify({ concatTestDataOneRes, concatTestDataTwoRes, concatTestDataThreeRes }));
});
exports.callArrayConcat = callArrayConcat;
