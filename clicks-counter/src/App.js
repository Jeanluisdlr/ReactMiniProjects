import React from "react";
import "./App.css";
import freeCodeCampLogo from "./images/freeCodeCampLogo.svg";

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
          <button id="click">Click</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
