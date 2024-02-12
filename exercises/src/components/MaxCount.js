import React from "react";
import { useState, useEffect } from "react";
import "../stylesheets/maxCount.css";

const MaxCount = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      timer === 0 ? clearInterval(myInterval) : setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(myInterval);
  }, [timer]);

  return (
    <div className="maxCount-Container">
      <h4 id="title">Number of Clicks Until Timer Expires</h4>
      <div className="timers-container">
        <h2>{count}</h2>
        <h5>{`Time left: ${timer} seconds`}</h5>
        {timer > 0 ? <button onClick={handleClick}>+</button> : null}
      </div>
    </div>
  );
};

export default MaxCount;
