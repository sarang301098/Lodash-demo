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
exports.callCollectionPartition = void 0;
const _ = require('lodash');
const partitionTestDataOne = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 18, active: true },
    { user: 'denis', age: 36, active: true },
    { user: 'uni', age: 18, active: true }
];
/**
 * syntex: _.partition(collection, [predicate=_.identity])
 *
 * Application :
    Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
    the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).
*/
const callCollectionPartition = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection Partition ---------------------');
    const partitionTestDataOneRes = _.partition(partitionTestDataOne, function activeFound(o) { return o.active; });
    const partitionTestDataTwoRes = _.partition(partitionTestDataOne, ['active', false]);
    const partitionTestDataThreeRes = _.partition(partitionTestDataOne, 'active');
    const partitionTestDataFourRes = _.partition(partitionTestDataOne, function ageFound(o) { return o.age > 18; });
    console.log('\n partitionTestDataOneRes: \n', partitionTestDataOneRes);
    console.log('\n partitionTestDataTwoRes: \n', partitionTestDataTwoRes);
    console.log('\n partitionTestDataThreeRes: \n', partitionTestDataThreeRes);
    console.log('\n partitionTestDataFourRes: \n', partitionTestDataFourRes);
    res.end(JSON.stringify({ partitionTestDataOneRes, partitionTestDataTwoRes, partitionTestDataThreeRes, partitionTestDataFourRes }));
});
exports.callCollectionPartition = callCollectionPartition;
