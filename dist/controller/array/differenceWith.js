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
exports.callArrayDifferenceWith = void 0;
const _ = require('lodash');
const differenceWithTestDataOne = [1, 2, 3];
const differenceWithTestDataTwo = [{ a: 1 }, { b: 2 }, 6];
/**
 * _.differenceWith(array, [values], [comparator])
 *
 * Application :
    This method is like _.difference except that it accepts comparator which is invoked to compare elements
    of array to values. The order and references of result values are determined by the first array.
    The comparator is invoked with two arguments: (arrVal, othVal).

   Note:  Unlike _.pullAllWith, this method returns a new array.
*/
const callArrayDifferenceWith = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array DifferenceWith ---------------------');
    const differenceWithTestDataOneRes = _.differenceWith(differenceWithTestDataOne, [2, 4, 5], _.isEqual);
    const differenceWithTestDataTwoRes = _.differenceWith(differenceWithTestDataTwo, [{ a: 1 }, 7, 6], _.isEqual);
    console.log('\n differenceWithTestDataOneRes: \n', differenceWithTestDataOneRes);
    console.log('\n differenceWithTestDataTwoRes: \n', differenceWithTestDataTwoRes);
    res.end(JSON.stringify({ differenceWithTestDataOneRes, differenceWithTestDataTwoRes }));
});
exports.callArrayDifferenceWith = callArrayDifferenceWith;
