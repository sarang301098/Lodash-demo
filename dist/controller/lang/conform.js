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
exports.callLangConforms = void 0;
const _ = require('lodash');
const conformsTestDataOne = { a: 1, b: 2 };
const conformsTestDataTwo = [
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
const callLangConforms = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang Conforms ---------------------');
    const conformTestDataOneRes = _.filter(conformsTestDataTwo, _.conforms({ 'age': function (n) { return n > 1; } }));
    console.log("\n conformToTestDataOneRes \n", conformTestDataOneRes);
    res.end(JSON.stringify({ conformTestDataOneRes, /*conformToTestDataTwoRes */ }));
});
exports.callLangConforms = callLangConforms;
