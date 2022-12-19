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
exports.callCollectionCountBy = void 0;
const _ = require('lodash');
const countByTestDataOne = [6.1, 4.2, 6.3];
const countByTestDataTwo = ['one', 'two', 'three'];
const countByTestDataThree = [{ rating: 3, age: 18 }, { rating: 5, age: 1 }, { rating: 3, age: 18 }];
/**
 * syntex: _.countBy(collection, [iteratee=_.identity])
 *
 * Application :
   Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
   The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).
*/
const callCollectionCountBy = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection CountBy ---------------------');
    const countByTestDataOneRes = _.countBy(countByTestDataOne, Math.floor);
    const countByTestDataTwoRes = _.countBy(countByTestDataTwo, 'length');
    const countByTestDataThreeRes = _.countBy(countByTestDataThree, 'rating');
    console.log('\n countByTestDataOneRes: \n', countByTestDataOneRes);
    console.log('\n countByTestDataTwoRes: \n', countByTestDataTwoRes);
    console.log('\n countByTestDataThreeRes: \n', countByTestDataThreeRes);
    res.end(JSON.stringify({ countByTestDataOneRes, countByTestDataTwoRes, countByTestDataThreeRes }));
});
exports.callCollectionCountBy = callCollectionCountBy;
