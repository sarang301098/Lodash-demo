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
exports.callArrayarraySortedUniqBy = void 0;
const _ = require('lodash');
const sortedUniqByTestDataOne = [1.1, 1.2, 3.3, 3.4];
/**
 * ``` It's Only Aplicable to Sorted Array ```
 *
 * syntex: _.sortedUniqBy(array, [iteratee])
 *
 * Application :
   This method is like _.uniqBy except that it's designed and optimized for sorted arrays.
*/
const callArrayarraySortedUniqBy = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array SortedUniqBy ---------------------');
    const sortedUniqByTestDataOneRes = _.sortedUniqBy(sortedUniqByTestDataOne, Math.floor);
    console.log('\n sortedUniqByTestDataOneRes: \n', sortedUniqByTestDataOneRes);
    res.end(JSON.stringify({ sortedUniqByTestDataOneRes }));
});
exports.callArrayarraySortedUniqBy = callArrayarraySortedUniqBy;
