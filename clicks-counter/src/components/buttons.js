import React from "react";
import "../stylesheets/buttons-component.css";

const Button = ({ label, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
