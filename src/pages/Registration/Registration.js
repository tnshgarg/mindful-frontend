import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./Registration.css";
import { registration } from "./requests";
var Registration = function () {
    var navigate = useNavigate();
    var handleNext = function () {
        registration({
            dob: localStorage.getItem("dateofbirth"),
            first_name: localStorage.getItem("firstname"),
            last_name: localStorage.getItem("lastname"),
            email: localStorage.getItem("email"),
            insurance: localStorage.getItem("insurance"),
            password: localStorage.getItem("password"),
            phone: localStorage.getItem("phone"),
            state: localStorage.getItem("state"),
        })
            .then(function () { return navigate("/home/intake-form?page=1"); })
            .catch(console.log);
    };
    return (React.createElement("div", { className: "parent" },
        React.createElement("div", { className: "flex" },
            React.createElement("img", { src: require("../../assets/info.svg").default, width: 24, height: 24, color: "blue" }),
            React.createElement("p", { className: "infotext" },
                "Returning patients, please email ",
                React.createElement("b", null, "support@mindful.care"),
                " or call us at ",
                React.createElement("b", null, "516-505-7200"),
                " to schedule an appointment.")),
        React.createElement("div", { style: { marginLeft: "auto", marginRight: "auto" } },
            React.createElement("h1", { style: {
                    color: "black",
                    fontSize: 45,
                    fontFamily: "Lora",
                    textAlign: "center",
                    marginBottom: 20,
                } }, "We welcome you with open arms."),
            React.createElement("h3", { style: {
                    color: "gray",
                    fontSize: 18,
                    fontFamily: "Montserrat",
                    textAlign: "center",
                    marginBottom: 30,
                } }, "Sign up to get started scheduling an appointment.")),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "halfContainer" },
                React.createElement(Input, { label: "First Name" }),
                React.createElement(Input, { label: "Last Name" })),
            React.createElement("div", { className: "halfContainer others" },
                React.createElement(Input, { inputType: "phone", label: "Phone" }),
                React.createElement(Input, { type: "date", label: "Date Of Birth" })),
            React.createElement("div", { className: "halfContainer others" },
                React.createElement(Input, { options: ["Florida", "New York", "Chicago"], label: "State" }),
                React.createElement(Input, { options: ["No Insurance (Self Pay)", "Others"], label: "Insurance" })),
            React.createElement("div", { className: "full others" },
                React.createElement(Input, { wide: true, label: "Email", placeholder: "your@email.com" })),
            React.createElement("i", { style: { fontSize: 11, fontFamily: "Montserrat" } }, "(Note: this will be used when logging into your patient portal)"),
            React.createElement("div", { className: "halfContainer others" },
                React.createElement(Input, { label: "Password", secureTextEntry: true }),
                React.createElement(Input, { label: "Confirm Password", secureTextEntry: true })),
            React.createElement("p", { style: { fontSize: 11, color: "gray", marginTop: 10 } }, "Passwords must be atleast 8 characters long"),
            React.createElement("hr", { style: { marginTop: 50 } }),
            React.createElement("div", { style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 15,
                } },
                React.createElement("input", { type: "checkbox" }),
                React.createElement("p", { style: { fontSize: 12, fontFamily: "Montserrat", marginLeft: 15 } },
                    "I agree to Mindful Care's",
                    " ",
                    React.createElement("a", { style: { color: "blue" } }, "terms of use"),
                    " and",
                    " ",
                    React.createElement("a", { style: { color: "blue" } }, "privacy policy"),
                    ".")),
            React.createElement("div", { style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                } },
                React.createElement(Button, { title: "Back", variant: "box", type: "secondary" }),
                React.createElement(Button, { wide: true, title: "Sign Up", variant: "box", onPress: handleNext })))));
};
export default Registration;
