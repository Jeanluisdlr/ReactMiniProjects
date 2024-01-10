import React from "react";
import "./App.css";
import freeCodeCampLogo from "./images/freeCodeCampLogo.svg";
import useCounter from "./Hooks/counter";
import Button from "./components/buttons";
import { useState } from "react";

function App() {
  const { increment, reset, count } = useCounter();

  return (
    <div className="App">
      <div className="principal-container">
        <img
          id="freeCodeCamp-logo"
          src={freeCodeCampLogo}
          alt="freeCodeCamp Logo"
        />
        <div className="display-counter">
          <p>{String(count)}</p>
        </div>

        <Button className="click-button" label="Click" onClick={increment} />
        <Button className="reset-button" label="Reset" onClick={reset} />
      </div>
    </div>
  );
}

export default App;
