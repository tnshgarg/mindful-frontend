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
const Page3 = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [isInsurance, setIsInsurance] = (0, react_1.useState)("");
    const [isBill, setIsBill] = (0, react_1.useState)("");
    const [disabled, setDisabled] = (0, react_1.useState)(false);
    const [frontImage, setFrontImage] = (0, react_1.useState)();
    const [backImage, setBackImage] = (0, react_1.useState)();
    const handleInsuranceChange = (e) => {
        setIsInsurance(e.target.value);
    };
    const handleBillChange = (e) => {
        setIsBill(e.target.value);
    };
    const handleNext = () => {
        const formData = new FormData();
        formData.append("frontImage", frontImage);
        formData.append("backImage", backImage);
        formData.append("isUsingInsurance", isInsurance);
        formData.append("isSelfPayPayment", isBill);
        formData.append("insuranceCompany", localStorage.getItem("insurancecompany") || "");
        formData.append("subscriberMemberId", localStorage.getItem("subscribermemberid") || "");
        (0, requests_js_1.appointmentInsuranceInfo)(formData)
            .then(() => navigate("/success"))
            .catch(console.log);
    };
    (0, react_1.useEffect)(() => {
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
                        react_1.default.createElement("div", { className: "circle blue align-center" },
                            react_1.default.createElement("img", { src: require("../../../assets/check.svg").default, width: "50%", height: "100%", style: { objectFit: "contain", alignItems: "center" } })),
                        react_1.default.createElement("div", { className: "bar blue" }),
                        react_1.default.createElement("div", { className: "circle blue align-center" },
                            react_1.default.createElement("img", { src: require("../../../assets/check.svg").default, width: "50%", height: "100%", style: { objectFit: "contain", alignItems: "center" } })),
                        react_1.default.createElement("div", { className: "bar blue" }),
                        react_1.default.createElement("div", { className: "circle blue" }))),
                react_1.default.createElement("h2", { className: "heading2" }, "Patient Insurance Information"),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("p", { className: "questiontext" }, "Are you using insurance for this visit? *"),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "Yes", type: "radio", checked: isInsurance === "Yes", onChange: handleInsuranceChange }),
                        react_1.default.createElement("label", null, "Yes")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "No", type: "radio", checked: isInsurance === "No", onChange: handleInsuranceChange }),
                        react_1.default.createElement("label", null, "No"))),
                isInsurance === "Yes" ? (react_1.default.createElement("div", { style: { width: "100%" } },
                    react_1.default.createElement("div", { className: "question" },
                        react_1.default.createElement("div", { className: "flex-row2" },
                            react_1.default.createElement(Input_1.default, { options: ["Aetna", "Cigna", "Humana"], label: "Insurance Company" }),
                            react_1.default.createElement(Input_1.default, { label: "Subscriber Member ID" }))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("p", { className: "question bold" }, "Before we can schedule your appointment, we will need a photo of the front and back of the insurance card you would like to use."),
                        react_1.default.createElement("div", { className: "flex-row question" },
                            react_1.default.createElement("input", { type: "file", className: "fileinput", onChange: (e) => e.target.files &&
                                    e.target.files.length > 0 &&
                                    setFrontImage(e.target.files[0]) }),
                            react_1.default.createElement("input", { className: "fileinput", type: "file", onChange: (e) => e.target.files &&
                                    e.target.files.length > 0 &&
                                    setBackImage(e.target.files[0]) }))))) : (react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("p", { className: "questiontext" }, "By choosing to not bill an insurance company, you consent to be seen as a self pay patient. This agreement is voluntary. By clicking \u201CAccept\u201D you are consenting to being charged as a self pay patient and are responsible for payment of service. *"),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "accept", type: "radio", checked: isBill === "accept", onChange: handleBillChange }),
                        react_1.default.createElement("label", null, "Accept")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "decline", type: "radio", checked: isBill === "decline", onChange: handleBillChange }),
                        react_1.default.createElement("label", null, "Decline")),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { value: "no-insurance", type: "radio", checked: isBill === "no-insurance", onChange: handleBillChange }),
                        react_1.default.createElement("label", null, "I do not have insurance"))))),
            react_1.default.createElement("div", { className: "btncontainerintake2" },
                react_1.default.createElement(Button_1.default, { type: "secondary", title: "Back", wide: true, variant: "box", textAlign: "right", navUrl: "/home/intake-form?page=1" }),
                react_1.default.createElement(Button_1.default, { title: "Next", variant: "box", textAlign: "right", onPress: disabled
                        ? () => {
                            alert("Please fill the form completely");
                        }
                        : handleNext })))));
};
exports.default = Page3;
