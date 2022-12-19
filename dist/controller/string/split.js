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
exports.callStringSplit = void 0;
const _ = require('lodash');
const splitTestDataOne = 'Test-Lodash-Test';
/**
 * syntex: _.split([string=''], separator, [limit])
 *
 * Application :
   Splits string by separator.

    Note: This method is based on String#split.
*/
const callStringSplit = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- String Split ---------------------');
    const splitTestDataOneRes = _.split(splitTestDataOne, '-');
    const splitTestDataTwoRes = _.split(splitTestDataOne, '-', 2);
    console.log('\n splitTestDataOneRes: \n', splitTestDataOneRes);
    console.log('\n splitTestDataTwoRes: \n', splitTestDataTwoRes);
    res.end(JSON.stringify({ splitTestDataOneRes, splitTestDataTwoRes }));
});
exports.callStringSplit = callStringSplit;
