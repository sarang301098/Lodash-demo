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
exports.callMathFloor = void 0;
const _ = require('lodash');
/**
 * syntex: _.floor(number, [precision=0])
 *
 * Application :
  Computes number rounded down to precision.
*/
const callMathFloor = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Math Floor ---------------------');
    const floorTestDataOneRes = _.floor(4.006);
    const floorTestDataTwoRes = _.floor(0.046, 2);
    const floorTestDataThreeRes = _.floor(4060, -2);
    console.log('\n floorTestDataOneRes: \n', floorTestDataOneRes);
    console.log('\n floorTestDataTwoRes: \n', floorTestDataTwoRes);
    console.log('\n floorTestDataThreeRes: \n', floorTestDataThreeRes);
    res.end(JSON.stringify({ floorTestDataOneRes, floorTestDataTwoRes, floorTestDataThreeRes }));
});
exports.callMathFloor = callMathFloor;
