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
exports.callStringPadStart = void 0;
const _ = require('lodash');
/**
 * syntex: _.padEnd([string=''], [length=0], [chars=' '])
 *
 * Application :
   Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.
*/
const callStringPadStart = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- String PadStart ---------------------');
    const padStartTestDataOneRes = _.pad('abc', 8);
    const padStartTestDataTwoRes = _.pad('abc', 8, '_-');
    const padStartTestDataThreeRes = _.pad('abc', 3);
    console.log('\n padStartTestDataOneRes: \n', padStartTestDataOneRes);
    console.log('\n padStartTestDataTwoRes: \n', padStartTestDataTwoRes);
    console.log('\n padStartTestDataThreeRes: \n', padStartTestDataThreeRes);
    res.end(JSON.stringify({ padStartTestDataOneRes, padStartTestDataTwoRes, padStartTestDataThreeRes }));
});
exports.callStringPadStart = callStringPadStart;
