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
exports.callArrayarrayUnion = void 0;
const _ = require('lodash');
const unionTestDataOne = [1, 2, 3, 4];
/**
 *
 * syntex: _.union([arrays])
 *
 * Application :
   Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
*/
const callArrayarrayUnion = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array Union ---------------------');
    const unionTestDataOneRes = _.union(unionTestDataOne, [3, 4, 5]);
    console.log('\n unionTestDataOneRes: \n', unionTestDataOneRes);
    res.end(JSON.stringify({ unionTestDataOneRes }));
});
exports.callArrayarrayUnion = callArrayarrayUnion;
