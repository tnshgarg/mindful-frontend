import React from "react";
import { useLocation } from "react-router-dom";
import "./Intake.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
var Intake = function () {
    var location = useLocation();
    var queryParams = new URLSearchParams(location.search);
    var page = queryParams.get("page") || "1"; // Default to '1' if no page is provided
    switch (page) {
        case "1":
            return React.createElement(Page1, null);
        case "2":
            return React.createElement(Page2, null);
        case "3":
            return React.createElement(Page3, null);
        default:
            return React.createElement(Page1, null);
    }
};
export default Intake;
