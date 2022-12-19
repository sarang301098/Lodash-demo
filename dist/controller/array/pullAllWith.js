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
exports.callArrayarrayPullAllWith = void 0;
const _ = require('lodash');
const pullAllWithTestDataOne = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
const pullAllWithTestDataTwo = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }, { 'x': 3, 'y': 4, 'z': 9 }];
/**
 * syntex: _.pullAllWith(array, values, [comparator])
 *
 * Application :
   This method is like _.pullAll except that it accepts comparator which is invoked to compare
   elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal).

   Note: Unlike _.differenceWith, this method mutates array.
*/
const callArrayarrayPullAllWith = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array PullAllWiths ---------------------');
    const pullAllWithTestDataOneRes = _.pullAllWith(pullAllWithTestDataOne, [{ 'x': 3, 'y': 4 }], _.isEqual);
    const pullAllWithTestDataTwoRes = _.pullAllWith(pullAllWithTestDataTwo, [{ 'x': 3, 'y': 4 }], _.isEqual);
    console.log('\n pullAllWithTestDataOneRes: \n', pullAllWithTestDataOneRes);
    console.log('\n pullAllWithTestDataTwoRes: \n', pullAllWithTestDataTwoRes);
    res.end(JSON.stringify({ pullAllWithTestDataOneRes, pullAllWithTestDataTwoRes }));
});
exports.callArrayarrayPullAllWith = callArrayarrayPullAllWith;
