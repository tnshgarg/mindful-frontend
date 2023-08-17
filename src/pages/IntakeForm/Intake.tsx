import React from "react";
import { useLocation } from "react-router-dom";
import "./Intake.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";

const Intake: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page") || "1"; // Default to '1' if no page is provided

  switch (page) {
    case "1":
      return <Page1 />;
    case "2":
      return <Page2 />;
    case "3":
      return <Page3 />;
    default:
      return <Page1 />;
  }
};

export default Intake;
