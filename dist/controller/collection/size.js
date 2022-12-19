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
exports.callCollectionSize = void 0;
const _ = require('lodash');
const sizeTestDataOne = [1, 2, 3, 4, 5];
const sizeTestDataTwo = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 18, active: true },
    { user: 'denis', age: 36, active: true },
    { user: 'uni', age: 18, active: true }
];
/**
 * syntex: _.size(collection)
 *
 * Application :
    Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.
*/
const callCollectionSize = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection Size ---------------------');
    const sizeTestDataOneRes = _.size(sizeTestDataOne);
    const sizeTestDataTwoRes = _.size(sizeTestDataTwo);
    const sizeTestDataThreeRes = _.size('pebbles');
    console.log('\n sizeTestDataOneRes: \n', sizeTestDataOneRes);
    console.log('\n sizeTestDataTwoRes: \n', sizeTestDataTwoRes);
    console.log('\n sizeTestDataThreeRes: \n', sizeTestDataThreeRes);
    res.end(JSON.stringify({ sizeTestDataOneRes, sizeTestDataTwoRes, sizeTestDataThreeRes }));
});
exports.callCollectionSize = callCollectionSize;
