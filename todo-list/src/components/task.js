import React from "react";
import "../Stylesheets/stylesheet.css";

const Task = (props) => {
  return (
    <div className="listed-task">
      <li>
        {props.input}
        <button className="delete-task" onClick={props.onclick}>
          X
        </button>
      </li>
    </div>
  );
};

export default Task;
