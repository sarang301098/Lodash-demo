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
exports.callStringParseInt = void 0;
const _ = require('lodash');
/**
 * syntex: _.parseInt(string, [radix=10])
 *
 * Application :
   Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used unless value is a hexadecimal, in which case a radix of 16 is used.
*/
const callStringParseInt = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- String ParseInt ---------------------');
    const parseIntTestDataOneRes = _.parseInt('08');
    const parseIntTestDataTwoRes = _.map(['6', '08', '10'], _.parseInt);
    console.log('\n parseIntTestDataOneRes: \n', parseIntTestDataOneRes);
    console.log('\n parseIntTestDataTwoRes: \n', parseIntTestDataTwoRes);
    res.end(JSON.stringify({ parseIntTestDataOneRes, parseIntTestDataTwoRes }));
});
exports.callStringParseInt = callStringParseInt;
