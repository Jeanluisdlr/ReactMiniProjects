import "./App.css";
import React from "react";
import Task from "./components/task";
import { useState } from "react";

function App() {
  const [inputValue, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    setList([...list, inputValue]);
    setInput("");
  };

  const deleteTask = (e) => {
    const updateList = [...list];
    updateList.splice(e, 1);
    console.log(e.target.value);
    setList(updateList);
  };
  return (
    <div className="App">
      <div className="principal-container">
        <div className="input-section">
          <label>Enter your task:</label>
          <input
            name="task"
            type="text"
            placeholder="write a task"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <div className="classList">
          <ul>
            {list.map((task, index) => (
              <Task key={index} input={task} onclick={deleteTask} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
