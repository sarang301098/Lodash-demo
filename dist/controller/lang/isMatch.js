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
exports.callLangIsMatch = void 0;
const _ = require('lodash');
const isMatchTestDataOne = { x: 23, y: 25 };
/**
 * syntex: _.isMatch(object, source)
 *
 * Application :
    Performs a partial deep comparison between object and source to determine if object contains equivalent property values.

Note: This method is equivalent to _.matches when source is partially applied.

Partial comparisons will match empty array and empty object source values against any array or object value, respectively. See _.isEqual for a list of supported value comparisons.
*/
const callLangIsMatch = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsMatch ---------------------');
    const isMatchTestDataOneRes = _.isMatch(isMatchTestDataOne, { x: 23 });
    const isMatchTestDataTwoRes = _.isMatch(isMatchTestDataOne, { x: 2 });
    console.log("\n isMatchTestDataOneRes \n", isMatchTestDataOneRes);
    console.log("\n isMatchTestDataTwoRes \n", isMatchTestDataTwoRes);
    res.end(JSON.stringify({ isMatchTestDataOneRes, isMatchTestDataTwoRes }));
});
exports.callLangIsMatch = callLangIsMatch;
