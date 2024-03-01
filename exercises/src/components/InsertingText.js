import React, { useState } from "react";
import "../stylesheets/InsertingText.css";

function InsertingText() {
  const [active, setActive] = useState(false);
  const [input, setinput] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setinput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setActive(!active);
      setList([...list, input]);
    }
  };

  return (
    <div className="insertingText-container">
      <textarea
        id="text-area"
        placeholder="Enter your text here..."
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyPress}
      ></textarea>
      <div className="document-container">
        <h6>Document</h6>
        {active ? (
          <div className="document-body">
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div
            className="document-body"
            style={{ textAlign: "center", color: "#52525240" }}
          >
            Added content will show here
          </div>
        )}
      </div>
    </div>
  );
}

export default InsertingText;
