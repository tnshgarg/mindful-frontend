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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Button_1 = __importDefault(require("../../../components/Button/Button"));
const Input_1 = __importDefault(require("../../../components/Input/Input"));
const requests_js_1 = require("./requests.js");
const Page1 = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [gender, setGender] = (0, react_1.useState)(localStorage.getItem("gender") || "");
    const [age, setAge] = (0, react_1.useState)(localStorage.getItem("age") || "");
    const [pronoun, setPronoun] = (0, react_1.useState)(localStorage.getItem("pronoun") || "");
    const [visitType, setVisitType] = (0, react_1.useState)(localStorage.getItem("visitType") || "");
    const [reasonForVisit, setReasonForVisit] = (0, react_1.useState)(localStorage.getItem("reasonForVisit") || "");
    const [prefferedGender, setPrefferedGender] = (0, react_1.useState)(localStorage.getItem("prefferedGender") || "");
    const [service, setService] = (0, react_1.useState)({
        psychatricservice: false,
        therapy: false,
        substanceUse: false,
        notSure: false,
    });
    const [appointmentTime, setAppointmentTime] = (0, react_1.useState)({
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        morning: false,
        afternoon: false,
        evening: false,
    });
    const handleGenderChange = (e) => {
        localStorage.setItem("gender", e.target.value);
        setGender(e.target.value);
    };
    const handleAgeChange = (e) => {
        localStorage.setItem("age", e.target.value);
        setAge(e.target.value);
    };
    const handlePronounChange = (e) => {
        localStorage.setItem("pronoun", e.target.value);
        setPronoun(e.target.value);
    };
    const handleVisitTypeChange = (e) => {
        localStorage.setItem("visitType", e.target.value);
        setVisitType(e.target.value);
    };
    const handlePrefGenderChange = (e) => {
        localStorage.setItem("prefferedGender", e.target.value);
        setPrefferedGender(e.target.value);
    };
    const handleSelectedChange = (event) => {
        const { name, checked } = event.target;
        setService((prevCheckedItems) => (Object.assign(Object.assign({}, prevCheckedItems), { [name]: checked })));
    };
    const handleAppointmentChange = (event) => {
        const { name, checked } = event.target;
        setAppointmentTime((prevCheckedItems) => (Object.assign(Object.assign({}, prevCheckedItems), { [name]: checked })));
    };
    const handleNext = () => {
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
        (0, requests_js_1.appointmentRequest)({
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
            .then(() => {
            navigate("/home/intake-form?page=2");
        })
            .catch(console.log);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "parent-intake" },
            react_1.default.createElement("div", { className: "intake-container" },
                react_1.default.createElement("div", { className: "logoContainer" },
                    react_1.default.createElement("img", { src: require("../../../assets/mainlogo.svg").default, width: 300, height: 100, style: { objectFit: "contain" }, alt: "" })),
                react_1.default.createElement("hr", { style: { backgroundColor: "blue", marginTop: 30 } }),
                react_1.default.createElement("div", { className: "shape-parent" },
                    react_1.default.createElement("div", { className: "flex-shape" },
                        react_1.default.createElement("p", null, "Appointment Info"),
                        react_1.default.createElement("p", null, "Consent"),
                        react_1.default.createElement("p", null, "Insurance Info")),
                    react_1.default.createElement("div", { className: "shapeContainer" },
                        react_1.default.createElement("div", { className: "circle blue" }),
                        react_1.default.createElement("div", { className: "bar" }),
                        react_1.default.createElement("div", { className: "circle" }),
                        react_1.default.createElement("div", { className: "bar" }),
                        react_1.default.createElement("div", { className: "circle" }))),
                react_1.default.createElement("h2", { className: "heading" }, "Welcome to Mindful Care! Take a few moments to fill out some new patient paperwork"),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("p", { className: "questiontext" }, "Who are you requesting an appointment for? *"),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "Myself", type: "radio", checked: age === "Myself", onChange: handleAgeChange }),
                        react_1.default.createElement("label", null, "Myself (18+ Years Old)")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "Minor", type: "radio", checked: age === "Minor", onChange: handleAgeChange }),
                        react_1.default.createElement("label", null, "A Child / Minor (12-17 Years Old)"))),
                age === "A Child / Minor (12-17 Years Old)" ? (react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "question" },
                        react_1.default.createElement("h4", { className: "questiontext underline" }, "Minor Information"),
                        react_1.default.createElement("div", { className: "flex-row" },
                            react_1.default.createElement(Input_1.default, { label: "First Name", description: "First Name", labelHidden: true }),
                            react_1.default.createElement(Input_1.default, { label: "lastname", description: "Last Name", labelHidden: true }))),
                    react_1.default.createElement("div", { className: "question" },
                        react_1.default.createElement("h4", { className: "questiontext" }, "Date Of Birth *"),
                        react_1.default.createElement("div", { className: "flex-row" },
                            react_1.default.createElement(Input_1.default, { type: "date", labelHidden: true, label: "relationship" }))))) : (react_1.default.createElement(react_1.default.Fragment, null)),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("p", { className: "questiontext" }, "Gender *"),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "radio1", type: "radio", checked: gender === "radio1", onChange: handleGenderChange }),
                        react_1.default.createElement("label", null, "Male")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "radio2", type: "radio", checked: gender === "radio2", onChange: handleGenderChange }),
                        react_1.default.createElement("label", null, "Female")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "radio3", type: "radio", checked: gender === "radio3", onChange: handleGenderChange }),
                        react_1.default.createElement("label", null, "Non-Binary")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "radio4", type: "radio", checked: gender === "radio4", onChange: handleGenderChange }),
                        react_1.default.createElement("label", null, "Transgender")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "radio5", type: "radio", checked: gender === "radio5", onChange: handleGenderChange }),
                        react_1.default.createElement("label", null, "Other"))),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("p", { className: "questiontext" }, "Pronouns *"),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "he", type: "radio", checked: pronoun === "he", onChange: handlePronounChange }),
                        react_1.default.createElement("label", null, "He/Him")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "she", type: "radio", checked: pronoun === "she", onChange: handlePronounChange }),
                        react_1.default.createElement("label", null, "She/Her")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "they", type: "radio", checked: pronoun === "they", onChange: handlePronounChange }),
                        react_1.default.createElement("label", null, "They/Them")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "other", type: "radio", checked: pronoun === "other", onChange: handlePronounChange }),
                        react_1.default.createElement("label", null, "Other (Please Specify)"))),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("p", { className: "questiontext" }, "What services are you interested in exploring? Check all that apply *"),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { id: "psychatric-service", name: "psychatricservice", type: "checkbox", checked: service["psychatricservice"], onChange: handleSelectedChange }),
                        react_1.default.createElement("label", null, "Psychiatric Services (Medication Management) - Ages 12+")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { id: "therapy", name: "therapy", type: "checkbox", checked: service["therapy"], onChange: handleSelectedChange }),
                        react_1.default.createElement("label", null, "Therapy Services (Individual and Group Therapy) - Ages 18+")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { id: "substaceUse", name: "substanceUse", type: "checkbox", checked: service["substanceUse"], onChange: handleSelectedChange }),
                        react_1.default.createElement("label", null, "Substance Use Counseling - Ages 18+")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { id: "notSure", name: "notSure", type: "checkbox", checked: service["notSure"], onChange: handleSelectedChange }),
                        react_1.default.createElement("label", null, "I'm Not Sure"))),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("p", { className: "questiontext" }, "Preffered Appointment Day/Time * *"),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { id: "sunday", name: "sunday", type: "checkbox", checked: appointmentTime["sunday"], onChange: handleAppointmentChange }),
                        react_1.default.createElement("label", null, "Sunday")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { id: "monday", name: "monday", type: "checkbox", checked: appointmentTime["monday"], onChange: handleAppointmentChange }),
                        react_1.default.createElement("label", null, "Monday")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { id: "checkbox3", name: "tuesday", type: "checkbox", checked: appointmentTime["tuesday"], onChange: handleAppointmentChange }),
                        react_1.default.createElement("label", null, "Tuesday")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { id: "checkbox4", name: "wednesday", type: "checkbox", checked: appointmentTime["wednesday"], onChange: handleAppointmentChange }),
                        react_1.default.createElement("label", null, "Wednesday")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { id: "checkbox5", name: "thursday", type: "checkbox", checked: appointmentTime["thursday"], onChange: handleAppointmentChange }),
                        react_1.default.createElement("label", null, "Thursday")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { id: "checkbox6", name: "friday", type: "checkbox", checked: appointmentTime["friday"], onChange: handleAppointmentChange }),
                        react_1.default.createElement("label", null, "Friday")),
                    react_1.default.createElement("div", { style: { height: 40 } }),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { name: "morning", type: "checkbox", checked: appointmentTime["morning"], onChange: handleAppointmentChange }),
                        react_1.default.createElement("label", null, "Morning")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { name: "afternoon", type: "checkbox", checked: appointmentTime["afternoon"], onChange: handleAppointmentChange }),
                        react_1.default.createElement("label", null, "Afternoon")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { name: "evening", type: "checkbox", checked: appointmentTime["evening"], onChange: handleAppointmentChange }),
                        react_1.default.createElement("label", null, "Evening"))),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("p", { className: "questiontext" }, "Preffered Visit Type *"),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "virtual", type: "radio", checked: visitType === "virtual", onChange: handleVisitTypeChange }),
                        react_1.default.createElement("label", null, "Virtual")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "in-person", type: "radio", checked: visitType === "in-person", onChange: handleVisitTypeChange }),
                        react_1.default.createElement("label", null, "In-Person")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "no-preference", type: "radio", checked: visitType === "no-preference", onChange: handleVisitTypeChange }),
                        react_1.default.createElement("label", null, "No Preference"))),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("p", { className: "questiontext" }, "Preffered Provided Gender *"),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "Male", type: "radio", checked: prefferedGender === "Male", onChange: handlePrefGenderChange }),
                        react_1.default.createElement("label", null, "Male")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "Female", type: "radio", checked: prefferedGender === "Female", onChange: handlePrefGenderChange }),
                        react_1.default.createElement("label", null, "Female")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "No-Preference", type: "radio", checked: prefferedGender === "No-Preference", onChange: handlePrefGenderChange }),
                        react_1.default.createElement("label", null, "No-Preference"))),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("h4", { className: "questiontext" }, "What is the reason for your visit *"),
                    react_1.default.createElement("textarea", { value: reasonForVisit, onChange: (e) => {
                            localStorage.setItem("reasonForVisit", e.target.value);
                            setReasonForVisit(e.target.value);
                        }, rows: 5, cols: 80 })),
                react_1.default.createElement("div", { className: "flex-other" },
                    react_1.default.createElement("img", { src: require("../../../assets/hand.svg").default, width: 24, height: 24, color: "white" }),
                    react_1.default.createElement("p", { className: "infotext-other" },
                        "Returning patients, please email ",
                        react_1.default.createElement("b", null, "support@mindful.care"),
                        " or call us at ",
                        react_1.default.createElement("b", null, "516-505-7200"),
                        " to schedule an appointment.")),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("h4", { className: "questiontext" }, "Emergency Contact *"),
                    react_1.default.createElement("div", { className: "flex-row" },
                        react_1.default.createElement(Input_1.default, { label: "firstname", description: "First Name", labelHidden: true }),
                        react_1.default.createElement(Input_1.default, { label: "lastname", description: "Last Name", labelHidden: true }))),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("h4", { className: "questiontext" }, "Relationship to Emergency Contact *"),
                    react_1.default.createElement("div", { className: "flex-row" },
                        react_1.default.createElement(Input_1.default, { labelHidden: true, label: "relationship" }))),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("h4", { className: "questiontext" }, "Emergency Contact Phone Number *"),
                    react_1.default.createElement("div", { className: "flex-row" },
                        react_1.default.createElement(Input_1.default, { label: "emergencyphone", inputType: "phone", wide: true, width: "220%", labelHidden: true })))),
            react_1.default.createElement("div", { className: "btncontainerintake" },
                react_1.default.createElement(Button_1.default, { title: "Next", wide: true, variant: "box", textAlign: "right", 
                    // navUrl={"/home/intake-form?page=2"}
                    onPress: () => handleNext() })))));
};
exports.default = Page1;
