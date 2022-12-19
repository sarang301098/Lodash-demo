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
exports.callArrayarrayFlatten = void 0;
const _ = require('lodash');
const flattenTestDataOne = [1, [2, [3, [4]], 5]];
const flattenTestDataTwo = [1, [{ a: 1 }, { x: 2 }, 5]];
/**
 * syntex: _.flatten(array)
 *
 * Application :
 * Flattens array a single level deep.
*/
const callArrayarrayFlatten = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array Flatten ---------------------');
    const flattenTestDataOneRes = _.flatten(flattenTestDataOne);
    const flattenTestDataTwoRes = _.flatten(flattenTestDataTwo);
    console.log('\n flattenTestDataOneRes: \n', flattenTestDataOneRes);
    console.log('\n flattenTestDataTwoRes: \n', flattenTestDataTwoRes);
    res.end(JSON.stringify({ flattenTestDataOneRes, flattenTestDataTwoRes }));
});
exports.callArrayarrayFlatten = callArrayarrayFlatten;
