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
exports.callLangIsObject = void 0;
const _ = require('lodash');
const isObjectTestDataOne = [1, 2, 3, 4, 5];
const isObjectTestDataTwo = { x: 23, y: 25 };
/**
 * syntex: _.isObject(value)
 *
 * Application :
    Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))
*/
const callLangIsObject = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsObject ---------------------');
    const isObjectTestDataOneRes = _.isObject('Testing Lodash');
    const isObjectTestDataTwoRes = _.isObject(isObjectTestDataOne);
    const isObjectTestDataThreeRes = _.isObject(isObjectTestDataTwo);
    console.log("\n isObjectTestDataOneRes \n", isObjectTestDataOneRes);
    console.log("\n isObjectTestDataTwoRes \n", isObjectTestDataTwoRes);
    console.log("\n isObjectTestDataThreeRes \n", isObjectTestDataThreeRes);
    res.end(JSON.stringify({ isObjectTestDataOneRes, isObjectTestDataTwoRes, isObjectTestDataThreeRes }));
});
exports.callLangIsObject = callLangIsObject;
