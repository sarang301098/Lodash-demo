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
exports.callArrayUniq = void 0;
const _ = require('lodash');
const uniqTestDataOne = [1, 2, 3, 1, 2, 7, 2];
const uniqTestDataTwo = ['a', 'b', 'd', 'a', 'c', 'b'];
/**
 *
 * syntex: _.uniq(array)
 *
 * Application :
    Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept.
    The order of result values is determined by the order they occur in the array.
*/
const callArrayUniq = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array Uniq ---------------------');
    const uniqTestDataOneRes = _.unionBy(uniqTestDataOne);
    const uniqTestDataTwoRes = _.unionBy(uniqTestDataTwo);
    console.log('\n uniqTestDataOneRes: \n', uniqTestDataOneRes);
    console.log('\n uniqTestDataTwoRes: \n', uniqTestDataTwoRes);
    res.end(JSON.stringify({ uniqTestDataOneRes, uniqTestDataTwoRes }));
});
exports.callArrayUniq = callArrayUniq;
