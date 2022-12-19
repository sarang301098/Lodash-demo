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
exports.callLangIsMap = void 0;
const _ = require('lodash');
/**
 * syntex: _.isMap(value)
 *
 * Application :
    Checks if value is classified as a Map object.
*/
const callLangIsMap = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsMap ---------------------');
    const isMapTestDataOneRes = _.isMap(new Map);
    ;
    const isMapTestDataTwoRes = _.isMap(new WeakMap);
    console.log("\n isMapTestDataOneRes \n", isMapTestDataOneRes);
    console.log("\n isMapTestDataTwoRes \n", isMapTestDataTwoRes);
    res.end(JSON.stringify({ isMapTestDataOneRes, isMapTestDataTwoRes }));
});
exports.callLangIsMap = callLangIsMap;
