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
exports.callLangIsArrayLike = void 0;
const _ = require('lodash');
const isArrayLikeTestDataOne = [1, 2, 3];
const isArrayLikeTestDataTwo = 'Testing Lodash';
const isArrayLikeTestDataThree = { dir: 'left', code: 97 };
const isArrayLikeTestDataFour = [
    { dir: 'left', code: 97 },
    { dir: 'right', code: 100 }
];
const isArrayLikeTestDataFive = () => {
    console.log('called isArrayLikeTestDataFive');
};
/**
 * syntex: _.isArrayLike(value)
 *
 * Application :
    Checks if value is array-like. A value is considered array-like if it's not a function and has a value.length that's an integer greater than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER.
*/
const callLangIsArrayLike = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsArrayLike ---------------------');
    const isArrayLikeTestDataOneRes = _.isArrayLike(isArrayLikeTestDataOne);
    const isArrayLikeTestDataTwoRes = _.isArrayLike(isArrayLikeTestDataTwo);
    const isArrayLikeTestDataThreeRes = _.isArrayLike(isArrayLikeTestDataThree);
    const isArrayLikeTestDataFourRes = _.isArrayLike(isArrayLikeTestDataFour);
    const isArrayLikeTestDataFiveRes = _.isArrayLike(isArrayLikeTestDataFive);
    console.log("\n isArrayLikeTestDataOneRes \n", isArrayLikeTestDataOneRes);
    console.log("\n isArrayLikeTestDataTwoRes \n", isArrayLikeTestDataTwoRes);
    console.log("\n isArrayLikeTestDataThreeRes \n", isArrayLikeTestDataThreeRes);
    console.log("\n isArrayLikeTestDataFourRes \n", isArrayLikeTestDataFourRes);
    console.log("\n isArrayLikeTestDataFiveRes \n", isArrayLikeTestDataFiveRes);
    res.end(JSON.stringify({ isArrayLikeTestDataOneRes, isArrayLikeTestDataTwoRes, isArrayLikeTestDataThreeRes, isArrayLikeTestDataFourRes, isArrayLikeTestDataFiveRes }));
});
exports.callLangIsArrayLike = callLangIsArrayLike;
