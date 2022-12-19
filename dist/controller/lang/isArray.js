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
exports.callLangIsArray = void 0;
const _ = require('lodash');
const isArrayTestDataOne = [1, 2, 3];
const isArrayTestDataTwo = 'Testing Lodash';
const isArrayTestDataThree = { dir: 'left', code: 97 };
const isArrayTestDataFour = [
    { dir: 'left', code: 97 },
    { dir: 'right', code: 100 }
];
/**
 * syntex: _.isArray(value)
 *
 * Application :
    Checks if value is classified as an Array object.
*/
const callLangIsArray = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsArray ---------------------');
    const isArrayTestDataOneRes = _.isArray(isArrayTestDataOne);
    const isArrayTestDataTwoRes = _.isArray(isArrayTestDataTwo);
    const isArrayTestDataThreeRes = _.isArray(isArrayTestDataThree);
    const isArrayTestDataFourRes = _.isArray(isArrayTestDataFour);
    console.log("\n isArrayTestDataOne \n", isArrayTestDataOne);
    console.log("\n isArrayTestDataTwo \n", isArrayTestDataTwo);
    console.log("\n isArrayTestDataThree \n", isArrayTestDataThree);
    console.log("\n isArrayTestDataFour \n", isArrayTestDataFour);
    res.end(JSON.stringify({ isArrayTestDataOneRes, isArrayTestDataTwoRes, isArrayTestDataThreeRes, isArrayTestDataFourRes }));
});
exports.callLangIsArray = callLangIsArray;
