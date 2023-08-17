import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { appointmentInsuranceInfo } from "./requests.js";
var Page3 = function () {
    var navigate = useNavigate();
    var _a = useState(""), isInsurance = _a[0], setIsInsurance = _a[1];
    var _b = useState(""), isBill = _b[0], setIsBill = _b[1];
    var _c = useState(false), disabled = _c[0], setDisabled = _c[1];
    var _d = useState(), frontImage = _d[0], setFrontImage = _d[1];
    var _e = useState(), backImage = _e[0], setBackImage = _e[1];
    var handleInsuranceChange = function (e) {
        setIsInsurance(e.target.value);
    };
    var handleBillChange = function (e) {
        setIsBill(e.target.value);
    };
    var handleNext = function () {
        var formData = new FormData();
        formData.append("frontImage", frontImage);
        formData.append("backImage", backImage);
        formData.append("isUsingInsurance", isInsurance);
        formData.append("isSelfPayPayment", isBill);
        formData.append("insuranceCompany", localStorage.getItem("insurancecompany") || "");
        formData.append("subscriberMemberId", localStorage.getItem("subscribermemberid") || "");
        appointmentInsuranceInfo(formData)
            .then(function () { return navigate("/success"); })
            .catch(console.log);
    };
    useEffect(function () {
        if (isInsurance !== "") {
            if (isInsurance === "Yes") {
                if (localStorage.getItem("insurancecompany") &&
                    localStorage.getItem("insurancecompany")) {
                    setDisabled(false);
                }
            }
            else {
                if (isBill !== "") {
                    setDisabled(false);
                }
            }
        }
        else
            setDisabled(true);
    }, [isInsurance, isBill]);
    return (React.createElement("div", null,
        React.createElement("div", { className: "parent-intake" },
            React.createElement("div", { className: "intake-container" },
                React.createElement("div", { className: "logoContainer" },
                    React.createElement("img", { src: require("../../../assets/mainlogo.svg").default, width: 300, height: 100, style: { objectFit: "contain" }, alt: "" })),
                React.createElement("hr", { style: { backgroundColor: "blue", marginTop: 30 } }),
                React.createElement("div", { className: "shape-parent" },
                    React.createElement("div", { className: "flex-shape" },
                        React.createElement("p", null, "Appointment Info"),
                        React.createElement("p", null, "Consent"),
                        React.createElement("p", null, "Insurance Info")),
                    React.createElement("div", { className: "shapeContainer" },
                        React.createElement("div", { className: "circle blue align-center" },
                            React.createElement("img", { src: require("../../../assets/check.svg").default, width: "50%", height: "100%", style: { objectFit: "contain", alignItems: "center" } })),
                        React.createElement("div", { className: "bar blue" }),
                        React.createElement("div", { className: "circle blue align-center" },
                            React.createElement("img", { src: require("../../../assets/check.svg").default, width: "50%", height: "100%", style: { objectFit: "contain", alignItems: "center" } })),
                        React.createElement("div", { className: "bar blue" }),
                        React.createElement("div", { className: "circle blue" }))),
                React.createElement("h2", { className: "heading2" }, "Patient Insurance Information"),
                React.createElement("div", { className: "question" },
                    React.createElement("p", { className: "questiontext" }, "Are you using insurance for this visit? *"),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "Yes", type: "radio", checked: isInsurance === "Yes", onChange: handleInsuranceChange }),
                        React.createElement("label", null, "Yes")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "No", type: "radio", checked: isInsurance === "No", onChange: handleInsuranceChange }),
                        React.createElement("label", null, "No"))),
                isInsurance === "Yes" ? (React.createElement("div", { style: { width: "100%" } },
                    React.createElement("div", { className: "question" },
                        React.createElement("div", { className: "flex-row2" },
                            React.createElement(Input, { options: ["Aetna", "Cigna", "Humana"], label: "Insurance Company" }),
                            React.createElement(Input, { label: "Subscriber Member ID" }))),
                    React.createElement("div", null,
                        React.createElement("p", { className: "question bold" }, "Before we can schedule your appointment, we will need a photo of the front and back of the insurance card you would like to use."),
                        React.createElement("div", { className: "flex-row question" },
                            React.createElement("input", { type: "file", className: "fileinput", onChange: function (e) {
                                    return e.target.files &&
                                        e.target.files.length > 0 &&
                                        setFrontImage(e.target.files[0]);
                                } }),
                            React.createElement("input", { className: "fileinput", type: "file", onChange: function (e) {
                                    return e.target.files &&
                                        e.target.files.length > 0 &&
                                        setBackImage(e.target.files[0]);
                                } }))))) : (React.createElement("div", { className: "question" },
                    React.createElement("p", { className: "questiontext" }, "By choosing to not bill an insurance company, you consent to be seen as a self pay patient. This agreement is voluntary. By clicking \u201CAccept\u201D you are consenting to being charged as a self pay patient and are responsible for payment of service. *"),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "accept", type: "radio", checked: isBill === "accept", onChange: handleBillChange }),
                        React.createElement("label", null, "Accept")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "decline", type: "radio", checked: isBill === "decline", onChange: handleBillChange }),
                        React.createElement("label", null, "Decline")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "no-insurance", type: "radio", checked: isBill === "no-insurance", onChange: handleBillChange }),
                        React.createElement("label", null, "I do not have insurance"))))),
            React.createElement("div", { className: "btncontainerintake2" },
                React.createElement(Button, { type: "secondary", title: "Back", wide: true, variant: "box", textAlign: "right", navUrl: "/home/intake-form?page=1" }),
                React.createElement(Button, { title: "Next", variant: "box", textAlign: "right", onPress: disabled
                        ? function () {
                            alert("Please fill the form completely");
                        }
                        : handleNext })))));
};
export default Page3;
