import React from "react";
import "./App.css";
import freeCodeCampLogo from "./Images/FreeCodeCamp_logo.svg";
import AllStudents from "./Components/Students.js";
import Testimonies from "./Components/Testimonies.js";

function App() {
  return (
    <div className="App">
      <div id="logo-container">
        <img id="top-logo" src={freeCodeCampLogo} alt="FreeCodeCamp Logo" />
      </div>
      <div className="principal-container">
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
        <div className="testimonies">
          <Testimonies
            name={AllStudents.Shawn.name}
            image={AllStudents.Shawn.image}
            country={AllStudents.Shawn.country}
            profession={AllStudents.Shawn.profession}
            company={AllStudents.Shawn.company}
            testimony={AllStudents.Shawn.testimony}
          />

          <Testimonies
            name={AllStudents.Sarah.name}
            image={AllStudents.Sarah.image}
            country={AllStudents.Sarah.country}
            profession={AllStudents.Sarah.profession}
            company={AllStudents.Sarah.company}
            testimony={AllStudents.Sarah.testimony}
          />
          <Testimonies
            name={AllStudents.Emma.name}
            image={AllStudents.Emma.image}
            country={AllStudents.Emma.country}
            profession={AllStudents.Emma.profession}
            company={AllStudents.Emma.company}
            testimony={AllStudents.Emma.testimony}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
