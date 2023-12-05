import React from "react";
import "../stylesheets/button.css";
const Button = ({ className, label, onclick }) => {
  return (
    <button className={className} onClick={onclick}>
      {label}
    </button>
  );
};

export default Button;
