"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const route_1 = __importDefault(require("./route"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3333;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/", (0, route_1.default)());
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
