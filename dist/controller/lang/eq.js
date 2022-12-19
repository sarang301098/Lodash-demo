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
exports.callLangEq = void 0;
const _ = require('lodash');
const eqTestDataOne = { a: 1, b: 2 };
const eqTestDataTwo = [
    { 'user': 'barney', 'age': 16, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
/**
 * syntex: _.eq(value, other)
 *
 * Application :
    Performs a SameValueZero comparison between two values to determine if they are equivalent.
*/
const callLangEq = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang Eq ---------------------');
    const eqTestDataOneRes = _.eq(eqTestDataOne, eqTestDataOne);
    const eqTestDataTwoRes = _.eq(eqTestDataTwo, eqTestDataTwo);
    const eqTestDataThreeRes = _.eq(null, null);
    const eqTestDataFourRes = _.eq('a', Object('a'));
    const eqTestDataFiveRes = _.eq('a', 'a');
    console.log("\n eqTestDataOneRes \n", eqTestDataOneRes);
    console.log("\n eqTestDataTwoRes \n", eqTestDataTwoRes);
    console.log("\n eqTestDataThreeRes \n", eqTestDataThreeRes);
    console.log("\n eqTestDataFourRes \n", eqTestDataFourRes);
    console.log("\n eqTestDataFiveRes \n", eqTestDataFiveRes);
    res.end(JSON.stringify({ eqTestDataOneRes, eqTestDataTwoRes, eqTestDataThreeRes, eqTestDataFourRes, eqTestDataFiveRes }));
});
exports.callLangEq = callLangEq;
