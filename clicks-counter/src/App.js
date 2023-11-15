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
        <Button variant="primary" label="Click" />
        <Button variant="secondary" label="Reset" />
      </div>
    </div>
  );
}

export default App;
