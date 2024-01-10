import React from "react";
import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return { increment, reset, count };
};

export default useCounter;
