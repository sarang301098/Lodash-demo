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
exports.callLangIsArrayLikeObject = void 0;
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
 * syntex: _.isArrayLikeObject(value)
 *
 * Application :
    This method is like _.isArrayLike except that it also checks if value is an object.
*/
const callLangIsArrayLikeObject = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsArrayLikeObject ---------------------');
    const isArrayLikeObjectTestDataOneRes = _.isArrayLike(isArrayLikeTestDataOne);
    const isArrayLikeObjectTestDataTwoRes = _.isArrayLike(isArrayLikeTestDataTwo);
    const isArrayLikeObjectTestDataThreeRes = _.isArrayLike(isArrayLikeTestDataThree);
    const isArrayLikeObjectTestDataFourRes = _.isArrayLike(isArrayLikeTestDataFour);
    const isArrayLikeObjectTestDataFiveRes = _.isArrayLike(isArrayLikeTestDataFive);
    console.log("\n isArrayLikeObjectTestDataOneRes \n", isArrayLikeObjectTestDataOneRes);
    console.log("\n isArrayLikeObjectTestDataTwoRes \n", isArrayLikeObjectTestDataTwoRes);
    console.log("\n isArrayLikeObjectTestDataThreeRes \n", isArrayLikeObjectTestDataThreeRes);
    console.log("\n isArrayLikeObjectTestDataFourRes \n", isArrayLikeObjectTestDataFourRes);
    console.log("\n isArrayLikeObjectTestDataFiveRes \n", isArrayLikeObjectTestDataFiveRes);
    res.end(JSON.stringify({ isArrayLikeObjectTestDataOneRes, isArrayLikeObjectTestDataTwoRes, isArrayLikeObjectTestDataThreeRes, isArrayLikeObjectTestDataFourRes, isArrayLikeObjectTestDataFiveRes }));
});
exports.callLangIsArrayLikeObject = callLangIsArrayLikeObject;
