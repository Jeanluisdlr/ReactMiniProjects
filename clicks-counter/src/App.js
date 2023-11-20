import React from "react";
import "./App.css";
import freeCodeCampLogo from "./images/freeCodeCampLogo.svg";
import Counter from "./Hooks/counter";
import Button from "./components/buttons";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 10000000);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="principal-container">
        <img
          id="freeCodeCamp-logo"
          src={freeCodeCampLogo}
          alt="freeCodeCamp Logo"
        />
        <div className="display-counter">
          <p>{count.toLocaleString()}</p>
        </div>

        <Button className="click-button" label="Click" onClick={increment} />
        <Button className="reset-button" label="Reset" onClick={reset} />
      </div>
    </div>
  );
}

export default App;
