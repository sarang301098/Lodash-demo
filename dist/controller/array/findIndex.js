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
exports.callArrayarrayFindIndex = void 0;
const _ = require('lodash');
const findIndexTestDataOne = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];
/**
 * syntex: _.findIndex(array, [predicate=_.identity], [fromIndex=0])
 *
 * Application :
 * This method is like _.find except that it returns the index of the first element
   predicate returns truthy for instead of the element itself.
*/
// Same usage of findLastIndex
const callArrayarrayFindIndex = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array FindIndex ---------------------');
    const findIndexTestDataOneRes = _.findIndex(findIndexTestDataOne, function (o) { return o.user == 'barney'; });
    const findIndexTestDataTwoRes = _.findIndex(findIndexTestDataOne, { 'user': 'fred', 'active': false });
    const findIndexTestDataThreeRes = _.findIndex(findIndexTestDataOne, ['active', false]);
    const findIndexTestDataFourRes = _.findIndex(findIndexTestDataOne, 'active');
    console.log('\n findIndexTestDataOneRes: \n', findIndexTestDataOneRes);
    console.log('\n findIndexTestDataTwoRes: \n', findIndexTestDataTwoRes);
    console.log('\n findIndexTestDataThreeRes: \n', findIndexTestDataThreeRes);
    console.log('\n findIndexTestDataFourRes: \n', findIndexTestDataFourRes);
    res.end(JSON.stringify({ findIndexTestDataOneRes, findIndexTestDataTwoRes, findIndexTestDataThreeRes, findIndexTestDataFourRes }));
});
exports.callArrayarrayFindIndex = callArrayarrayFindIndex;
