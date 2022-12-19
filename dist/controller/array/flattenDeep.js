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
exports.callArrayarrayFlattenDeep = void 0;
const _ = require('lodash');
const flattenDeepTestDataOne = [1, [2, [3, [4]], 5]];
const flattenDeepTestDataTwo = [1, [{ a: 1 }, [{ x: 2 }], 5]];
/**
 * syntex: _.flattenDeep(array)
 *
 * Application :
  Recursively flattens array.
*/
const callArrayarrayFlattenDeep = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array FlattenDeep ---------------------');
    const flattenDeepTestDataOneRes = _.flattenDeep(flattenDeepTestDataOne);
    const flattenDeepTestDataTwoRes = _.flattenDeep(flattenDeepTestDataTwo);
    console.log('\n flattenDeepTestDataOneRes: \n', flattenDeepTestDataOneRes);
    console.log('\n flattenDeepTestDataTwoRes: \n', flattenDeepTestDataTwoRes);
    res.end(JSON.stringify({ flattenDeepTestDataOneRes, flattenDeepTestDataTwoRes }));
});
exports.callArrayarrayFlattenDeep = callArrayarrayFlattenDeep;
