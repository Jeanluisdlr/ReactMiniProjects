import React from "react";
import "./App.css";
import freeCodeCampLogo from "./images/freeCodeCampLogo.svg";
import Button from "./components/buttons";
function App() {
  return (
    <div className="App">
      <div className="principal-container">
        <img
          id="freeCodeCamp-logo"
          src={freeCodeCampLogo}
          alt="freeCodeCamp Logo"
        />
        <div className="display-counter">0</div>
        <div className="buttons">
          <Button buttonFunction="Click" />
          <Button buttonFunction="Reset" />
        </div>
      </div>
    </div>
  );
}

export default App;
