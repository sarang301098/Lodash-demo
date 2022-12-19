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
exports.callCollectionGroupBy = void 0;
const _ = require('lodash');
const groupByTestDataOne = [1.1, 2.2, 1.8, 2.1, 1];
const groupByTestDataTwo = [
    { model: 'r8', year: '2012' },
    { make: 'audi', model: 'rs5', year: '2013' },
    { make: 'ford', model: 'mustang', year: '2012' },
    { make: 'ford', model: 'fusion', year: '2015' },
    { make: 'kia', model: 'optima', year: '2012' }
];
/**
 * syntex: _.groupBy(collection, [iteratee=_.identity])
 *
 * Application :
   Creates an object composed of keys generated from the results of running each element
   of collection thru iteratee. The order of grouped values is determined by the order they occur in collection.
   The corresponding value of each key is an array of elements responsible for generating the key.
   The iteratee is invoked with one argument: (value).
*/
const callCollectionGroupBy = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection GroupBy ---------------------');
    const groupByTestDataOneRes = _.groupBy(groupByTestDataOne, Math.floor);
    const groupByTestDataTwoRes = _.groupBy(groupByTestDataTwo, function group(n) { return n.make; });
    console.log('\n groupByTestDataOneRes: \n', groupByTestDataOneRes);
    console.log('\n groupByTestDataTwoRes: \n', groupByTestDataTwoRes);
    res.end(JSON.stringify({ groupByTestDataOneRes, groupByTestDataTwoRes }));
});
exports.callCollectionGroupBy = callCollectionGroupBy;
