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
exports.callArrayUnionBy = void 0;
const _ = require('lodash');
const unionByTestDataOne = [1.1, 2.2, 3.3, 4];
const unionByTestDataTwo = [{ x: 1 }, { x: 2 }, { x: 4 }];
/**
 *
 * syntex: _.unionBy([arrays], [iteratee=_.identity])
 *
 * Application :
    This method is like _.union except that it accepts iteratee which is invoked for each element
    of each arrays to generate the criterion by which uniqueness is computed. Result values are
    chosen from the first array in which the value occurs. The iteratee is invoked with one argument:
    (value).
*/
const callArrayUnionBy = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array UnionBy ---------------------');
    const unionTestDataOneRes = _.unionBy(unionByTestDataOne, [1, 2], Math.floor);
    const unionTestDataTwoRes = _.unionBy(unionByTestDataTwo, [{ 'x': 3 }, { 'x': 1 }], 'x');
    console.log('\n unionTestDataOneRes: \n', unionTestDataOneRes);
    console.log('\n unionTestDataTwoRes: \n', unionTestDataTwoRes);
    res.end(JSON.stringify({ unionTestDataOneRes, unionTestDataTwoRes }));
});
exports.callArrayUnionBy = callArrayUnionBy;
