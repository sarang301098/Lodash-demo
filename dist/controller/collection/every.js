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
exports.callCollectionEvery = void 0;
const _ = require('lodash');
const everyTestDataOne = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': false }
];
;
/**
 * syntex: _.every(collection, [predicate=_.identity])
 *
 * Application :
   Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.
   The predicate is invoked with three arguments: (value, index|key, collection).

   Note: This method returns true for empty collections because everything is true of elements of empty collections.
*/
const callCollectionEvery = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection Every ---------------------');
    const everyTestDataOneRes = _.every(everyTestDataOne, { 'user': 'barney', 'active': false });
    const everyTestDataTwoRes = _.every(everyTestDataOne, ['active', false]);
    const everyTestDataThreeRes = _.every(everyTestDataOne, 'active');
    console.log('\n everyTestDataOneRes: \n', everyTestDataOneRes);
    console.log('\n everyTestDataTwoRes: \n', everyTestDataTwoRes);
    console.log('\n everyTestDataThreeRes: \n', everyTestDataThreeRes);
    res.end(JSON.stringify({ everyTestDataOneRes, everyTestDataTwoRes, everyTestDataThreeRes }));
});
exports.callCollectionEvery = callCollectionEvery;
