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
exports.callArrayZipObject = void 0;
const _ = require('lodash');
const zipObjectTestDataOne = [1, 2, 3];
const zipObjectTestDataTwo = ['a', 'b', 'd'];
/**
 * syntex: _.zipObject([props=[]], [values=[]])
 *
 * Application :
   This method is like _.fromPairs except that it accepts two arrays,
   one of property identifiers and one of corresponding values.
*/
const callArrayZipObject = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array ZipObject ---------------------');
    const zipObjectTestDataOneRes = _.zipObject(zipObjectTestDataOne, zipObjectTestDataTwo);
    const zipObjectTestDataTwoRes = _.zipObject(zipObjectTestDataOne, [...zipObjectTestDataTwo, 'c']);
    const zipObjectTestDataThreeRes = _.zipObject([...zipObjectTestDataOne, 4], zipObjectTestDataTwo);
    console.log('\n zipObjectTestDataOneRes: \n', zipObjectTestDataOneRes);
    console.log('\n zipObjectTestDataTwoRes: \n', zipObjectTestDataTwoRes);
    console.log('\n zipObjectTestDataThreeRes: \n', zipObjectTestDataThreeRes);
    res.end(JSON.stringify({ zipObjectTestDataOneRes, zipObjectTestDataTwoRes, zipObjectTestDataThreeRes }));
});
exports.callArrayZipObject = callArrayZipObject;
