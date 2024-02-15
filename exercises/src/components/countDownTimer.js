import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    console.log("jean");
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div>
      <p>Time Remaining: {timeLeft}</p>
    </div>
  );
};

export default CountDown;
