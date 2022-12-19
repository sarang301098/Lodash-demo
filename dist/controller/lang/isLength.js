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
exports.callLangIsLength = void 0;
const _ = require('lodash');
/**
 * syntex: _.isLength(value)
 *
 * Application :
    Checks if value is a valid array-like length.

    Note: This method is loosely based on ToLength.
*/
const callLangIsLength = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsLength ---------------------');
    const isLengthTestDataOneRes = _.isLength(3);
    const isLengthTestDataTwoRes = _.isLength(Number.MIN_VALUE);
    const isLengthTestDataThreeRes = _.isLength(Infinity);
    console.log("\n isLengthTestDataOneRes \n", isLengthTestDataOneRes);
    console.log("\n isLengthTestDataTwoRes \n", isLengthTestDataTwoRes);
    console.log("\n isLengthTestDataThreeRes \n", isLengthTestDataThreeRes);
    res.end(JSON.stringify({ isLengthTestDataOneRes, isLengthTestDataTwoRes, isLengthTestDataThreeRes }));
});
exports.callLangIsLength = callLangIsLength;
