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
exports.callCollectionFlatMapDeep = void 0;
const _ = require('lodash');
const flatMapDeepTestDataOne = [1, 2, 3, 4];
const flatMapDeepTestDataTwo = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
/**
 * syntex: _.flatMapDepth(collection, [iteratee=_.identity], [depth=1])
 *
 * Application :
   This method is like _.flatMap except that it recursively flattens the mapped results.
*/
const callCollectionFlatMapDeep = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection FlatMapDeep ---------------------');
    const flatMapDeepTestDataOneRes = _.flatMapDeep(flatMapDeepTestDataOne, function duplicate(n) { return [[[n, n]]]; });
    const flatMapDeepTestDataTwoRes = _.flatMapDeep(flatMapDeepTestDataTwo, function duplicate(n) { return [[[n, n]]]; });
    console.log('\n flatMapDeepTestDataOneRes: \n', flatMapDeepTestDataOneRes);
    console.log('\n flatMapDeepTestDataTwoRes: \n', flatMapDeepTestDataTwoRes);
    res.end(JSON.stringify({ flatMapDeepTestDataOneRes, flatMapDeepTestDataTwoRes }));
});
exports.callCollectionFlatMapDeep = callCollectionFlatMapDeep;
