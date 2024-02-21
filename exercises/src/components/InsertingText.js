import React from "react";
import "../stylesheets/InsertingText.css";

function InsertingText() {
  return (
    <div className="insertingText-conatiner">
      <textarea
        id="text-area"
        placeholder="Enter your text here..."
        re
      ></textarea>
      <div className="document-container">
        <h6>Document</h6>
        <div className="document-body"></div>
      </div>
    </div>
  );
}

export default InsertingText;
