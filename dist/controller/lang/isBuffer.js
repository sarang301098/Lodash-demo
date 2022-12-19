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
exports.callLangIsBuffer = void 0;
const _ = require('lodash');
/**
 * syntex: _.isBuffer(value)
 *
 * Application :
    Checks if value is a buffer.
*/
const callLangIsBuffer = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Lang IsBuffer ---------------------');
    const isBufferTestDataOneRes = _.isBuffer(new Uint8Array(2));
    const isBufferTestDataTwoRes = _.isBuffer(new Buffer(2));
    console.log("\n isBufferTestDataOneRes \n", isBufferTestDataOneRes);
    console.log("\n isBufferTestDataTwoRes \n", isBufferTestDataTwoRes);
    res.end(JSON.stringify({ isBufferTestDataOneRes, isBufferTestDataTwoRes }));
});
exports.callLangIsBuffer = callLangIsBuffer;
