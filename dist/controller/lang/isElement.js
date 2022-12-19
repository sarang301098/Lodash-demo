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
exports.callLangIsElement = void 0;
const _ = require('lodash');
/**
 * syntex: _.isElement(value)
 *
 * Application :
    Checks if value is likely a DOM element.
*/
const callLangIsElement = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsElement ---------------------');
    const isElementTestDataOneRes = _.isElement( /*document.body*/);
    const isElementTestDataTwoRes = _.isElement('<body>');
    console.log("\n isElementTestDataOneRes \n", isElementTestDataOneRes);
    console.log("\n isElementTestDataTwoRes \n", isElementTestDataTwoRes);
    res.end(JSON.stringify({ isElementTestDataOneRes, isElementTestDataTwoRes }));
});
exports.callLangIsElement = callLangIsElement;
