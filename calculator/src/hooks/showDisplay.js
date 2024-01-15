import React from "react";
import { useState } from "react";
import { evaluate } from "mathjs";

const UseShowDisplay = () => {
  const [expression, setInput] = useState("");

  const printButton = (valor) => setInput(expression + valor);
  const clearDisplay = () => setInput("");
  const evaluation = () => setInput(evaluate(expression));

  return { expression, printButton, clearDisplay, evaluation };
};

export default UseShowDisplay;
