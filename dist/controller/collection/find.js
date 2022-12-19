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
exports.callCollectionFind = void 0;
const _ = require('lodash');
const findTestDataOne = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];
const findTestDataTwo = [1, 2, 7, 10, 13, 15];
/**
 * syntex: _.find(collection, predicate, fromIndex)
 *
 * Application :
    Iterates over elements of collection, returning the first element predicate returns truthy for.
    The predicate is invoked with three arguments: (value, index|key, collection).
*/
const callCollectionFind = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection Find ---------------------');
    const findTestDataOneRes = _.find(findTestDataOne, function (o) { return !o.active; });
    const findTestDataTwoRes = _.find(findTestDataTwo, function (n) { if (n < 0) {
        return true;
    } });
    const findTestDataThreeRes = _.find(findTestDataOne, ['active', false]);
    const findTestDataFourRes = _.find(findTestDataOne, 'active');
    console.log('\n findTestDataOneRes: \n', findTestDataOneRes);
    console.log('\n findTestDataTwoRes: \n', findTestDataTwoRes);
    console.log('\n findTestDataThreeRes: \n', findTestDataThreeRes);
    console.log('\n findTestDataFourRes: \n', findTestDataFourRes);
    res.end(JSON.stringify({ findTestDataOneRes, findTestDataTwoRes, findTestDataThreeRes, findTestDataFourRes }));
});
exports.callCollectionFind = callCollectionFind;
