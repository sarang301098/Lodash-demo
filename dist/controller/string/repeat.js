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
exports.callStringRepeat = void 0;
const _ = require('lodash');
/**
 * syntex: _.repeat([string=''], [n=1])
 *
 * Application :
   Repeats the given string n times.
*/
const callStringRepeat = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- String Repeat ---------------------');
    const repeatTestDataOneRes = _.repeat('*', 3);
    const repeatTestDataTwoRes = _.repeat('abc', 2);
    const repeatTestDataThreeRes = _.repeat('abc', 0);
    console.log('\n repeatTestDataOneRes: \n', repeatTestDataOneRes);
    console.log('\n repeatTestDataTwoRes: \n', repeatTestDataTwoRes);
    console.log('\n repeatTestDataThreeRes: \n', repeatTestDataThreeRes);
    res.end(JSON.stringify({ repeatTestDataOneRes, repeatTestDataTwoRes, repeatTestDataThreeRes }));
});
exports.callStringRepeat = callStringRepeat;
