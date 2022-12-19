"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const math_1 = __importDefault(require("./math"));
const lang_1 = __importDefault(require("./lang"));
const array_1 = __importDefault(require("./array"));
const object_1 = __importDefault(require("./object"));
const string_1 = __importDefault(require("./string"));
const function_1 = __importDefault(require("./function"));
const collection_1 = __importDefault(require("./collection"));
const routes = (0, express_1.Router)();
routes.use("/math", (0, math_1.default)());
routes.use("/lang", (0, lang_1.default)());
routes.use("/array", (0, array_1.default)());
routes.use("/object", (0, object_1.default)());
routes.use("/string", (0, string_1.default)());
routes.use("/functions", (0, function_1.default)());
routes.use("/collection", (0, collection_1.default)());
exports.default = () => routes;