import React from "react";
import "./App.css";
import freeCodeCampLogo from "./Images/FreeCodeCamp_logo.svg";
import Testimonies from "./Components/Testimonies.js";
import StudentData from "./Students.json";

function App() {
  return (
    <div className="App">
      <div id="logo-container">
        <img id="top-logo" src={freeCodeCampLogo} alt="FreeCodeCamp Logo" />
      </div>
      <div className="principal-container">
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
        <div className="testimonies">
          {StudentData.map((student) => (
            <Testimonies
              key={student.id}
              image={student.image}
              name={student.name}
              country={student.country}
              profession={student.profession}
              company={student.company}
              testimony={student.testimony}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
