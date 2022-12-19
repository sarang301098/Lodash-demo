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
exports.callArrayIntersectionWith = void 0;
const _ = require('lodash');
const intersectionWithTestDataOne = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const intersectionWithTestDataTwo = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
/**
 * _.intersectionWith([arrays], [comparator])
 *
 * Application :
    This method is like _.intersection except that it accepts comparator which is invoked
    to compare elements of arrays. The order and references of result values are determined
    by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
*/
const callArrayIntersectionWith = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array IntersectionWith ---------------------');
    const intersectionWithTestDataOneRes = _.intersectionWith(intersectionWithTestDataOne, intersectionWithTestDataTwo, _.isEqual);
    console.log('\n intersectionWithTestDataOneRes: \n', intersectionWithTestDataOneRes);
    res.end(JSON.stringify({ intersectionWithTestDataOneRes }));
});
exports.callArrayIntersectionWith = callArrayIntersectionWith;
