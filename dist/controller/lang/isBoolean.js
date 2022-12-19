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
exports.callLangIsBoolean = void 0;
const _ = require('lodash');
/**
 * syntex: _.isBoolean(value)
 *
 * Application :
    Checks if value is classified as a boolean primitive or object.
*/
const callLangIsBoolean = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsBoolean ---------------------');
    const isBooleanTestDataOneRes = _.isBoolean(false);
    const isBooleanTestDataTwoRes = _.isBoolean(null);
    const isBooleanTestDataThreeRes = _.isBoolean(1);
    const isBooleanTestDataFourRes = _.isBoolean('1');
    console.log("\n isBooleanTestDataOneRes \n", isBooleanTestDataOneRes);
    console.log("\n isBooleanTestDataTwoRes \n", isBooleanTestDataTwoRes);
    console.log("\n isBooleanTestDataThreeRes \n", isBooleanTestDataThreeRes);
    console.log("\n isBooleanTestDataFourRes \n", isBooleanTestDataFourRes);
    res.end(JSON.stringify({ isBooleanTestDataOneRes, isBooleanTestDataTwoRes, isBooleanTestDataThreeRes, isBooleanTestDataFourRes }));
});
exports.callLangIsBoolean = callLangIsBoolean;
