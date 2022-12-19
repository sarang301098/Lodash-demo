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
exports.callLangIsDate = void 0;
const moment_1 = __importDefault(require("moment"));
const _ = require('lodash');
/**
 * syntex: _.isDate(value)
 *
 * Application :
    Checks if value is classified as a Date object.
*/
const callLangIsDate = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsDate ---------------------');
    const isDateTestDataOneRes = _.isDate(new Date);
    const isDateTestDataTwoRes = _.isDate('Mon April 23 2012');
    const isDateTestDataThreeRes = _.isDate((0, moment_1.default)().format('dddd'));
    const isDateTestDataFourRes = _.isDate((0, moment_1.default)().toDate());
    console.log("\n isDateTestDataOneRes \n", isDateTestDataOneRes);
    console.log("\n isDateTestDataTwoRes \n", isDateTestDataTwoRes);
    console.log("\n isDateTestDataThreeRes \n", isDateTestDataThreeRes);
    console.log("\n isDateTestDataFourRes \n", isDateTestDataFourRes);
    res.end(JSON.stringify({ isDateTestDataOneRes, isDateTestDataTwoRes, isDateTestDataThreeRes, isDateTestDataFourRes }));
});
exports.callLangIsDate = callLangIsDate;
