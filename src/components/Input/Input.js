"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./Input.css");
const Input = ({ label, description, placeholder, secureTextEntry, type, options, wide, width, inputType, labelHidden, }) => {
    const identifier = label.replace(/\s+/g, "").toLowerCase();
    const [value, setValue] = (0, react_1.useState)(localStorage.getItem(identifier) || "");
    (0, react_1.useEffect)(() => {
        localStorage.setItem(identifier, value);
    }, [value, setValue]);
    const handleChange = (e) => {
        if (inputType == "phone") {
            const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
            let formattedNumber = "";
            if (value.length <= 3) {
                formattedNumber = `(${value}`;
            }
            else if (value.length <= 6) {
                formattedNumber = `(${value.slice(0, 3)})-${value.slice(3)}`;
            }
            else {
                formattedNumber = `(${value.slice(0, 3)})-${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
            localStorage.setItem(identifier, formattedNumber);
            setValue(formattedNumber);
        }
        else {
            setValue(e.target.value);
        }
    };
    return (react_1.default.createElement("div", { style: description ? { marginTop: 21 } : {}, className: "inputContainer" },
        !labelHidden ? react_1.default.createElement("label", { className: "label" }, label) : react_1.default.createElement(react_1.default.Fragment, null),
        react_1.default.createElement("div", { className: "inputbox", style: wide ? { width: width || "106%" } : { width: width } }, options ? (react_1.default.createElement("select", { value: value, onChange: (e) => setValue(e.target.value), style: { width: "100%" } }, options.map((option) => (react_1.default.createElement("option", { style: { width: "100%" }, value: option }, option))))) : (react_1.default.createElement("input", { type: secureTextEntry ? "password" : type || "email", placeholder: placeholder || "", value: value, onChange: handleChange, style: { width: "100%" } }))),
        description ? react_1.default.createElement("p", { className: "description" }, description) : react_1.default.createElement(react_1.default.Fragment, null)));
};
exports.default = Input;
