import React from "react";
import Button from "../../components/Button/Button";

const Home: React.FC = () => {
  return (
    <Button
      variant="box"
      wide
      title={"Get Started"}
      navUrl={"/pre-registration"}
    />
  );
};

export default Home;
