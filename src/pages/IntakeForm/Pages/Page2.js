var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { appointmentConsent } from "./requests.js";
var Page2 = function () {
    var navigate = useNavigate();
    var _a = useState(true), disabled = _a[0], setDisabled = _a[1];
    var _b = useState({
        acknowledgement1: false,
        acknowledgement2: false,
        acknowledgement3: false,
        acknowledgement4: false,
    }), service = _b[0], setService = _b[1];
    var handleSelectedChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        setService(function (prevCheckedItems) {
            var _a;
            return (__assign(__assign({}, prevCheckedItems), (_a = {}, _a[name] = checked, _a)));
        });
    };
    var handleNext = function () {
        appointmentConsent(service)
            .then(function () { return navigate("/home/intake-form?page=3"); })
            .catch(console.log);
    };
    useEffect(function () {
        if (service.acknowledgement1 &&
            service.acknowledgement2 &&
            service.acknowledgement3 &&
            service.acknowledgement4)
            setDisabled(false);
        else
            setDisabled(true);
    }, [service]);
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
                        React.createElement("div", { className: "circle blue " }),
                        React.createElement("div", { className: "bar" }),
                        React.createElement("div", { className: "circle" }))),
                React.createElement("h2", { className: "heading2" }, "Patient Consent Form"),
                React.createElement("div", { className: "question" },
                    React.createElement("p", { className: "questiontext" }, "We do not prescribe any controlled substances, habit-forming medications, or long-acting injectables, with the exception of buprenorphine for those receiving services from Mindful Recovery. We do offer alternatives that can be reviewed at your visit."),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { name: "acknowledgement1", type: "checkbox", checked: service["acknowledgement1"], onChange: handleSelectedChange }),
                        React.createElement("label", { style: { marginLeft: 10 }, className: "label" }, "I acknowledge"))),
                React.createElement("div", { className: "question" },
                    React.createElement("p", { className: "questiontext" }, "Mindful Care reserves the right to charge a fee in the amount of one hundred dollars ($100) in the event you do not provide at least twenty four (24) hours notice of cancellation prior to your scheduled appointment. Mindful Care also reserves the right to deny future bookings in the event of repeated cancellation of appointments without prior sufficient notice."),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { name: "acknowledgement2", type: "checkbox", checked: service["acknowledgement2"], onChange: handleSelectedChange }),
                        React.createElement("label", { style: { marginLeft: 10 }, className: "label" }, "I acknowledge"))),
                React.createElement("div", { className: "question" },
                    React.createElement("p", { className: "questiontext" },
                        "Please carefully read the",
                        " ",
                        React.createElement("a", { style: { color: "blue" } }, "Mindful Care Policies"),
                        "."),
                    React.createElement("p", { className: "questiontext mt-20" }, "Acknowledgement of Policies"),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { name: "acknowledgement3", type: "checkbox", checked: service["acknowledgement3"], onChange: handleSelectedChange }),
                        React.createElement("label", { style: { marginLeft: 10 }, className: "label" }, "I acknowledge"))),
                React.createElement("div", { className: "question" },
                    React.createElement("p", { className: "questiontext bold" }, "Adult Patient Consent to Care (18 years of age or older)"),
                    React.createElement("p", { className: "questiontext " },
                        "I hereby authorize Mindful Care by and through its licensed medical professionals to provide me with mental health care services that such professionals deem necessary for diagnosing and/or treating my mental health condition(s). I hereby understand and agree that my sessions with Mindful Care's mental health professionals may involve in-depth questions of a sensitive and personal nature including but not limited to such topics as (my history of diagnosed and/ or undiagnosed mental health disorders and that of my family members, eating disorders, sexual history and/or abuse, history of suicidal and other self-harm tendencies and events, legal history/ history of interactions with law enforcement authorities, and substance use). I acknowledge and agree that if I am uncomfortable with the treatment outlined or line of questioning engaged in during my Mindful Care session that I shall immediately notify my Mindful Care provider of such, so an alternative treatment regime may be utilized for my benefit. I acknowledge and agree that no guarantees and/ or assurances of any kind have been given to me concerning the results of Mindful Care's mental health services including but not limited to the prospective improvement and/or resolution of my present mental health condition. I acknowledge and agree that I have been given the opportunity to ask questions concerning my pursuit of care with Mindful Care, and that all my questions have been answered to my satisfaction and that I am electing to pursue care with Mindful Care entirely of my own volition. My signature below indicates that I have fully read and agree to the aforementioned terms.",
                        " "),
                    React.createElement("p", { className: "questiontext mt-20" }, "Acknowledgement of Consent"),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { name: "acknowledgement4", type: "checkbox", checked: service["acknowledgement4"], onChange: handleSelectedChange }),
                        React.createElement("label", { style: { marginLeft: 10 }, className: "label" }, "I acknowledge")))),
            React.createElement("div", { className: "btncontainerintake2" },
                React.createElement(Button, { type: "secondary", title: "Back", wide: true, variant: "box", textAlign: "right", navUrl: "/home/intake-form?page=1" }),
                React.createElement(Button, { title: "Next", variant: "box", textAlign: "right", 
                    // navUrl={"/home/intake-form?page=3"}
                    onPress: disabled
                        ? function () {
                            alert("Please fill the form completely");
                        }
                        : handleNext })))));
};
export default Page2;
