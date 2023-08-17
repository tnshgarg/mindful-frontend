import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { appointmentInsuranceInfo } from "./requests.js";

const Page3 = () => {
  const navigate = useNavigate();
  const [isInsurance, setIsInsurance] = useState<string>("");
  const [isBill, setIsBill] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [frontImage, setFrontImage] = useState<any>();
  const [backImage, setBackImage] = useState<any>();

  const handleInsuranceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsInsurance(e.target.value);
  };

  const handleBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsBill(e.target.value);
  };

  const handleNext = () => {
    const formData = new FormData();
    formData.append("frontImage", frontImage);
    formData.append("backImage", backImage);
    formData.append("isUsingInsurance", isInsurance);
    formData.append("isSelfPayPayment", isBill);
    formData.append(
      "insuranceCompany",
      localStorage.getItem("insurancecompany") || ""
    );
    formData.append(
      "subscriberMemberId",
      localStorage.getItem("subscribermemberid") || ""
    );

    appointmentInsuranceInfo(formData)
      .then(() => navigate("/success"))
      .catch(console.log);
  };

  useEffect(() => {
    if (isInsurance !== "") {
      if (isInsurance === "Yes") {
        if (
          localStorage.getItem("insurancecompany") &&
          localStorage.getItem("insurancecompany")
        ) {
          setDisabled(false);
        }
      } else {
        if (isBill !== "") {
          setDisabled(false);
        }
      }
    } else setDisabled(true);
  }, [isInsurance, isBill]);

  return (
    <div>
      <div className="parent-intake">
        <div className="intake-container">
          <div className="logoContainer">
            <img
              src={require("../../../assets/mainlogo.svg").default}
              width={300}
              height={100}
              style={{ objectFit: "contain" }}
              alt=""
            />
          </div>
          <hr style={{ backgroundColor: "blue", marginTop: 30 }}></hr>
          <div className="shape-parent">
            <div className="flex-shape">
              <p>Appointment Info</p>
              <p>Consent</p>
              <p>Insurance Info</p>
            </div>
            <div className="shapeContainer">
              <div className="circle blue align-center">
                <img
                  src={require("../../../assets/check.svg").default}
                  width={"50%"}
                  height={"100%"}
                  style={{ objectFit: "contain", alignItems: "center" }}
                />
              </div>
              <div className="bar blue"></div>
              <div className="circle blue align-center">
                <img
                  src={require("../../../assets/check.svg").default}
                  width={"50%"}
                  height={"100%"}
                  style={{ objectFit: "contain", alignItems: "center" }}
                />
              </div>
              <div className="bar blue"></div>
              <div className="circle blue"></div>
            </div>
          </div>

          <h2 className="heading2">Patient Insurance Information</h2>
          <div className="question">
            <p className="questiontext">
              Are you using insurance for this visit? *
            </p>
            <div className="radiocontainer">
              <input
                value="Yes"
                type="radio"
                checked={isInsurance === "Yes"}
                onChange={handleInsuranceChange}
              />
              <label>Yes</label>
            </div>
            <div className="radiocontainer">
              <input
                value="No"
                type="radio"
                checked={isInsurance === "No"}
                onChange={handleInsuranceChange}
              />
              <label>No</label>
            </div>
          </div>
          {isInsurance === "Yes" ? (
            <div style={{ width: "100%" }}>
              <div className="question">
                <div className="flex-row2">
                  <Input
                    options={["Aetna", "Cigna", "Humana"]}
                    label={"Insurance Company"}
                  />
                  <Input label={"Subscriber Member ID"} />
                </div>
              </div>
              <div>
                <p className="question bold">
                  Before we can schedule your appointment, we will need a photo
                  of the front and back of the insurance card you would like to
                  use.
                </p>
                <div className="flex-row question">
                  <input
                    type="file"
                    className="fileinput"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      e.target.files &&
                      e.target.files.length > 0 &&
                      setFrontImage(e.target.files[0])
                    }
                  />
                  <input
                    className="fileinput"
                    type="file"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      e.target.files &&
                      e.target.files.length > 0 &&
                      setBackImage(e.target.files[0])
                    }
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="question">
              <p className="questiontext">
                By choosing to not bill an insurance company, you consent to be
                seen as a self pay patient. This agreement is voluntary. By
                clicking “Accept” you are consenting to being charged as a self
                pay patient and are responsible for payment of service. *
              </p>
              <div className="radiocontainer">
                <input
                  value="accept"
                  type="radio"
                  checked={isBill === "accept"}
                  onChange={handleBillChange}
                />
                <label>Accept</label>
              </div>
              <div className="radiocontainer">
                <input
                  value="decline"
                  type="radio"
                  checked={isBill === "decline"}
                  onChange={handleBillChange}
                />
                <label>Decline</label>
              </div>
              <div className="radiocontainer">
                <input
                  value="no-insurance"
                  type="radio"
                  checked={isBill === "no-insurance"}
                  onChange={handleBillChange}
                />
                <label>I do not have insurance</label>
              </div>
            </div>
          )}
        </div>
        <div className="btncontainerintake2">
          <Button
            type={"secondary"}
            title={"Back"}
            wide
            variant={"box"}
            textAlign={"right"}
            navUrl={"/home/intake-form?page=1"}
          />
          <Button
            title={"Next"}
            variant={"box"}
            textAlign={"right"}
            onPress={
              disabled
                ? () => {
                    alert("Please fill the form completely");
                  }
                : handleNext
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Page3;
