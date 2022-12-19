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
exports.callStringTrim = void 0;
const _ = require('lodash');
/**
 * syntex: _.trim([string=''], [chars=whitespace])
 *
 * Application :
   Removes leading and trailing whitespace or specified characters from string.
*/
const callStringTrim = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- String Trim ---------------------');
    const trimTestDataOneRes = _.trim('  abc  ');
    const trimTestDataTwoRes = _.trim('-_-abc-_-', '_-');
    const trimTestDataThreeRes = _.map(['  foo  ', '  bar  '], _.trim);
    console.log('\n trimTestDataOneRes: \n', trimTestDataOneRes);
    console.log('\n trimTestDataTwoRes: \n', trimTestDataTwoRes);
    console.log('\n trimTestDataThreeRes: \n', trimTestDataThreeRes);
    res.end(JSON.stringify({ trimTestDataOneRes, trimTestDataTwoRes, trimTestDataThreeRes }));
});
exports.callStringTrim = callStringTrim;
