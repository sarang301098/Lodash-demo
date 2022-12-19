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
exports.callLangConformsTo = void 0;
const _ = require('lodash');
const conformsToTestDataOne = { a: 1, b: 2 };
const conformsToTestDataTwo = [
    { 'user': 'barney', 'age': 16, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
/**
 * syntex: _.conformsTo(object, source)
 *
 * Application :
    Checks if object conforms to source by invoking the predicate properties of source with the
    corresponding property values of object.

    Note: This method is equivalent to _.conforms when source is partially applied.
*/
const callLangConformsTo = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang ConformsTo ---------------------');
    const conformToTestDataOneRes = _.conformsTo(conformsToTestDataOne, { 'b': function (n) { return n > 1; } });
    // const conformToTestDataTwoRes = _.conformsTo(conformsToTestDataTwo, { 'b': function (n: number) { return n > 1; } });
    console.log("\n conformToTestDataOneRes \n", conformToTestDataOneRes);
    res.end(JSON.stringify({ conformToTestDataOneRes, /*conformToTestDataTwoRes */ }));
});
exports.callLangConformsTo = callLangConformsTo;
