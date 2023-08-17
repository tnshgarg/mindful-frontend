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
const requests_js_1 = require("./requests.js");
const Page2 = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [disabled, setDisabled] = (0, react_1.useState)(true);
    const [service, setService] = (0, react_1.useState)({
        acknowledgement1: false,
        acknowledgement2: false,
        acknowledgement3: false,
        acknowledgement4: false,
    });
    const handleSelectedChange = (event) => {
        const { name, checked } = event.target;
        setService((prevCheckedItems) => (Object.assign(Object.assign({}, prevCheckedItems), { [name]: checked })));
    };
    const handleNext = () => {
        (0, requests_js_1.appointmentConsent)(service)
            .then(() => navigate("/home/intake-form?page=3"))
            .catch(console.log);
    };
    (0, react_1.useEffect)(() => {
        if (service.acknowledgement1 &&
            service.acknowledgement2 &&
            service.acknowledgement3 &&
            service.acknowledgement4)
            setDisabled(false);
        else
            setDisabled(true);
    }, [service]);
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
                        react_1.default.createElement("div", { className: "circle blue " }),
                        react_1.default.createElement("div", { className: "bar" }),
                        react_1.default.createElement("div", { className: "circle" }))),
                react_1.default.createElement("h2", { className: "heading2" }, "Patient Consent Form"),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("p", { className: "questiontext" }, "We do not prescribe any controlled substances, habit-forming medications, or long-acting injectables, with the exception of buprenorphine for those receiving services from Mindful Recovery. We do offer alternatives that can be reviewed at your visit."),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { name: "acknowledgement1", type: "checkbox", checked: service["acknowledgement1"], onChange: handleSelectedChange }),
                        react_1.default.createElement("label", { style: { marginLeft: 10 }, className: "label" }, "I acknowledge"))),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("p", { className: "questiontext" }, "Mindful Care reserves the right to charge a fee in the amount of one hundred dollars ($100) in the event you do not provide at least twenty four (24) hours notice of cancellation prior to your scheduled appointment. Mindful Care also reserves the right to deny future bookings in the event of repeated cancellation of appointments without prior sufficient notice."),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { name: "acknowledgement2", type: "checkbox", checked: service["acknowledgement2"], onChange: handleSelectedChange }),
                        react_1.default.createElement("label", { style: { marginLeft: 10 }, className: "label" }, "I acknowledge"))),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("p", { className: "questiontext" },
                        "Please carefully read the",
                        " ",
                        react_1.default.createElement("a", { style: { color: "blue" } }, "Mindful Care Policies"),
                        "."),
                    react_1.default.createElement("p", { className: "questiontext mt-20" }, "Acknowledgement of Policies"),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { name: "acknowledgement3", type: "checkbox", checked: service["acknowledgement3"], onChange: handleSelectedChange }),
                        react_1.default.createElement("label", { style: { marginLeft: 10 }, className: "label" }, "I acknowledge"))),
                react_1.default.createElement("div", { className: "question" },
                    react_1.default.createElement("p", { className: "questiontext bold" }, "Adult Patient Consent to Care (18 years of age or older)"),
                    react_1.default.createElement("p", { className: "questiontext " },
                        "I hereby authorize Mindful Care by and through its licensed medical professionals to provide me with mental health care services that such professionals deem necessary for diagnosing and/or treating my mental health condition(s). I hereby understand and agree that my sessions with Mindful Care's mental health professionals may involve in-depth questions of a sensitive and personal nature including but not limited to such topics as (my history of diagnosed and/ or undiagnosed mental health disorders and that of my family members, eating disorders, sexual history and/or abuse, history of suicidal and other self-harm tendencies and events, legal history/ history of interactions with law enforcement authorities, and substance use). I acknowledge and agree that if I am uncomfortable with the treatment outlined or line of questioning engaged in during my Mindful Care session that I shall immediately notify my Mindful Care provider of such, so an alternative treatment regime may be utilized for my benefit. I acknowledge and agree that no guarantees and/ or assurances of any kind have been given to me concerning the results of Mindful Care's mental health services including but not limited to the prospective improvement and/or resolution of my present mental health condition. I acknowledge and agree that I have been given the opportunity to ask questions concerning my pursuit of care with Mindful Care, and that all my questions have been answered to my satisfaction and that I am electing to pursue care with Mindful Care entirely of my own volition. My signature below indicates that I have fully read and agree to the aforementioned terms.",
                        " "),
                    react_1.default.createElement("p", { className: "questiontext mt-20" }, "Acknowledgement of Consent"),
                    react_1.default.createElement("div", { className: "radiocontainer" },
                        react_1.default.createElement("input", { name: "acknowledgement4", type: "checkbox", checked: service["acknowledgement4"], onChange: handleSelectedChange }),
                        react_1.default.createElement("label", { style: { marginLeft: 10 }, className: "label" }, "I acknowledge")))),
            react_1.default.createElement("div", { className: "btncontainerintake2" },
                react_1.default.createElement(Button_1.default, { type: "secondary", title: "Back", wide: true, variant: "box", textAlign: "right", navUrl: "/home/intake-form?page=1" }),
                react_1.default.createElement(Button_1.default, { title: "Next", variant: "box", textAlign: "right", 
                    // navUrl={"/home/intake-form?page=3"}
                    onPress: disabled
                        ? () => {
                            alert("Please fill the form completely");
                        }
                        : handleNext })))));
};
exports.default = Page2;
