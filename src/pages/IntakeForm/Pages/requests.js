import axios from "axios";

export const appointmentRequest = async ({
  appointmentFor,
  gender,
  pronouns,
  servicesInterestedIn,
  prefferedAppointmentDateAndTime,
  prefferedVisitType,
  prefferedProvidedGender,
  reasonForVisit,
  emergencyContactFirstName,
  emergencyContactLastName,
  emergencyContactPhoneNumber,
  relationshipWithEmergencyContact,
}) => {
  await axios
    .post("http://127.0.0.1:8000/appointment-info/", {
      appointmentFor,
      gender,
      pronouns,
      servicesInterestedIn,
      prefferedAppointmentDateAndTime,
      prefferedVisitType,
      prefferedProvidedGender,
      reasonForVisit,
      emergencyContactFirstName,
      emergencyContactLastName,
      relationshipWithEmergencyContact,
      emergencyContactPhoneNumber,
    })
    .then((response) => {
      console.log("Response: ", response);
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const appointmentConsent = async ({
  acknowledgement1,
  acknowledgement2,
  acknowledgement3,
  acknowledgement4,
}) => {
  await axios
    .post("http://127.0.0.1:8000/appointment-consent/", {
      acknowledgement1,
      acknowledgement2,
      acknowledgement3,
      acknowledgement4,
    })
    .then((response) => {
      console.log("Response: ", response);
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const appointmentInsuranceInfo = async (formData) => {
  await axios
    .post("http://127.0.0.1:8000/insurance-info/", formData)
    .then((response) => {
      console.log("Response: ", response);
      return response;
    })
    .catch((error) => {
      return error;
    });
};
