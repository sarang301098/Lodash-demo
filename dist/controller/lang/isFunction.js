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
exports.callLangIsFunction = void 0;
const _ = require('lodash');
/**
 * syntex: _.isFunction(value)
 *
 * Application :
    Checks if value is classified as a Function object.
*/
const callLangIsFunction = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsFunction ---------------------');
    const isFunctionTestDataOneRes = _.isFunction(_);
    const isFunctionTestDataTwoRes = _.isFunction(/abc/);
    const isFunctionTestDataThreeRes = _.isFunction(() => { });
    console.log("\n isFunctionTestDataOneRes \n", isFunctionTestDataOneRes);
    console.log("\n isFunctionTestDataTwoRes \n", isFunctionTestDataTwoRes);
    console.log("\n isFunctionTestDataThreeRes \n", isFunctionTestDataThreeRes);
    res.end(JSON.stringify({ isFunctionTestDataOneRes, isFunctionTestDataTwoRes, isFunctionTestDataThreeRes }));
});
exports.callLangIsFunction = callLangIsFunction;
