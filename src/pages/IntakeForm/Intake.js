"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./Intake.css");
const Page1_1 = __importDefault(require("./Pages/Page1"));
const Page2_1 = __importDefault(require("./Pages/Page2"));
const Page3_1 = __importDefault(require("./Pages/Page3"));
const Intake = () => {
    const location = (0, react_router_dom_1.useLocation)();
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get("page") || "1"; // Default to '1' if no page is provided
    switch (page) {
        case "1":
            return react_1.default.createElement(Page1_1.default, null);
        case "2":
            return react_1.default.createElement(Page2_1.default, null);
        case "3":
            return react_1.default.createElement(Page3_1.default, null);
        default:
            return react_1.default.createElement(Page1_1.default, null);
    }
};
exports.default = Intake;
