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
exports.callLangCloneDeep = void 0;
const _ = require('lodash');
const cloneDeepTestDataOne = { x: 23 };
const cloneDeepTestDataTwo = [{ x: 1 }, { y: 2 }];
/**
 * syntex: _.cloneDeep(value)
 *
 * Application :
    This method is like _.clone except that it recursively clones value.
*/
const callLangCloneDeep = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang CloneDeep ---------------------');
    const cloneDeepTestDataOneRes = _.cloneDeep(cloneDeepTestDataOne);
    console.log('Comparing original with' + ' shallow ', cloneDeepTestDataOne === cloneDeepTestDataOneRes);
    cloneDeepTestDataOne.x = 10;
    console.log('\n After changing original value \n');
    console.log("\n Original value \n", cloneDeepTestDataOne);
    console.log("\n Shallow Copy value \n", cloneDeepTestDataOneRes);
    const cloneDeepTestDataTwoRes = _.cloneDeep(cloneDeepTestDataTwo);
    console.log('\n\n --------------------------------------');
    console.log('Comparing original with' + ' shallow ', cloneDeepTestDataTwo === cloneDeepTestDataTwoRes);
    cloneDeepTestDataTwo[0].x = 10;
    console.log('\n After changing original value \n');
    console.log("\n Original value \n", cloneDeepTestDataTwo);
    console.log("\n Shallow Copy value \n", cloneDeepTestDataTwoRes);
    res.end(JSON.stringify({ cloneDeepTestDataOneRes, cloneDeepTestDataTwoRes }));
});
exports.callLangCloneDeep = callLangCloneDeep;
