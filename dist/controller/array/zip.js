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
exports.callArrayZip = void 0;
const _ = require('lodash');
/**
 * syntex: _.zip([arrays])
 *
 * Application :
   Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
   the second of which contains the second elements of the given arrays, and so on.
*/
const callArrayZip = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array Zip ---------------------');
    const zipTestDataOneRes = _.zip(['Akash', 'Amit', 'Aviral'], [1, 2, 3], ['pass', 'pass', 'fail']);
    const zipTestDataTwoRes = _.zip(['Akash', 2, 'pass'], ['Amit', 2, 'pass'], ['Aviral', 3, 'fail']);
    const zipTestDataThreeRes = _.zip(['Akash', 1, 5999], ['*', 2, 'pass'], ['!', '@', 3222]);
    console.log('\n zipTestDataOneRes: \n', zipTestDataOneRes);
    console.log('\n zipTestDataTwoRes: \n', zipTestDataTwoRes);
    console.log('\n zipTestDataThreeRes: \n', zipTestDataThreeRes);
    res.end(JSON.stringify({ zipTestDataOneRes, zipTestDataTwoRes, zipTestDataThreeRes }));
});
exports.callArrayZip = callArrayZip;
