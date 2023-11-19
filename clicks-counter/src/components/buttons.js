import React from "react";
import "../stylesheets/buttons-component.css";

const Button = ({ label, className }) => {
  return <button className={className}>{label}</button>;
};

export default Button;
