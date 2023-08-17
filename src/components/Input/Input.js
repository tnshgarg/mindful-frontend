import React, { useEffect, useState } from "react";
import "./Input.css";
var Input = function (_a) {
    var label = _a.label, description = _a.description, placeholder = _a.placeholder, secureTextEntry = _a.secureTextEntry, type = _a.type, options = _a.options, wide = _a.wide, width = _a.width, inputType = _a.inputType, labelHidden = _a.labelHidden;
    var identifier = label.replace(/\s+/g, "").toLowerCase();
    var _b = useState(localStorage.getItem(identifier) || ""), value = _b[0], setValue = _b[1];
    useEffect(function () {
        localStorage.setItem(identifier, value);
    }, [value, setValue]);
    var handleChange = function (e) {
        if (inputType == "phone") {
            var value_1 = e.target.value.replace(/\D/g, ""); // Remove non-digits
            var formattedNumber = "";
            if (value_1.length <= 3) {
                formattedNumber = "(".concat(value_1);
            }
            else if (value_1.length <= 6) {
                formattedNumber = "(".concat(value_1.slice(0, 3), ")-").concat(value_1.slice(3));
            }
            else {
                formattedNumber = "(".concat(value_1.slice(0, 3), ")-").concat(value_1.slice(3, 6), "-").concat(value_1.slice(6, 10));
            }
            localStorage.setItem(identifier, formattedNumber);
            setValue(formattedNumber);
        }
        else {
            setValue(e.target.value);
        }
    };
    return (React.createElement("div", { style: description ? { marginTop: 21 } : {}, className: "inputContainer" },
        !labelHidden ? React.createElement("label", { className: "label" }, label) : React.createElement(React.Fragment, null),
        React.createElement("div", { className: "inputbox", style: wide ? { width: width || "106%" } : { width: width } }, options ? (React.createElement("select", { value: value, onChange: function (e) { return setValue(e.target.value); }, style: { width: "100%" } }, options.map(function (option) { return (React.createElement("option", { style: { width: "100%" }, value: option }, option)); }))) : (React.createElement("input", { type: secureTextEntry ? "password" : type || "email", placeholder: placeholder || "", value: value, onChange: handleChange, style: { width: "100%" } }))),
        description ? React.createElement("p", { className: "description" }, description) : React.createElement(React.Fragment, null)));
};
export default Input;
