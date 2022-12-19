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
exports.callLangIsEmpty = void 0;
const _ = require('lodash');
/**
 * syntex: _.isEmpty(value)
 *
 * Application :
    Checks if value is an empty object, collection, map, or set.

Objects are considered empty if they have no own enumerable string keyed properties.

Array-like values such as arguments objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty if they have a size of 0.
*/
const callLangIsEmpty = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsEmpty ---------------------');
    const isEmptyTestDataOneRes = _.isEmpty(null);
    const isEmptyTestDataTwoRes = _.isEmpty(true);
    const isEmptyTestDataThreeRes = _.isEmpty({ 'a': 1 });
    const isEmptyTestDataFourRes = _.isEmpty([1, 2, 3]);
    console.log("\n isEmptyTestDataOneRes \n", isEmptyTestDataOneRes);
    console.log("\n isEmptyTestDataTwoRes \n", isEmptyTestDataTwoRes);
    console.log("\n isEmptyTestDataThreeRes \n", isEmptyTestDataThreeRes);
    console.log("\n isEmptyTestDataFourRes \n", isEmptyTestDataFourRes);
    res.end(JSON.stringify({ isEmptyTestDataOneRes, isEmptyTestDataTwoRes, isEmptyTestDataThreeRes, isEmptyTestDataFourRes }));
});
exports.callLangIsEmpty = callLangIsEmpty;
