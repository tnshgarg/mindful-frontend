import React, { useEffect, useState } from "react";
import "./Input.css";

interface InputProps {
  label: string;
  description?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  type?: string;
  options?: string[];
  wide?: boolean;
  width?: string;
  inputType?: "phone" | string;
  labelHidden?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  description,
  placeholder,
  secureTextEntry,
  type,
  options,
  wide,
  width,
  inputType,
  labelHidden,
}) => {
  const identifier = label.replace(/\s+/g, "").toLowerCase();
  const [value, setValue] = useState(localStorage.getItem(identifier) || "");

  useEffect(() => {
    localStorage.setItem(identifier, value);
  }, [value, setValue]);

  const handleChange = (e: any) => {
    if (inputType == "phone") {
      const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
      let formattedNumber = "";

      if (value.length <= 3) {
        formattedNumber = `(${value}`;
      } else if (value.length <= 6) {
        formattedNumber = `(${value.slice(0, 3)})-${value.slice(3)}`;
      } else {
        formattedNumber = `(${value.slice(0, 3)})-${value.slice(
          3,
          6
        )}-${value.slice(6, 10)}`;
      }
      localStorage.setItem(identifier, formattedNumber);
      setValue(formattedNumber);
    } else {
      setValue(e.target.value);
    }
  };

  return (
    <div
      style={description ? { marginTop: 21 } : {}}
      className="inputContainer"
    >
      {!labelHidden ? <label className="label">{label}</label> : <></>}
      <div
        className="inputbox"
        style={wide ? { width: width || "106%" } : { width: width }}
      >
        {options ? (
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ width: "100%" }}
          >
            {options.map((option) => (
              <option style={{ width: "100%" }} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={secureTextEntry ? "password" : type || "email"}
            placeholder={placeholder || ""}
            value={value}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        )}
      </div>
      {description ? <p className="description">{description}</p> : <></>}
    </div>
  );
};

export default Input;
