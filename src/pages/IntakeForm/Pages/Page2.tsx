import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { appointmentConsent } from "./requests.js";

const Page2: React.FC = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [service, setService] = useState<{
    acknowledgement1: boolean;
    acknowledgement2: boolean;
    acknowledgement3: boolean;
    acknowledgement4: boolean;
  }>({
    acknowledgement1: false,
    acknowledgement2: false,
    acknowledgement3: false,
    acknowledgement4: false,
  });

  const handleSelectedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setService((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleNext = () => {
    appointmentConsent(service)
      .then(() => navigate("/home/intake-form?page=3"))
      .catch(console.log);
  };

  useEffect(() => {
    if (
      service.acknowledgement1 &&
      service.acknowledgement2 &&
      service.acknowledgement3 &&
      service.acknowledgement4
    )
      setDisabled(false);
    else setDisabled(true);
  }, [service]);

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
              <div className="circle blue "></div>
              <div className="bar"></div>
              <div className="circle"></div>
            </div>
          </div>

          <h2 className="heading2">Patient Consent Form</h2>
          <div className="question">
            <p className="questiontext">
              We do not prescribe any controlled substances, habit-forming
              medications, or long-acting injectables, with the exception of
              buprenorphine for those receiving services from Mindful Recovery.
              We do offer alternatives that can be reviewed at your visit.
            </p>
            <div className="radiocontainer">
              <input
                name="acknowledgement1"
                type="checkbox"
                checked={service["acknowledgement1"]}
                onChange={handleSelectedChange}
              />
              <label style={{ marginLeft: 10 }} className="label">
                I acknowledge
              </label>
            </div>
          </div>
          <div className="question">
            <p className="questiontext">
              Mindful Care reserves the right to charge a fee in the amount of
              one hundred dollars ($100) in the event you do not provide at
              least twenty four (24) hours notice of cancellation prior to your
              scheduled appointment. Mindful Care also reserves the right to
              deny future bookings in the event of repeated cancellation of
              appointments without prior sufficient notice.
            </p>
            <div className="radiocontainer">
              <input
                name="acknowledgement2"
                type="checkbox"
                checked={service["acknowledgement2"]}
                onChange={handleSelectedChange}
              />
              <label style={{ marginLeft: 10 }} className="label">
                I acknowledge
              </label>
            </div>
          </div>
          <div className="question">
            <p className="questiontext">
              Please carefully read the{" "}
              <a style={{ color: "blue" }}>Mindful Care Policies</a>.
            </p>
            <p className="questiontext mt-20">Acknowledgement of Policies</p>
            <div className="radiocontainer">
              <input
                name="acknowledgement3"
                type="checkbox"
                checked={service["acknowledgement3"]}
                onChange={handleSelectedChange}
              />
              <label style={{ marginLeft: 10 }} className="label">
                I acknowledge
              </label>
            </div>
          </div>
          <div className="question">
            <p className="questiontext bold">
              Adult Patient Consent to Care (18 years of age or older)
            </p>
            <p className="questiontext ">
              I hereby authorize Mindful Care by and through its licensed
              medical professionals to provide me with mental health care
              services that such professionals deem necessary for diagnosing
              and/or treating my mental health condition(s). I hereby understand
              and agree that my sessions with Mindful Care's mental health
              professionals may involve in-depth questions of a sensitive and
              personal nature including but not limited to such topics as (my
              history of diagnosed and/ or undiagnosed mental health disorders
              and that of my family members, eating disorders, sexual history
              and/or abuse, history of suicidal and other self-harm tendencies
              and events, legal history/ history of interactions with law
              enforcement authorities, and substance use). I acknowledge and
              agree that if I am uncomfortable with the treatment outlined or
              line of questioning engaged in during my Mindful Care session that
              I shall immediately notify my Mindful Care provider of such, so an
              alternative treatment regime may be utilized for my benefit. I
              acknowledge and agree that no guarantees and/ or assurances of any
              kind have been given to me concerning the results of Mindful
              Care's mental health services including but not limited to the
              prospective improvement and/or resolution of my present mental
              health condition. I acknowledge and agree that I have been given
              the opportunity to ask questions concerning my pursuit of care
              with Mindful Care, and that all my questions have been answered to
              my satisfaction and that I am electing to pursue care with Mindful
              Care entirely of my own volition. My signature below indicates
              that I have fully read and agree to the aforementioned terms.{" "}
            </p>
            <p className="questiontext mt-20">Acknowledgement of Consent</p>
            <div className="radiocontainer">
              <input
                name="acknowledgement4"
                type="checkbox"
                checked={service["acknowledgement4"]}
                onChange={handleSelectedChange}
              />
              <label style={{ marginLeft: 10 }} className="label">
                I acknowledge
              </label>
            </div>
          </div>
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
            // navUrl={"/home/intake-form?page=3"}
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

export default Page2;
