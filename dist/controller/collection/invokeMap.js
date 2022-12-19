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
exports.callCollectionInvokeMap = void 0;
const _ = require('lodash');
const invokeMapTestDataOne = [[5, 1, 7], [3, 2, 1]];
const invokeMapTestDataTwo = [628, 210];
const invokeMapTestDataThree = [
    { make: 'audi', model: 'r8', year: '2012' },
    { make: 'audi', model: 'rs5', year: '2013' },
    { make: 'ford', model: 'mustang', year: '2012' },
    { make: 'ford', model: 'fusion', year: '2015' },
    { make: 'kia', model: 'optima', year: '2012' }
];
/**
 * syntex: _.invokeMap(collection, path, [args])
 *
 * Application :
   Invokes the method at path of each element in collection, returning an array of the results of each invoked method.
   Any additional arguments are provided to each invoked method.
   If path is a function, it's invoked for, and this bound to, each element in collection.
*/
const callCollectionInvokeMap = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Collection InvokeMap ---------------------');
    const invokeMapTestDataOneRes = _.invokeMap(invokeMapTestDataOne, 'sort');
    // const invokeMapTestDataTwoRes = _.invokeMap(invokeMapTestDataTwo, );
    console.log('\n invokeMapTestDataOneRes: \n', invokeMapTestDataOneRes);
    // console.log('\n invokeMapTestDataTwoRes: \n', invokeMapTestDataTwoRes);
    res.end(JSON.stringify({ invokeMapTestDataOneRes, /*invokeMapTestDataTwoRes*/ }));
});
exports.callCollectionInvokeMap = callCollectionInvokeMap;
