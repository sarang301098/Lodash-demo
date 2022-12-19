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
exports.callArrayUniqWith = void 0;
const _ = require('lodash');
const uniqWithTestDataOne = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
const uniqWithTestDataTwo = [2.2, 3.2, 4.2, 3.2, 5.2, 4.2];
const uniqWithTestDataThree = ['p', 'q', 'r', 'u', 's', 't', 'r', 'u'];
/**
 *
 * syntex: _.uniqWith(array, [comparator])
 *
 * Application :
    This method is like _.uniq except that it accepts comparator which is invoked to compare elements of array.
    The order of result values is determined by the order they occur in the array.The comparator is invoked with two arguments: (arrVal, othVal).
*/
const callArrayUniqWith = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array UniqWith ---------------------');
    const uniqWithTestDataOneRes = _.uniqWith(uniqWithTestDataOne, _.isEqual);
    const uniqWithTestDataTwoRes = _.uniqWith(uniqWithTestDataTwo, _.isEqual);
    const uniqWithTestDataThreeRes = _.uniqWith(uniqWithTestDataThree, _.isEqual);
    console.log('\n uniqWithTestDataOneRes: \n', uniqWithTestDataOneRes);
    console.log('\n uniqWithTestDataTwoRes: \n', uniqWithTestDataTwoRes);
    console.log('\n uniqWithTestDataThreeRes: \n', uniqWithTestDataThreeRes);
    res.end(JSON.stringify({ uniqWithTestDataOneRes, uniqWithTestDataTwoRes, uniqWithTestDataThreeRes }));
});
exports.callArrayUniqWith = callArrayUniqWith;
