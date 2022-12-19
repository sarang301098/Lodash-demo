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
exports.callStringPad = void 0;
const _ = require('lodash');
/**
 * syntex: _.pad([string=''], [length=0], [chars=' '])
 *
 * Application :
   Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
*/
const callStringPad = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- String Pad ---------------------');
    const padTestDataOneRes = _.pad('abc', 8);
    const padTestDataTwoRes = _.pad('abc', 8, '_-');
    const padTestDataThreeRes = _.pad('abc', 3);
    console.log('\n padTestDataOneRes: \n', padTestDataOneRes);
    console.log('\n padTestDataTwoRes: \n', padTestDataTwoRes);
    console.log('\n padTestDataThreeRes: \n', padTestDataThreeRes);
    res.end(JSON.stringify({ padTestDataOneRes, padTestDataTwoRes, padTestDataThreeRes }));
});
exports.callStringPad = callStringPad;
