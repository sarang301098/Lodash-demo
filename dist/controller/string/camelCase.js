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
exports.callStringCamleCase = void 0;
const _ = require('lodash');
/**
 * syntex: _.camelCase([string=''])
 *
 * Application :
   Converts string to camel case.
*/
const callStringCamleCase = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- String CamleCase ---------------------');
    const camleCaseTestDataOneRes = _.camelCase('Foo Bar');
    ;
    const camleCaseTestDataTwoRes = _.camelCase('--foo-bar--');
    ;
    const camleCaseTestDataThreeRes = _.camelCase('__FOO_BAR__');
    ;
    console.log('\n camleCaseTestDataOneRes: \n', camleCaseTestDataOneRes);
    console.log('\n camleCaseTestDataTwoRes: \n', camleCaseTestDataTwoRes);
    console.log('\n camleCaseTestDataThreeRes: \n', camleCaseTestDataThreeRes);
    res.end(JSON.stringify({ camleCaseTestDataOneRes, camleCaseTestDataTwoRes, camleCaseTestDataThreeRes }));
});
exports.callStringCamleCase = callStringCamleCase;
