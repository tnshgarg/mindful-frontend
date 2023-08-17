import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";
var Button = function (_a) {
    var title = _a.title, variant = _a.variant, navUrl = _a.navUrl, type = _a.type, wide = _a.wide, textAlign = _a.textAlign, onPress = _a.onPress;
    var navigate = useNavigate();
    var handleClick = function () {
        if (navUrl) {
            navigate(navUrl);
        }
    };
    return (React.createElement("div", { style: { textAlign: textAlign || "center", marginTop: 50 } },
        React.createElement("button", { className: "customButton", style: type == "secondary"
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
export default Button;
