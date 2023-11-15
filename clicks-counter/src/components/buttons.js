import React from "react";
import "../stylesheets/buttons-component.css";

function Button(props) {
  return <button className={`button-${props.variant}`}>{props.label}</button>;
}

export default Button;
