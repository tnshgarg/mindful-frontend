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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { appointmentRequest } from "./requests.js";
var Page1 = function () {
    var navigate = useNavigate();
    var _a = useState(localStorage.getItem("gender") || ""), gender = _a[0], setGender = _a[1];
    var _b = useState(localStorage.getItem("age") || ""), age = _b[0], setAge = _b[1];
    var _c = useState(localStorage.getItem("pronoun") || ""), pronoun = _c[0], setPronoun = _c[1];
    var _d = useState(localStorage.getItem("visitType") || ""), visitType = _d[0], setVisitType = _d[1];
    var _e = useState(localStorage.getItem("reasonForVisit") || ""), reasonForVisit = _e[0], setReasonForVisit = _e[1];
    var _f = useState(localStorage.getItem("prefferedGender") || ""), prefferedGender = _f[0], setPrefferedGender = _f[1];
    var _g = useState({
        psychatricservice: false,
        therapy: false,
        substanceUse: false,
        notSure: false,
    }), service = _g[0], setService = _g[1];
    var _h = useState({
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        morning: false,
        afternoon: false,
        evening: false,
    }), appointmentTime = _h[0], setAppointmentTime = _h[1];
    var handleGenderChange = function (e) {
        localStorage.setItem("gender", e.target.value);
        setGender(e.target.value);
    };
    var handleAgeChange = function (e) {
        localStorage.setItem("age", e.target.value);
        setAge(e.target.value);
    };
    var handlePronounChange = function (e) {
        localStorage.setItem("pronoun", e.target.value);
        setPronoun(e.target.value);
    };
    var handleVisitTypeChange = function (e) {
        localStorage.setItem("visitType", e.target.value);
        setVisitType(e.target.value);
    };
    var handlePrefGenderChange = function (e) {
        localStorage.setItem("prefferedGender", e.target.value);
        setPrefferedGender(e.target.value);
    };
    var handleSelectedChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        setService(function (prevCheckedItems) {
            var _a;
            return (__assign(__assign({}, prevCheckedItems), (_a = {}, _a[name] = checked, _a)));
        });
    };
    var handleAppointmentChange = function (event) {
        var _a = event.target, name = _a.name, checked = _a.checked;
        setAppointmentTime(function (prevCheckedItems) {
            var _a;
            return (__assign(__assign({}, prevCheckedItems), (_a = {}, _a[name] = checked, _a)));
        });
    };
    var handleNext = function () {
        // axios
        //   .post("http://127.0.0.1:8000/appointment-info/", {
        //     appointmentFor: "adkm",
        //     gender: "male",
        //     pronouns: "dalkd",
        //     servicesInterestedIn: ["jfnjsd"],
        //     prefferedAppointmentDateAndTime: ["mdka"],
        //     prefferedVisitType: "prefferedVisitType",
        //     prefferedProvidedGender: "prefferedProvidedGender",
        //     reasonForVisit: "reasonForVisit",
        //     emergencyContactFirstName: "emergencyContactFirstName",
        //     emergencyContactLastName: "emergencyContactLastName",
        //     relationshipWithEmergencyContact: "relationshipWithEmergencyContact",
        //     emergencyContactPhoneNumber: "emergencyContactPhoneNumber",
        //   })
        //   .then((response: any) => {
        //     console.log("Response: ", response);
        //   })
        //   .catch(console.log);
        appointmentRequest({
            appointmentFor: age,
            gender: gender,
            pronouns: pronoun,
            servicesInterestedIn: Object.keys(service),
            prefferedAppointmentDateAndTime: Object.keys(appointmentTime),
            prefferedVisitType: visitType,
            prefferedProvidedGender: prefferedGender,
            reasonForVisit: reasonForVisit,
            emergencyContactFirstName: localStorage.getItem("firstname"),
            emergencyContactLastName: localStorage.getItem("lastname"),
            emergencyContactPhoneNumber: localStorage.getItem("emergencyphone"),
            relationshipWithEmergencyContact: localStorage.getItem("relationship"),
        })
            .then(function () {
            navigate("/home/intake-form?page=2");
        })
            .catch(console.log);
    };
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
                        React.createElement("div", { className: "circle blue" }),
                        React.createElement("div", { className: "bar" }),
                        React.createElement("div", { className: "circle" }),
                        React.createElement("div", { className: "bar" }),
                        React.createElement("div", { className: "circle" }))),
                React.createElement("h2", { className: "heading" }, "Welcome to Mindful Care! Take a few moments to fill out some new patient paperwork"),
                React.createElement("div", { className: "question" },
                    React.createElement("p", { className: "questiontext" }, "Who are you requesting an appointment for? *"),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "Myself", type: "radio", checked: age === "Myself", onChange: handleAgeChange }),
                        React.createElement("label", null, "Myself (18+ Years Old)")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "Minor", type: "radio", checked: age === "Minor", onChange: handleAgeChange }),
                        React.createElement("label", null, "A Child / Minor (12-17 Years Old)"))),
                age === "A Child / Minor (12-17 Years Old)" ? (React.createElement("div", null,
                    React.createElement("div", { className: "question" },
                        React.createElement("h4", { className: "questiontext underline" }, "Minor Information"),
                        React.createElement("div", { className: "flex-row" },
                            React.createElement(Input, { label: "First Name", description: "First Name", labelHidden: true }),
                            React.createElement(Input, { label: "lastname", description: "Last Name", labelHidden: true }))),
                    React.createElement("div", { className: "question" },
                        React.createElement("h4", { className: "questiontext" }, "Date Of Birth *"),
                        React.createElement("div", { className: "flex-row" },
                            React.createElement(Input, { type: "date", labelHidden: true, label: "relationship" }))))) : (React.createElement(React.Fragment, null)),
                React.createElement("div", { className: "question" },
                    React.createElement("p", { className: "questiontext" }, "Gender *"),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "radio1", type: "radio", checked: gender === "radio1", onChange: handleGenderChange }),
                        React.createElement("label", null, "Male")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "radio2", type: "radio", checked: gender === "radio2", onChange: handleGenderChange }),
                        React.createElement("label", null, "Female")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "radio3", type: "radio", checked: gender === "radio3", onChange: handleGenderChange }),
                        React.createElement("label", null, "Non-Binary")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "radio4", type: "radio", checked: gender === "radio4", onChange: handleGenderChange }),
                        React.createElement("label", null, "Transgender")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "radio5", type: "radio", checked: gender === "radio5", onChange: handleGenderChange }),
                        React.createElement("label", null, "Other"))),
                React.createElement("div", { className: "question" },
                    React.createElement("p", { className: "questiontext" }, "Pronouns *"),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "he", type: "radio", checked: pronoun === "he", onChange: handlePronounChange }),
                        React.createElement("label", null, "He/Him")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "she", type: "radio", checked: pronoun === "she", onChange: handlePronounChange }),
                        React.createElement("label", null, "She/Her")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "they", type: "radio", checked: pronoun === "they", onChange: handlePronounChange }),
                        React.createElement("label", null, "They/Them")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "other", type: "radio", checked: pronoun === "other", onChange: handlePronounChange }),
                        React.createElement("label", null, "Other (Please Specify)"))),
                React.createElement("div", { className: "question" },
                    React.createElement("p", { className: "questiontext" }, "What services are you interested in exploring? Check all that apply *"),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { id: "psychatric-service", name: "psychatricservice", type: "checkbox", checked: service["psychatricservice"], onChange: handleSelectedChange }),
                        React.createElement("label", null, "Psychiatric Services (Medication Management) - Ages 12+")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { id: "therapy", name: "therapy", type: "checkbox", checked: service["therapy"], onChange: handleSelectedChange }),
                        React.createElement("label", null, "Therapy Services (Individual and Group Therapy) - Ages 18+")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { id: "substaceUse", name: "substanceUse", type: "checkbox", checked: service["substanceUse"], onChange: handleSelectedChange }),
                        React.createElement("label", null, "Substance Use Counseling - Ages 18+")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { id: "notSure", name: "notSure", type: "checkbox", checked: service["notSure"], onChange: handleSelectedChange }),
                        React.createElement("label", null, "I'm Not Sure"))),
                React.createElement("div", { className: "question" },
                    React.createElement("p", { className: "questiontext" }, "Preffered Appointment Day/Time * *"),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { id: "sunday", name: "sunday", type: "checkbox", checked: appointmentTime["sunday"], onChange: handleAppointmentChange }),
                        React.createElement("label", null, "Sunday")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { id: "monday", name: "monday", type: "checkbox", checked: appointmentTime["monday"], onChange: handleAppointmentChange }),
                        React.createElement("label", null, "Monday")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { id: "checkbox3", name: "tuesday", type: "checkbox", checked: appointmentTime["tuesday"], onChange: handleAppointmentChange }),
                        React.createElement("label", null, "Tuesday")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { id: "checkbox4", name: "wednesday", type: "checkbox", checked: appointmentTime["wednesday"], onChange: handleAppointmentChange }),
                        React.createElement("label", null, "Wednesday")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { id: "checkbox5", name: "thursday", type: "checkbox", checked: appointmentTime["thursday"], onChange: handleAppointmentChange }),
                        React.createElement("label", null, "Thursday")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { id: "checkbox6", name: "friday", type: "checkbox", checked: appointmentTime["friday"], onChange: handleAppointmentChange }),
                        React.createElement("label", null, "Friday")),
                    React.createElement("div", { style: { height: 40 } }),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { name: "morning", type: "checkbox", checked: appointmentTime["morning"], onChange: handleAppointmentChange }),
                        React.createElement("label", null, "Morning")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { name: "afternoon", type: "checkbox", checked: appointmentTime["afternoon"], onChange: handleAppointmentChange }),
                        React.createElement("label", null, "Afternoon")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { name: "evening", type: "checkbox", checked: appointmentTime["evening"], onChange: handleAppointmentChange }),
                        React.createElement("label", null, "Evening"))),
                React.createElement("div", { className: "question" },
                    React.createElement("p", { className: "questiontext" }, "Preffered Visit Type *"),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "virtual", type: "radio", checked: visitType === "virtual", onChange: handleVisitTypeChange }),
                        React.createElement("label", null, "Virtual")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "in-person", type: "radio", checked: visitType === "in-person", onChange: handleVisitTypeChange }),
                        React.createElement("label", null, "In-Person")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "no-preference", type: "radio", checked: visitType === "no-preference", onChange: handleVisitTypeChange }),
                        React.createElement("label", null, "No Preference"))),
                React.createElement("div", { className: "question" },
                    React.createElement("p", { className: "questiontext" }, "Preffered Provided Gender *"),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "Male", type: "radio", checked: prefferedGender === "Male", onChange: handlePrefGenderChange }),
                        React.createElement("label", null, "Male")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "Female", type: "radio", checked: prefferedGender === "Female", onChange: handlePrefGenderChange }),
                        React.createElement("label", null, "Female")),
                    React.createElement("div", { className: "radiocontainer" },
                        React.createElement("input", { value: "No-Preference", type: "radio", checked: prefferedGender === "No-Preference", onChange: handlePrefGenderChange }),
                        React.createElement("label", null, "No-Preference"))),
                React.createElement("div", { className: "question" },
                    React.createElement("h4", { className: "questiontext" }, "What is the reason for your visit *"),
                    React.createElement("textarea", { value: reasonForVisit, onChange: function (e) {
                            localStorage.setItem("reasonForVisit", e.target.value);
                            setReasonForVisit(e.target.value);
                        }, rows: 5, cols: 80 })),
                React.createElement("div", { className: "flex-other" },
                    React.createElement("img", { src: require("../../../assets/hand.svg").default, width: 24, height: 24, color: "white" }),
                    React.createElement("p", { className: "infotext-other" },
                        "Returning patients, please email ",
                        React.createElement("b", null, "support@mindful.care"),
                        " or call us at ",
                        React.createElement("b", null, "516-505-7200"),
                        " to schedule an appointment.")),
                React.createElement("div", { className: "question" },
                    React.createElement("h4", { className: "questiontext" }, "Emergency Contact *"),
                    React.createElement("div", { className: "flex-row" },
                        React.createElement(Input, { label: "firstname", description: "First Name", labelHidden: true }),
                        React.createElement(Input, { label: "lastname", description: "Last Name", labelHidden: true }))),
                React.createElement("div", { className: "question" },
                    React.createElement("h4", { className: "questiontext" }, "Relationship to Emergency Contact *"),
                    React.createElement("div", { className: "flex-row" },
                        React.createElement(Input, { labelHidden: true, label: "relationship" }))),
                React.createElement("div", { className: "question" },
                    React.createElement("h4", { className: "questiontext" }, "Emergency Contact Phone Number *"),
                    React.createElement("div", { className: "flex-row" },
                        React.createElement(Input, { label: "emergencyphone", inputType: "phone", wide: true, width: "220%", labelHidden: true })))),
            React.createElement("div", { className: "btncontainerintake" },
                React.createElement(Button, { title: "Next", wide: true, variant: "box", textAlign: "right", 
                    // navUrl={"/home/intake-form?page=2"}
                    onPress: function () { return handleNext(); } })))));
};
export default Page1;
