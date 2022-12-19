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
exports.callCollectionFlatMap = void 0;
const _ = require('lodash');
const flatMapTestDataOne = [1, 2, 3, 4];
const flatMapTestDataTwo = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
/**
 * syntex: _.flatMap(collection, [iteratee=_.identity])
 *
 * Application :
    Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results.
    The iteratee is invoked with three arguments: (value, index|key, collection).
*/
const callCollectionFlatMap = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection FlatMap ---------------------');
    const flatMapTestDataOneRes = _.flatMap(flatMapTestDataOne, function duplicate(n) { return [n, n]; });
    const flatMapTestDataTwoRes = _.flatMap(flatMapTestDataTwo, function duplicate(n) { return [n, n]; });
    console.log('\n flatMapTestDataOneRes: \n', flatMapTestDataOneRes);
    console.log('\n flatMapTestDataTwoRes: \n', flatMapTestDataTwoRes);
    res.end(JSON.stringify({ flatMapTestDataOneRes, flatMapTestDataTwoRes }));
});
exports.callCollectionFlatMap = callCollectionFlatMap;
