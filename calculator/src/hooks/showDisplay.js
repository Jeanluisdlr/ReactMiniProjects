import React from "react";
import { useState } from "react";
import { evaluate, exp } from "mathjs";

const UseShowDisplay = () => {
  const [expression, setInput] = useState("");
  const sings = [".", "/", "*", "-", "+"];
  const printButton = (valor) => {
    expression === "" && !isNaN(valor)
      ? setInput(expression + valor)
      : expression === "" && sings.includes(valor)
      ? setInput(0 + valor)
      : !isNaN(expression.slice(-1)) && !isNaN(valor)
      ? setInput(expression + valor)
      : !isNaN(expression.slice(-1)) && sings.includes(valor)
      ? setInput(expression + valor)
      : sings.includes(expression.slice(-1)) && expression.slice(-1) === valor
      ? setInput(expression)
      : sings.includes(expression.slice(-1)) && !isNaN(valor)
      ? setInput(expression + valor)
      : setInput(expression.slice(0, -1) + valor);
  };
  const clearDisplay = () => setInput("");
  const evaluation = () => {
    expression === ""
      ? setInput(expression)
      : sings.includes(expression.slice(-1))
      ? setInput(evaluate(expression + expression.slice(-1) + expression))
      : setInput(evaluate(expression));
  };

  return { expression, printButton, clearDisplay, evaluation };
};

export default UseShowDisplay;
