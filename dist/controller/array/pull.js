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
exports.callArrayarrayPull = void 0;
const _ = require('lodash');
const pullTestDataOne = [1, 2, 3, 4, 5];
const pullTestDataTwo = [1, 2, 3, 1, 3, 4, 1, 5];
/**
 * syntex: _.pull(array, [values])
 *
 * Application :
   Removes all given values from array using SameValueZero for equality comparisons.
*/
const callArrayarrayPull = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array Pull ---------------------');
    const pullTestDataOneRes = _.pull(pullTestDataOne, 3, 5);
    const pullTestDataTwoRes = _.pull(pullTestDataTwo, 1, 5);
    console.log('\n pullTestDataOneRes: \n', pullTestDataOneRes);
    console.log('\n pullTestDataTwoRes: \n', pullTestDataTwoRes);
    res.end(JSON.stringify({ pullTestDataOneRes, pullTestDataTwoRes }));
});
exports.callArrayarrayPull = callArrayarrayPull;
