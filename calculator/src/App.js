import "./App.css";
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
          <div className="numbers-container"></div>
          <div className="clear-button"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
