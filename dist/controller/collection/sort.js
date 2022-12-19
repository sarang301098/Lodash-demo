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
exports.callCollectionSortBy = void 0;
const _ = require('lodash');
const sortTestDataOne = [
    { employee: 'd', salary: 55000 },
    { employee: 'a', salary: 40000 },
    { employee: 'd', salary: 60000 },
    { employee: 'a', salary: 36000 }
];
const sortTestDataTwo = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 18, active: true },
    { user: 'denis', age: 36, active: true },
    { user: 'uni', age: 18, active: true }
];
/**
 * syntex: _.sortBy(collection, [iteratees=[_.identity]])
 *
 * Application :
   Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee.
   This method performs a stable sort, that is, it preserves the original sort order of equal elements.
   The iteratees are invoked with one argument: (value).
*/
const callCollectionSortBy = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection SortBy ---------------------');
    const sortTestDataOneRes = _.sortBy(sortTestDataTwo, [function sortByName(o) { return o.user; }]);
    const sortTestDataTwoRes = _.sortBy(sortTestDataOne, ['employee', 'salary'], ['asc', 'desc']);
    console.log('\n sortTestDataOneRes: \n', sortTestDataOneRes);
    console.log('\n sortTestDataTwoRes: \n', sortTestDataTwoRes);
    res.end(JSON.stringify({ sortTestDataOneRes, sortTestDataTwoRes }));
});
exports.callCollectionSortBy = callCollectionSortBy;
