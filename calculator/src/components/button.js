import React from "react";
import "../stylesheets/button.css";
const Button = ({ label, onclick }) => {
  return (
    <button
      className={
        !isNaN(label)
          ? "number"
          : label === "Clear"
          ? "clear-button"
          : label === "."
          ? "dot"
          : label === "="
          ? "equal"
          : "operator"
      }
      onClick={() => onclick(label)}
    >
      {label}
    </button>
  );
};

export default Button;
