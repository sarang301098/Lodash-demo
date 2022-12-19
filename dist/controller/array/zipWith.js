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
exports.callArrayZipWith = void 0;
const _ = require('lodash');
const zipWithTestDataOne = [10, 20];
const zipWithTestDataTwo = ['Rahul', 'Ram', 'Aditya'];
/**
 * syntex: _.zipWith([arrays], [iteratee=_.identity])

 *
 * Application :
   This method is like _.zip except that it accepts iteratee to specify
   how grouped values should be combined. The iteratee is invoked with the elements of each group: (...group).
*/
const callArrayZipWith = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array ZipWith ---------------------');
    const zipWithTestDataOneRes = _.zipWith(zipWithTestDataOne, [1, 2], function (a, b) { return a + b; });
    const zipWithTestDataTwoRes = _.zipWith(zipWithTestDataTwo, ['Sharma', 'Kumar', 'Verma'], function (a, b) { return a + ' ' + b; });
    console.log('\n zipWithTestDataOneRes: \n', zipWithTestDataOneRes);
    console.log('\n zipWithTestDataTwoRes: \n', zipWithTestDataTwoRes);
    res.end(JSON.stringify({ zipWithTestDataOneRes, zipWithTestDataTwoRes }));
});
exports.callArrayZipWith = callArrayZipWith;
