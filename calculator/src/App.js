import React from "react";
import "./App.css";
import Button from "./components/button";
import freeCodeCampLogo from "./images/freeCodeCampLogo.svg";
import UseShowDisplay from "./hooks/showDisplay";
function App() {
  const { expression, printButton, clearDisplay, evaluation } =
    UseShowDisplay();
  return (
    <div className="App">
      <div className="principal-container">
        <img
          src={freeCodeCampLogo}
          id="freeCodeCamp-logo"
          alt="freeCodeCamp Logo"
        />
        <div className="calculator-container">
          <div className="display">{expression}</div>
          <div className="numbers-container">
            <Button label="7" onclick={printButton} />
            <Button label="8" onclick={printButton} />
            <Button label="9" onclick={printButton} />
            <Button label="/" onclick={printButton} />
            <Button label="4" onclick={printButton} />
            <Button label="5" onclick={printButton} />
            <Button label="6" onclick={printButton} />
            <Button label="*" onclick={printButton} />
            <Button label="1" onclick={printButton} />
            <Button label="2" onclick={printButton} />
            <Button label="3" onclick={printButton} />
            <Button label="-" onclick={printButton} />
            <Button label="." onclick={printButton} />
            <Button label="0" onclick={printButton} />
            <Button label="=" onclick={evaluation} />
            <Button label="+" onclick={printButton} />
          </div>
          <div className="clear-button-section">
            <Button label="Clear" onclick={clearDisplay} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
