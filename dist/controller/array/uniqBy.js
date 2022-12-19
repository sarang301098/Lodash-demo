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
exports.callArrayUniqBy = void 0;
const _ = require('lodash');
const uniqByTestDataOne = [2.1, 1.2, 2.3];
const uniqByTestDataTwo = [{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }];
/**
 *
 * syntex: _.uniqBy(array, [iteratee=_.identity])
 *
 * Application :
    This method is like _.uniq except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed.
    The order of result values is determined by the order they occur in the array. The iteratee is invoked with one argument:
*/
const callArrayUniqBy = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array UniqBy ---------------------');
    const uniqByTestDataOneRes = _.uniqBy(uniqByTestDataOne, Math.floor);
    const uniqByTestDataTwoRes = _.uniqBy(uniqByTestDataTwo, 'x');
    console.log('\n uniqByTestDataOneRes: \n', uniqByTestDataOneRes);
    console.log('\n uniqByTestDataTwoRes: \n', uniqByTestDataTwoRes);
    res.end(JSON.stringify({ uniqByTestDataOneRes, uniqByTestDataTwoRes }));
});
exports.callArrayUniqBy = callArrayUniqBy;
