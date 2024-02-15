import "./App.css";
import React from "react";
// import { useEffect, useState } from "react";
import FetchUseEffect from "./components/FetchUseEffect";

function App() {
  return (
    <div className="App">
      <FetchUseEffect userId="3" />
    </div>
  );
}

export default App;
