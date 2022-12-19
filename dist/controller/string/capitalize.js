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
exports.callStringCapitalize = void 0;
const _ = require('lodash');
/**
 * syntex: _.capitalize([string=''])
 *
 * Application :
   Converts the first character of string to upper case and the remaining to lower case.
*/
const callStringCapitalize = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- String Capitalize ---------------------');
    const capitalizeTestDataOneRes = _.capitalize('FRED');
    console.log('\n capitalizeTestDataOneRes: \n', capitalizeTestDataOneRes);
    res.end(JSON.stringify({ capitalizeTestDataOneRes }));
});
exports.callStringCapitalize = callStringCapitalize;
