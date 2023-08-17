"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./Button.css");
const Button = ({ title, variant, navUrl, type, wide, textAlign, onPress, }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleClick = () => {
        if (navUrl) {
            navigate(navUrl);
        }
    };
    return (react_1.default.createElement("div", { style: { textAlign: textAlign || "center", marginTop: 50 } },
        react_1.default.createElement("button", { className: "customButton", style: type == "secondary"
                ? {
                    backgroundColor: "#F5F5F5",
                    color: "blue",
                    borderRadius: variant == "box" ? 10 : 20,
                    height: variant == "box" ? 60 : 40,
                }
                : {
                    borderRadius: variant == "box" ? 10 : 20,
                    height: variant == "box" ? 50 : 40,
                    width: wide ? 240 : 100,
                }, onClick: onPress || handleClick }, title)));
};
exports.default = Button;
