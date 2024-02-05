import React from "react";
import { useState } from "react";
import "../stylesheets/percentageBar.css";

const PercentageBar = (props) => {
  const [percentage, setPercentage] = useState(0);

  const updateBar = (e) => {
    let inputValue = parseFloat(e.target.value);
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 100) {
      setPercentage(inputValue);
    }
  };

  return (
    <div className="bar-principal-container">
      <h2>Progress bar</h2>
      <progress max={100} value={percentage} label="ddddd" />

      <div className="input-percentage-container">
        <label>Input Percentage: </label>
        <input
          name="input"
          type="number"
          value={percentage}
          max={100}
          min={0}
          onChange={updateBar}
        />
      </div>
    </div>
  );
};

export default PercentageBar;
