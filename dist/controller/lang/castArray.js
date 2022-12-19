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
exports.callLangCastArray = void 0;
const _ = require('lodash');
const castArrayTestDataOne = 6.1;
const castArrayTestDataTwo = 'one';
const castArrayTestDataThree = { rating: 3, age: 18 };
/**
 * syntex: _.castArray(value)
 *
 * Application :
    Casts value as an array if it's not one.
*/
const callLangCastArray = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang CastArray ---------------------');
    const castArrayTestDataOneRes = _.castArray(castArrayTestDataOne);
    const castArrayTestDataTwoRes = _.castArray(castArrayTestDataTwo);
    const castArrayTestDataThreeRes = _.castArray(null);
    const castArrayTestDataFourRes = _.castArray(undefined);
    const castArrayTestDataFiveRes = _.castArray(castArrayTestDataThree);
    console.log('\n castArrayTestDataOneRes: \n', castArrayTestDataOneRes);
    console.log('\n castArrayTestDataTwoRes: \n', castArrayTestDataTwoRes);
    console.log('\n castArrayTestDataThreeRes: \n', castArrayTestDataThreeRes);
    console.log('\n castArrayTestDataFourRes: \n', castArrayTestDataFourRes);
    console.log('\n castArrayTestDataFiveRes: \n', castArrayTestDataFiveRes);
    res.end(JSON.stringify({ castArrayTestDataOneRes, castArrayTestDataTwoRes, castArrayTestDataThreeRes, castArrayTestDataFourRes, castArrayTestDataFiveRes }));
});
exports.callLangCastArray = callLangCastArray;
