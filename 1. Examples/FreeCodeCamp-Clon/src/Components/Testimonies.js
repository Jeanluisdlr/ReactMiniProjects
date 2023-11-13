import React from "react";
import "../Stylesheets/testimonies.css";

function Testimonies(props) {
  return (
    <div className="testimony-container">
      <img
        src={require(`../Images/imagen-${props.image}.png`)}
        alt="student image"
      />
      <div className="card-text-container">
        <p className="name-country">
          <strong>{props.name}</strong> en {props.country}
        </p>
        <p className="profession-company">
          {props.profession} en <strong>{props.company}</strong>
        </p>
        <p className="text-testimony">{props.testimony}</p>
      </div>
    </div>
  );
}

export default Testimonies;
