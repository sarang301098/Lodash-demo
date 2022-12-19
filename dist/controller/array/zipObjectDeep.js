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
exports.callArrayZipObjectDeep = void 0;
const _ = require('lodash');
const zipObjectDeepTestDataOne = ['a.b[0].c', 'a.b[1].d'];
;
const zipObjectDeepTestDataTwo = ['a', 'g', 'h', 'b', 'c', 'd', 'e', 'f'];
const zipObjectDeepTestDataThree = [1, 2, 3, 4, 5, 6, 7];
/**
 * syntex: _.zipObjectDeep([props=[]], [values=[]])
 *
 * Application :
   This method is like _.zipObject except that it supports property paths.
*/
const callArrayZipObjectDeep = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array ZipObjectDeep ---------------------');
    const zipObjectDeepTestDataOneRes = _.zipObjectDeep(zipObjectDeepTestDataOne, [1, 2]);
    const zipObjectDeepTestDataTwoRes = _.zipObjectDeep(zipObjectDeepTestDataTwo, zipObjectDeepTestDataThree);
    const zipObjectDeepTestDataThreeRes = _.zipObjectDeep([10, 20, 30], [1, 2, 3]);
    console.log('\n ZipObjectDeepTestDataOneRes: \n', zipObjectDeepTestDataOneRes);
    console.log('\n ZipObjectDeepTestDataTwoRes: \n', zipObjectDeepTestDataTwoRes);
    console.log('\n ZipObjectDeepTestDataThreeRes: \n', zipObjectDeepTestDataThreeRes);
    res.end(JSON.stringify({ zipObjectDeepTestDataOneRes, zipObjectDeepTestDataTwoRes, zipObjectDeepTestDataThreeRes }));
});
exports.callArrayZipObjectDeep = callArrayZipObjectDeep;
