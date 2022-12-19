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
exports.callLangGt = void 0;
const _ = require('lodash');
/**
 * syntex: _.gt(value, other)
 *
 * Application :
    Checks if value is greater than other.
*/
const callLangGt = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang Gt ---------------------');
    const gtTestDataOneRes = _.gt(3, 1);
    const gtTestDataTwoRes = _.gt(3, 3);
    const gtTestDataThreeRes = _.gt(1, 3);
    const gtTestDataFourRes = _.gt('3', 1);
    const gtTestDataFiveRes = _.gt('1', '3');
    console.log("\n gtTestDataOneRes \n", gtTestDataOneRes);
    console.log("\n gtTestDataTwoRes \n", gtTestDataTwoRes);
    console.log("\n gtTestDataThreeRes \n", gtTestDataThreeRes);
    console.log("\n gtTestDataFourRes \n", gtTestDataFourRes);
    console.log("\n gtTestDataFiveRes \n", gtTestDataFiveRes);
    res.end(JSON.stringify({ gtTestDataOneRes, gtTestDataTwoRes, gtTestDataThreeRes, gtTestDataFourRes, gtTestDataFiveRes }));
});
exports.callLangGt = callLangGt;
