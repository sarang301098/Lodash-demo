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
exports.callArrayarrayFlattenDepth = void 0;
const _ = require('lodash');
const flattenDepthTestDataOne = [1, [2, [3, [4]], 5]];
const flattenDepthTestDataTwo = [1, [{ a: 1 }, [{ x: 2 }], 5]];
/**
 * syntex: _.flattenDepth(array, [depth=1])
 *
 * Application :
 * Recursively flatten array up to depth times.
*/
const callArrayarrayFlattenDepth = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array FlattenDepth ---------------------');
    const flattenDepthTestDataOneRes = _.FlattenDepth(flattenDepthTestDataOne, 1);
    const flattenDepthTestDataTwoRes = _.FlattenDepth(flattenDepthTestDataTwo, 2);
    console.log('\n flattenDepthTestDataOneRes: \n', flattenDepthTestDataOneRes);
    console.log('\n flattenDepthTestDataTwoRes: \n', flattenDepthTestDataTwoRes);
    res.end(JSON.stringify({ flattenDepthTestDataOneRes, flattenDepthTestDataTwoRes }));
});
exports.callArrayarrayFlattenDepth = callArrayarrayFlattenDepth;
