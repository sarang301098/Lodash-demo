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
exports.callCollectionOrderBy = void 0;
const _ = require('lodash');
const orderByTestDataOne = [
    { employee: 'd', salary: 55000 },
    { employee: 'a', salary: 40000 },
    { employee: 'd', salary: 60000 },
    { employee: 'a', salary: 36000 }
];
const orderByTestDataTwo = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 18, active: true },
    { user: 'denis', age: 36, active: true },
    { user: 'uni', age: 18, active: true }
];
/**
 * syntex: _.orderBy(collection, [iteratees=[_.identity]], [orders])
 *
 * Application :
    This method is like _.sortBy except that it allows specifying the sort orders of the iteratees to sort by.
    If orders is unspecified, all values are sorted in ascending order.
    Otherwise, specify an order of "desc" for descending or "asc" for ascending sort order of corresponding values.
*/
const callCollectionOrderBy = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection OrderBy ---------------------');
    // Set order based the first argument.
    const orderByTestDataOneRes = _.orderBy(orderByTestDataTwo, ['user', 'age'], ['asc', 'desc']);
    const orderByTestDataTwoRes = _.orderBy(orderByTestDataOne, ['employee', 'salary'], ['asc', 'desc']);
    console.log('\n orderByTestDataOneRes: \n', orderByTestDataOneRes);
    console.log('\n orderByTestDataTwoRes: \n', orderByTestDataTwoRes);
    res.end(JSON.stringify({ orderByTestDataOneRes, orderByTestDataTwoRes }));
});
exports.callCollectionOrderBy = callCollectionOrderBy;
