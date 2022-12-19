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
exports.callCollectionFlatMapDepth = void 0;
const _ = require('lodash');
const flatMapDepthTestDataOne = [1, 2, 3, 4];
const flatMapDepthTestDataTwo = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
/**
 * syntex: _.flatMapDepth(collection, [iteratee=_.identity], [depth=1])
 *
 * Application :
   This method is like _.flatMap except that it recursively flattens the mapped results up to depth times.
*/
const callCollectionFlatMapDepth = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection FlatMapDepth ---------------------');
    const flatMapDepthTestDataOneRes = _.flatMapDepth(flatMapDepthTestDataOne, function duplicate(n) { return [[[n, n]]]; }, 2);
    const flatMapDepthTestDataTwoRes = _.flatMapDepth(flatMapDepthTestDataTwo, function duplicate(n) { return [[[n, n]]]; }, 2);
    console.log('\n flatMapDepthTestDataOneRes: \n', flatMapDepthTestDataOneRes);
    console.log('\n flatMapDepthTestDataTwoRes: \n', flatMapDepthTestDataTwoRes);
    res.end(JSON.stringify({ flatMapDepthTestDataOneRes, flatMapDepthTestDataTwoRes }));
});
exports.callCollectionFlatMapDepth = callCollectionFlatMapDepth;
