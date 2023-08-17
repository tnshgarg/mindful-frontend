"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("../../components/Button/Button"));
const PreRegistration = () => {
    return (react_1.default.createElement("div", { style: {
            width: "60vw",
            height: "100vh",
            padding: 70,
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
        } },
        react_1.default.createElement("img", { src: require("../../assets/logo.svg").default, style: {
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
            }, width: 70, height: 70 }),
        react_1.default.createElement("h1", { style: {
                textAlign: "center",
                fontSize: 40,
                fontFamily: "Lora",
                fontWeight: 800,
                marginTop: 25,
            } }, "Let's see if Mindful Care meets your needs"),
        react_1.default.createElement("div", { style: { marginTop: 40 } },
            react_1.default.createElement("h3", { style: {
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    marginLeft: 60,
                    fontSize: 24,
                } }, "Mindful Care may be the right choice if you're seeking:"),
            react_1.default.createElement("div", { style: {
                    marginLeft: 60,
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                } },
                react_1.default.createElement("img", { width: 20, height: 20, src: require("../../assets/greenCheck.svg").default }),
                react_1.default.createElement("h4", { style: {
                        fontWeight: 600,
                        fontFamily: "Montserrat",
                        marginLeft: 10,
                    } }, "Safe and effective medication and symptom stabilization.")),
            react_1.default.createElement("div", { style: {
                    marginLeft: 60,
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                } },
                react_1.default.createElement("img", { width: 20, height: 20, src: require("../../assets/greenCheck.svg").default }),
                react_1.default.createElement("h4", { style: {
                        fontWeight: 600,
                        fontFamily: "Montserrat",
                        marginLeft: 10,
                    } }, "Micro Individual or group therapy with licensed therapists.")),
            react_1.default.createElement("div", { style: {
                    marginLeft: 60,
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                } },
                react_1.default.createElement("img", { width: 20, height: 20, src: require("../../assets/greenCheck.svg").default }),
                react_1.default.createElement("h4", { style: {
                        fontWeight: 600,
                        fontFamily: "Montserrat",
                        marginLeft: 10,
                    } }, "Micro therapy and medication for opioid or alcohol use."))),
        react_1.default.createElement("div", { style: { marginTop: 40 } },
            react_1.default.createElement("h3", { style: {
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    marginLeft: 60,
                    fontSize: 24,
                } },
                "Mindful Care",
                " ",
                react_1.default.createElement("span", { style: { textDecorationLine: "underline" } }, "does not provide"),
                " ",
                "the following:"),
            react_1.default.createElement("div", { style: {
                    marginLeft: 60,
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                } },
                react_1.default.createElement("img", { width: 20, height: 20, src: require("../../assets/redCross.svg").default }),
                react_1.default.createElement("h4", { style: {
                        fontWeight: 600,
                        fontFamily: "Montserrat",
                        marginLeft: 10,
                    } }, "Evaluations for court-ordered treatment, certification of disability, fitness for duty evaluations or firearms clearance.")),
            react_1.default.createElement("div", { style: {
                    marginLeft: 60,
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                } },
                react_1.default.createElement("img", { width: 20, height: 20, src: require("../../assets/redCross.svg").default }),
                react_1.default.createElement("h4", { style: {
                        fontWeight: 600,
                        fontFamily: "Montserrat",
                        marginLeft: 10,
                    } },
                    "Prescriptions for controlled substances, habit-forming medications or long-acting injectables, with the exception of buprenorphine for those receiving services from Mindful Recovery. We do offer safer alternatives that can be discussed at your visit. Please review our",
                    " ",
                    react_1.default.createElement("a", { href: "https://google.com", style: { color: "blue", textDecorationLine: "underline" } }, "medication policy"),
                    " ",
                    "for more information.")),
            react_1.default.createElement("div", { style: {
                    marginLeft: 60,
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                } },
                react_1.default.createElement("img", { width: 20, height: 20, src: require("../../assets/redCross.svg").default }),
                react_1.default.createElement("h4", { style: {
                        fontWeight: 600,
                        fontFamily: "Montserrat",
                        marginLeft: 10,
                    } }, "Services for minors or dependents under the age of 12."))),
        react_1.default.createElement(Button_1.default, { variant: "box", title: "Continue to sign-up", navUrl: "/registration", wide: true })));
};
exports.default = PreRegistration;
