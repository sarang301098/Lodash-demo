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
exports.callArrayUnzip = void 0;
const _ = require('lodash');
const unzipTestDataOne = [['Akash', 2, 'pass'], ['Amit', 2, 'pass'], ['Aviral', 3, 'fail']];
const unzipTestDataTwo = [['Akash', 'Amit', 'Aviral'], [1, 2, 3], ['pass', 'pass', 'fail']];
const unzipTestDataThree = [['Akash', 1, 5999], ['*', 2, 'pass'], ['!', '@', 3222], ['?', '>', '<', ';']];
/**
 * syntex: _.unzip(array)
 *
 * Application :
   This method is like _.zip except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.
*/
const callArrayUnzip = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array Unzip ---------------------');
    const unzipTestDataOneRes = _.unzip(unzipTestDataOne);
    const unzipTestDataTwoRes = _.unzip(unzipTestDataTwo);
    const unzipTestDataThreeRes = _.unzip(unzipTestDataThree);
    console.log('\n unzipTestDataOneRes: \n', unzipTestDataOneRes);
    console.log('\n unzipTestDataTwoRes: \n', unzipTestDataTwoRes);
    console.log('\n unzipTestDataThreeRes: \n', unzipTestDataThreeRes);
    res.end(JSON.stringify({ unzipTestDataOneRes, unzipTestDataTwoRes, unzipTestDataThreeRes }));
});
exports.callArrayUnzip = callArrayUnzip;
