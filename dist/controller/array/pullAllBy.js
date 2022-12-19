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
exports.callArrayarrayPullAllBy = void 0;
const _ = require('lodash');
const pullAllByTestDataOne = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
/**
 * syntex: _.pullAllBy(array, values, [iteratee=_.identity])
 *
 * Application :
   This method is like _.pullAll except that it accepts iteratee which is invoked for each element of
   array and values to generate the criterion by which they're compared. The iteratee is invoked with
   one argument: (value).

   Note: Unlike _.differenceBy, this method mutates array.
*/
const callArrayarrayPullAllBy = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array PullAllBy ---------------------');
    const pullAllByTestDataOneRes = _.pullAllBy(pullAllByTestDataOne, [{ 'x': 1 }, { 'x': 3 }], 'x');
    console.log('\n pullAllByTestDataOneRes: \n', pullAllByTestDataOneRes);
    res.end(JSON.stringify({ pullAllByTestDataOneRes }));
});
exports.callArrayarrayPullAllBy = callArrayarrayPullAllBy;
