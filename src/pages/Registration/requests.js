import axios from "axios";

export const registration = async ({
  first_name,
  last_name,
  phone,
  dob,
  state,
  insurance,
  email,
  password,
}) => {
  await axios
    .post("http://127.0.0.1:8000/register/", {
      first_name,
      last_name,
      phone,
      dob,
      state,
      insurance,
      email,
      password,
    })
    .then((response) => {
      console.log("Response: ", response);
      return response;
    })
    .catch((error) => {
      return error;
    });
};
