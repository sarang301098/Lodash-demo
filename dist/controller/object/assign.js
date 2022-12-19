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
exports.callObjectAssign = void 0;
const lodash_1 = require("lodash");
const assignTestDataOne = { a: 10, b: 20, c: 30 };
const assignTestDataTwo = { a: 15, d: 25, c: 36 };
const assignTestDataThree = { a: 20, e: 5, f: 66 };
/**
 * syntex: _.assign( dest_object, src_obj )
 *
 * Application :
   Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

   Note: This method mutates object and is loosely based on Object.assign.
*/
const callObjectAssign = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Object Assign ---------------------');
    const assignTestDataOneRes = (0, lodash_1.assign)(assignTestDataOne, assignTestDataTwo);
    const assignTestDatatwoRes = (0, lodash_1.assign)(assignTestDataOne, assignTestDataThree);
    const assignTestDataThreeRes = (0, lodash_1.assign)(assignTestDataOne, assignTestDataTwo, assignTestDataThree);
    console.log('\n assignTestDataOneRes: \n', assignTestDataOneRes);
    console.log('\n assignTestDatatwoRes: \n', assignTestDatatwoRes);
    console.log('\n assignTestDataThreeRes: \n', assignTestDataThreeRes);
    res.end(JSON.stringify({ assignTestDataOneRes, assignTestDatatwoRes, assignTestDataThreeRes }));
});
exports.callObjectAssign = callObjectAssign;
