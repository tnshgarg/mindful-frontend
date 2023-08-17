"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("../../components/Button/Button"));
const Home = () => {
    return (react_1.default.createElement(Button_1.default, { variant: "box", wide: true, title: "Get Started", navUrl: "/pre-registration" }));
};
exports.default = Home;
