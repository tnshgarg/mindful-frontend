import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./Registration.css";
import { registration } from "./requests";

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const handleNext = () => {
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
      .then(() => navigate("/home/intake-form?page=1"))
      .catch(console.log);
  };

  return (
    <div className="parent">
      <div className="flex">
        <img
          src={require("../../assets/info.svg").default}
          width={24}
          height={24}
          color="blue"
        />
        <p className="infotext">
          Returning patients, please email <b>support@mindful.care</b> or call
          us at <b>516-505-7200</b> to schedule an appointment.
        </p>
      </div>
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <h1
          style={{
            color: "black",
            fontSize: 45,
            fontFamily: "Lora",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          We welcome you with open arms.
        </h1>
        <h3
          style={{
            color: "gray",
            fontSize: 18,
            fontFamily: "Montserrat",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Sign up to get started scheduling an appointment.
        </h3>
      </div>
      <div className="container">
        <div className="halfContainer">
          <Input label={"First Name"} />
          <Input label={"Last Name"} />
        </div>
        <div className="halfContainer others">
          <Input inputType={"phone"} label={"Phone"} />
          <Input type="date" label={"Date Of Birth"} />
        </div>
        <div className="halfContainer others">
          <Input options={["Florida", "New York", "Chicago"]} label={"State"} />
          <Input
            options={["No Insurance (Self Pay)", "Others"]}
            label={"Insurance"}
          />
        </div>
        <div className="full others">
          <Input wide label={"Email"} placeholder={"your@email.com"} />
        </div>
        <i style={{ fontSize: 11, fontFamily: "Montserrat" }}>
          (Note: this will be used when logging into your patient portal)
        </i>
        <div className="halfContainer others">
          <Input label={"Password"} secureTextEntry />
          <Input label={"Confirm Password"} secureTextEntry />
        </div>
        <p style={{ fontSize: 11, color: "gray", marginTop: 10 }}>
          Passwords must be atleast 8 characters long
        </p>

        <hr style={{ marginTop: 50 }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <input type="checkbox" />
          <p style={{ fontSize: 12, fontFamily: "Montserrat", marginLeft: 15 }}>
            I agree to Mindful Care's{" "}
            <a style={{ color: "blue" }}>terms of use</a> and{" "}
            <a style={{ color: "blue" }}>privacy policy</a>.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button title={"Back"} variant={"box"} type="secondary" />
          <Button wide title={"Sign Up"} variant={"box"} onPress={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Registration;
