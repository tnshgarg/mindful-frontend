import React from "react";
import Button from "../../components/Button/Button";

const PreRegistration: React.FC = () => {
  return (
    <div
      style={{
        width: "60vw",
        height: "100vh",
        padding: 70,
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
      }}
    >
      <img
        src={require("../../assets/logo.svg").default}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        width={70}
        height={70}
      />
      <h1
        style={{
          textAlign: "center",
          fontSize: 40,
          fontFamily: "Lora",
          fontWeight: 800,
          marginTop: 25,
        }}
      >
        Let's see if Mindful Care meets your needs
      </h1>
      <div style={{ marginTop: 40 }}>
        <h3
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            marginLeft: 60,
            fontSize: 24,
          }}
        >
          Mindful Care may be the right choice if you're seeking:
        </h3>
        <div
          style={{
            marginLeft: 60,
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            width={20}
            height={20}
            src={require("../../assets/greenCheck.svg").default}
          />
          <h4
            style={{
              fontWeight: 600,
              fontFamily: "Montserrat",
              marginLeft: 10,
            }}
          >
            Safe and effective medication and symptom stabilization.
          </h4>
        </div>
        <div
          style={{
            marginLeft: 60,
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            width={20}
            height={20}
            src={require("../../assets/greenCheck.svg").default}
          />
          <h4
            style={{
              fontWeight: 600,
              fontFamily: "Montserrat",
              marginLeft: 10,
            }}
          >
            Micro Individual or group therapy with licensed therapists.
          </h4>
        </div>
        <div
          style={{
            marginLeft: 60,
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            width={20}
            height={20}
            src={require("../../assets/greenCheck.svg").default}
          />
          <h4
            style={{
              fontWeight: 600,
              fontFamily: "Montserrat",
              marginLeft: 10,
            }}
          >
            Micro therapy and medication for opioid or alcohol use.
          </h4>
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <h3
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            marginLeft: 60,
            fontSize: 24,
          }}
        >
          Mindful Care{" "}
          <span style={{ textDecorationLine: "underline" }}>
            does not provide
          </span>{" "}
          the following:
        </h3>
        <div
          style={{
            marginLeft: 60,
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <img
            width={20}
            height={20}
            src={require("../../assets/redCross.svg").default}
          />
          <h4
            style={{
              fontWeight: 600,
              fontFamily: "Montserrat",
              marginLeft: 10,
            }}
          >
            Evaluations for court-ordered treatment, certification of
            disability, fitness for duty evaluations or firearms clearance.
          </h4>
        </div>
        <div
          style={{
            marginLeft: 60,
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <img
            width={20}
            height={20}
            src={require("../../assets/redCross.svg").default}
          />
          <h4
            style={{
              fontWeight: 600,
              fontFamily: "Montserrat",
              marginLeft: 10,
            }}
          >
            Prescriptions for controlled substances, habit-forming medications
            or long-acting injectables, with the exception of buprenorphine for
            those receiving services from Mindful Recovery. We do offer safer
            alternatives that can be discussed at your visit. Please review our{" "}
            <a
              href="https://google.com"
              style={{ color: "blue", textDecorationLine: "underline" }}
            >
              medication policy
            </a>{" "}
            for more information.
          </h4>
        </div>
        <div
          style={{
            marginLeft: 60,
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <img
            width={20}
            height={20}
            src={require("../../assets/redCross.svg").default}
          />
          <h4
            style={{
              fontWeight: 600,
              fontFamily: "Montserrat",
              marginLeft: 10,
            }}
          >
            Services for minors or dependents under the age of 12.
          </h4>
        </div>
      </div>
      <Button
        variant={"box"}
        title={"Continue to sign-up"}
        navUrl={"/registration"}
        wide
      />
    </div>
  );
};

export default PreRegistration;
