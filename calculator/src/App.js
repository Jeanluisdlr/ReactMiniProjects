import React from "react";
import "./App.css";
import Button from "./components/button";
import freeCodeCampLogo from "./images/freeCodeCampLogo.svg";

function App() {
  return (
    <div className="App">
      <div className="principal-container">
        <img
          src={freeCodeCampLogo}
          id="freeCodeCamp-logo"
          alt="freeCodeCamp Logo"
        />
        <div className="calculator-container">
          <div className="display"></div>
          <div className="numbers-container">
            <Button className="number" label="7" />
            <Button className="number" label="8" />
            <Button className="number" label="9" />
            <Button className="operator" label="/" />
            <Button className="number" label="4" />
            <Button className="number" label="5" />
            <Button className="number" label="6" />
            <Button className="operator" label="*" />
            <Button className="number" label="1" />
            <Button className="number" label="2" />
            <Button className="number" label="3" />
            <Button className="operator" label="-" />
            <Button className="number" label="." />
            <Button className="number" label="0" />
            <Button className="number" label="=" />
            <Button className="operator" label="+" />
          </div>
          <div className="clear-button-section">
            <Button className="clear-button" label="Clear" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
