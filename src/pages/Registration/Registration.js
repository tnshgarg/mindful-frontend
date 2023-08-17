"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Button_1 = __importDefault(require("../../components/Button/Button"));
const Input_1 = __importDefault(require("../../components/Input/Input"));
require("./Registration.css");
const requests_1 = require("./requests");
const Registration = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleNext = () => {
        (0, requests_1.registration)({
            dob: localStorage.getItem("dateofbirth"),
            first_name: localStorage.getItem("firstname"),
            last_name: localStorage.getItem("lastname"),
            email: localStorage.getItem("email"),
            insurance: localStorage.getItem("insurance"),
            password: localStorage.getItem("password"),
            phone: localStorage.getItem("phone"),
            state: localStorage.getItem("state"),
        })
            .then(() => navigate("/home/intake-form?page=1"))
            .catch(console.log);
    };
    return (react_1.default.createElement("div", { className: "parent" },
        react_1.default.createElement("div", { className: "flex" },
            react_1.default.createElement("img", { src: require("../../assets/info.svg").default, width: 24, height: 24, color: "blue" }),
            react_1.default.createElement("p", { className: "infotext" },
                "Returning patients, please email ",
                react_1.default.createElement("b", null, "support@mindful.care"),
                " or call us at ",
                react_1.default.createElement("b", null, "516-505-7200"),
                " to schedule an appointment.")),
        react_1.default.createElement("div", { style: { marginLeft: "auto", marginRight: "auto" } },
            react_1.default.createElement("h1", { style: {
                    color: "black",
                    fontSize: 45,
                    fontFamily: "Lora",
                    textAlign: "center",
                    marginBottom: 20,
                } }, "We welcome you with open arms."),
            react_1.default.createElement("h3", { style: {
                    color: "gray",
                    fontSize: 18,
                    fontFamily: "Montserrat",
                    textAlign: "center",
                    marginBottom: 30,
                } }, "Sign up to get started scheduling an appointment.")),
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "halfContainer" },
                react_1.default.createElement(Input_1.default, { label: "First Name" }),
                react_1.default.createElement(Input_1.default, { label: "Last Name" })),
            react_1.default.createElement("div", { className: "halfContainer others" },
                react_1.default.createElement(Input_1.default, { inputType: "phone", label: "Phone" }),
                react_1.default.createElement(Input_1.default, { type: "date", label: "Date Of Birth" })),
            react_1.default.createElement("div", { className: "halfContainer others" },
                react_1.default.createElement(Input_1.default, { options: ["Florida", "New York", "Chicago"], label: "State" }),
                react_1.default.createElement(Input_1.default, { options: ["No Insurance (Self Pay)", "Others"], label: "Insurance" })),
            react_1.default.createElement("div", { className: "full others" },
                react_1.default.createElement(Input_1.default, { wide: true, label: "Email", placeholder: "your@email.com" })),
            react_1.default.createElement("i", { style: { fontSize: 11, fontFamily: "Montserrat" } }, "(Note: this will be used when logging into your patient portal)"),
            react_1.default.createElement("div", { className: "halfContainer others" },
                react_1.default.createElement(Input_1.default, { label: "Password", secureTextEntry: true }),
                react_1.default.createElement(Input_1.default, { label: "Confirm Password", secureTextEntry: true })),
            react_1.default.createElement("p", { style: { fontSize: 11, color: "gray", marginTop: 10 } }, "Passwords must be atleast 8 characters long"),
            react_1.default.createElement("hr", { style: { marginTop: 50 } }),
            react_1.default.createElement("div", { style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 15,
                } },
                react_1.default.createElement("input", { type: "checkbox" }),
                react_1.default.createElement("p", { style: { fontSize: 12, fontFamily: "Montserrat", marginLeft: 15 } },
                    "I agree to Mindful Care's",
                    " ",
                    react_1.default.createElement("a", { style: { color: "blue" } }, "terms of use"),
                    " and",
                    " ",
                    react_1.default.createElement("a", { style: { color: "blue" } }, "privacy policy"),
                    ".")),
            react_1.default.createElement("div", { style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                } },
                react_1.default.createElement(Button_1.default, { title: "Back", variant: "box", type: "secondary" }),
                react_1.default.createElement(Button_1.default, { wide: true, title: "Sign Up", variant: "box", onPress: handleNext })))));
};
exports.default = Registration;
