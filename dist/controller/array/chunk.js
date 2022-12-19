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
exports.callArrayChunk = void 0;
const lodash_1 = __importDefault(require("lodash"));
const chunkTestDataSimple = ['a', 'b', 'c', 'd'];
const chunkTestDataAdvanced = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13"];
const chunkTestKey = 3;
/**
 * usages:  I need to split a JavaScript array into n sized chunks.
 *
 * syntex: _.chunk(array, key);
 *
 * Application :
    Creates an array of elements split into groups the length of size.If array can't be split evenly,
    the final chunk will be the remaining elements.
 */
const callArrayChunk = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\n ------------- Array Chunk ---------------------\n');
    const simpleDataResponse = lodash_1.default.chunk(chunkTestDataSimple, chunkTestKey);
    const advancedDataResponse = lodash_1.default.chunk(chunkTestDataAdvanced, chunkTestKey);
    console.log('\n simpleDataResponse: \n', simpleDataResponse);
    console.log('\n advancedDataResponse: \n', advancedDataResponse);
    res.end(JSON.stringify({ simpleDataResponse, advancedDataResponse }));
});
exports.callArrayChunk = callArrayChunk;
