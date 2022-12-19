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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callArrayarrayPullAll = void 0;
const lodash_1 = __importDefault(require("lodash"));
const pullAllTestDataOne = [1, 2, 3, 4, 5];
const pullAllTestDataTwo = [1, 2, 3, 1, 3, 4, 1, 5];
/**
 * syntex: _.pullAll(array, values)
 *
 * Application :
   This method is like _.pull except that it accepts an array of values to remove.

   Note: Unlike _.difference, this method mutates array.
*/
const callArrayarrayPullAll = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("\n\n ------------- Array PullAll ---------------------");
    const pullAllTestDataOneRes = lodash_1.default.pullAll(pullAllTestDataOne, [3, 5]);
    const pullAllTestDataTwoRes = lodash_1.default.pullAll(pullAllTestDataTwo, [1, 5]);
    console.log("\n pullAllTestDataOneRes: \n", pullAllTestDataOneRes);
    console.log("\n pullAllTestDataTwoRes: \n", pullAllTestDataTwoRes);
    res.end(JSON.stringify({ pullAllTestDataOneRes, pullAllTestDataTwoRes }));
});
exports.callArrayarrayPullAll = callArrayarrayPullAll;
