import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { appointmentRequest } from "./requests.js";

const Page1: React.FC = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState<string>(
    localStorage.getItem("gender") || ""
  );
  const [age, setAge] = useState<string>(localStorage.getItem("age") || "");
  const [pronoun, setPronoun] = useState<string>(
    localStorage.getItem("pronoun") || ""
  );
  const [visitType, setVisitType] = useState<string>(
    localStorage.getItem("visitType") || ""
  );
  const [reasonForVisit, setReasonForVisit] = useState<string>(
    localStorage.getItem("reasonForVisit") || ""
  );
  const [prefferedGender, setPrefferedGender] = useState<string>(
    localStorage.getItem("prefferedGender") || ""
  );
  const [service, setService] = useState<{
    psychatricservice: boolean;
    therapy: boolean;
    substanceUse: boolean;
    notSure: boolean;
  }>({
    psychatricservice: false,
    therapy: false,
    substanceUse: false,
    notSure: false,
  });
  const [appointmentTime, setAppointmentTime] = useState<{
    sunday: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    morning: boolean;
    afternoon: boolean;
    evening: boolean;
  }>({
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

  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("gender", e.target.value);
    setGender(e.target.value);
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("age", e.target.value);

    setAge(e.target.value);
  };

  const handlePronounChange = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("pronoun", e.target.value);

    setPronoun(e.target.value);
  };

  const handleVisitTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("visitType", e.target.value);

    setVisitType(e.target.value);
  };
  const handlePrefGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("prefferedGender", e.target.value);

    setPrefferedGender(e.target.value);
  };

  const handleSelectedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setService((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleAppointmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setAppointmentTime((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
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
      .then(() => {
        navigate("/home/intake-form?page=2");
      })
      .catch(console.log);
  };

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
              <div className="circle blue"></div>
              <div className="bar"></div>
              <div className="circle"></div>
              <div className="bar"></div>
              <div className="circle"></div>
            </div>
          </div>

          <h2 className="heading">
            Welcome to Mindful Care! Take a few moments to fill out some new
            patient paperwork
          </h2>
          <div className="question">
            <p className="questiontext">
              Who are you requesting an appointment for? *
            </p>
            <div className="radiocontainer">
              <input
                value="Myself"
                type="radio"
                checked={age === "Myself"}
                onChange={handleAgeChange}
              />
              <label>Myself (18+ Years Old)</label>
            </div>
            <div className="radiocontainer">
              <input
                value="Minor"
                type="radio"
                checked={age === "Minor"}
                onChange={handleAgeChange}
              />
              <label>A Child / Minor (12-17 Years Old)</label>
            </div>
          </div>

          {age === "A Child / Minor (12-17 Years Old)" ? (
            <div>
              <div className="question">
                <h4 className="questiontext underline">Minor Information</h4>
                <div className="flex-row">
                  <Input
                    label={"First Name"}
                    description={"First Name"}
                    labelHidden
                  />
                  <Input
                    label={"lastname"}
                    description={"Last Name"}
                    labelHidden
                  />
                </div>
              </div>
              <div className="question">
                <h4 className="questiontext">Date Of Birth *</h4>
                <div className="flex-row">
                  <Input type={"date"} labelHidden label={"relationship"} />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="question">
            <p className="questiontext">Gender *</p>
            <div className="radiocontainer">
              <input
                value="radio1"
                type="radio"
                checked={gender === "radio1"}
                onChange={handleGenderChange}
              />
              <label>Male</label>
            </div>
            <div className="radiocontainer">
              <input
                value="radio2"
                type="radio"
                checked={gender === "radio2"}
                onChange={handleGenderChange}
              />
              <label>Female</label>
            </div>
            <div className="radiocontainer">
              <input
                value="radio3"
                type="radio"
                checked={gender === "radio3"}
                onChange={handleGenderChange}
              />
              <label>Non-Binary</label>
            </div>
            <div className="radiocontainer">
              <input
                value="radio4"
                type="radio"
                checked={gender === "radio4"}
                onChange={handleGenderChange}
              />
              <label>Transgender</label>
            </div>
            <div className="radiocontainer">
              <input
                value="radio5"
                type="radio"
                checked={gender === "radio5"}
                onChange={handleGenderChange}
              />
              <label>Other</label>
            </div>
          </div>
          <div className="question">
            <p className="questiontext">Pronouns *</p>
            <div className="radiocontainer">
              <input
                value="he"
                type="radio"
                checked={pronoun === "he"}
                onChange={handlePronounChange}
              />
              <label>He/Him</label>
            </div>
            <div className="radiocontainer">
              <input
                value="she"
                type="radio"
                checked={pronoun === "she"}
                onChange={handlePronounChange}
              />
              <label>She/Her</label>
            </div>
            <div className="radiocontainer">
              <input
                value="they"
                type="radio"
                checked={pronoun === "they"}
                onChange={handlePronounChange}
              />
              <label>They/Them</label>
            </div>
            <div className="radiocontainer">
              <input
                value="other"
                type="radio"
                checked={pronoun === "other"}
                onChange={handlePronounChange}
              />
              <label>Other (Please Specify)</label>
            </div>
          </div>
          <div className="question">
            <p className="questiontext">
              What services are you interested in exploring? Check all that
              apply *
            </p>
            <div className="radiocontainer">
              <input
                id="psychatric-service"
                name="psychatricservice"
                type="checkbox"
                checked={service["psychatricservice"]}
                onChange={handleSelectedChange}
              />
              <label>
                Psychiatric Services (Medication Management) - Ages 12+
              </label>
            </div>
            <div className="radiocontainer">
              <input
                id="therapy"
                name="therapy"
                type="checkbox"
                checked={service["therapy"]}
                onChange={handleSelectedChange}
              />
              <label>
                Therapy Services (Individual and Group Therapy) - Ages 18+
              </label>
            </div>
            <div className="radiocontainer">
              <input
                id="substaceUse"
                name="substanceUse"
                type="checkbox"
                checked={service["substanceUse"]}
                onChange={handleSelectedChange}
              />
              <label>Substance Use Counseling - Ages 18+</label>
            </div>
            <div className="radiocontainer">
              <input
                id="notSure"
                name="notSure"
                type="checkbox"
                checked={service["notSure"]}
                onChange={handleSelectedChange}
              />
              <label>I'm Not Sure</label>
            </div>
          </div>
          <div className="question">
            <p className="questiontext">Preffered Appointment Day/Time * *</p>
            <div className="radiocontainer">
              <input
                id="sunday"
                name="sunday"
                type="checkbox"
                checked={appointmentTime["sunday"]}
                onChange={handleAppointmentChange}
              />
              <label>Sunday</label>
            </div>
            <div className="radiocontainer">
              <input
                id="monday"
                name="monday"
                type="checkbox"
                checked={appointmentTime["monday"]}
                onChange={handleAppointmentChange}
              />
              <label>Monday</label>
            </div>
            <div className="radiocontainer">
              <input
                id="checkbox3"
                name="tuesday"
                type="checkbox"
                checked={appointmentTime["tuesday"]}
                onChange={handleAppointmentChange}
              />
              <label>Tuesday</label>
            </div>
            <div className="radiocontainer">
              <input
                id="checkbox4"
                name="wednesday"
                type="checkbox"
                checked={appointmentTime["wednesday"]}
                onChange={handleAppointmentChange}
              />
              <label>Wednesday</label>
            </div>
            <div className="radiocontainer">
              <input
                id="checkbox5"
                name="thursday"
                type="checkbox"
                checked={appointmentTime["thursday"]}
                onChange={handleAppointmentChange}
              />
              <label>Thursday</label>
            </div>
            <div className="radiocontainer">
              <input
                id="checkbox6"
                name="friday"
                type="checkbox"
                checked={appointmentTime["friday"]}
                onChange={handleAppointmentChange}
              />
              <label>Friday</label>
            </div>
            <div style={{ height: 40 }}></div>

            <div className="radiocontainer">
              <input
                name="morning"
                type="checkbox"
                checked={appointmentTime["morning"]}
                onChange={handleAppointmentChange}
              />
              <label>Morning</label>
            </div>
            <div className="radiocontainer">
              <input
                name="afternoon"
                type="checkbox"
                checked={appointmentTime["afternoon"]}
                onChange={handleAppointmentChange}
              />
              <label>Afternoon</label>
            </div>
            <div className="radiocontainer">
              <input
                name="evening"
                type="checkbox"
                checked={appointmentTime["evening"]}
                onChange={handleAppointmentChange}
              />
              <label>Evening</label>
            </div>
          </div>
          <div className="question">
            <p className="questiontext">Preffered Visit Type *</p>
            <div className="radiocontainer">
              <input
                value="virtual"
                type="radio"
                checked={visitType === "virtual"}
                onChange={handleVisitTypeChange}
              />
              <label>Virtual</label>
            </div>
            <div className="radiocontainer">
              <input
                value="in-person"
                type="radio"
                checked={visitType === "in-person"}
                onChange={handleVisitTypeChange}
              />
              <label>In-Person</label>
            </div>
            <div className="radiocontainer">
              <input
                value="no-preference"
                type="radio"
                checked={visitType === "no-preference"}
                onChange={handleVisitTypeChange}
              />
              <label>No Preference</label>
            </div>
          </div>
          <div className="question">
            <p className="questiontext">Preffered Provided Gender *</p>
            <div className="radiocontainer">
              <input
                value="Male"
                type="radio"
                checked={prefferedGender === "Male"}
                onChange={handlePrefGenderChange}
              />
              <label>Male</label>
            </div>
            <div className="radiocontainer">
              <input
                value="Female"
                type="radio"
                checked={prefferedGender === "Female"}
                onChange={handlePrefGenderChange}
              />
              <label>Female</label>
            </div>
            <div className="radiocontainer">
              <input
                value="No-Preference"
                type="radio"
                checked={prefferedGender === "No-Preference"}
                onChange={handlePrefGenderChange}
              />
              <label>No-Preference</label>
            </div>
          </div>
          <div className="question">
            <h4 className="questiontext">
              What is the reason for your visit *
            </h4>
            <textarea
              value={reasonForVisit}
              onChange={(e) => {
                localStorage.setItem("reasonForVisit", e.target.value);
                setReasonForVisit(e.target.value);
              }}
              rows={5}
              cols={80}
            ></textarea>
          </div>
          <div className="flex-other">
            <img
              src={require("../../../assets/hand.svg").default}
              width={24}
              height={24}
              color="white"
            />
            <p className="infotext-other">
              Returning patients, please email <b>support@mindful.care</b> or
              call us at <b>516-505-7200</b> to schedule an appointment.
            </p>
          </div>
          <div className="question">
            <h4 className="questiontext">Emergency Contact *</h4>
            <div className="flex-row">
              <Input
                label={"firstname"}
                description={"First Name"}
                labelHidden
              />
              <Input label={"lastname"} description={"Last Name"} labelHidden />
            </div>
          </div>
          <div className="question">
            <h4 className="questiontext">
              Relationship to Emergency Contact *
            </h4>
            <div className="flex-row">
              <Input labelHidden label={"relationship"} />
            </div>
          </div>
          <div className="question">
            <h4 className="questiontext">Emergency Contact Phone Number *</h4>
            <div className="flex-row">
              <Input
                label={"emergencyphone"}
                inputType={"phone"}
                wide
                width={"220%"}
                labelHidden
              />
            </div>
          </div>
        </div>
        <div className="btncontainerintake">
          <Button
            title={"Next"}
            wide
            variant={"box"}
            textAlign={"right"}
            // navUrl={"/home/intake-form?page=2"}
            onPress={() => handleNext()}
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
