import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
  title: string;
  variant?: "box" | string;
  navUrl?: string;
  type?: "secondary" | string;
  wide?: boolean;
  textAlign?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  navUrl,
  type,
  wide,
  textAlign,
  onPress,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navUrl) {
      navigate(navUrl);
    }
  };

  return (
    <div style={{ textAlign: textAlign || "center", marginTop: 50 }}>
      <button
        className="customButton"
        style={
          type == "secondary"
            ? {
                backgroundColor: "#F5F5F5",
                color: "blue",
                borderRadius: variant == "box" ? 10 : 20,
                height: variant == "box" ? 60 : 40,
              }
            : {
                borderRadius: variant == "box" ? 10 : 20,
                height: variant == "box" ? 50 : 40,
                width: wide ? 240 : 100,
              }
        }
        onClick={onPress || handleClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
