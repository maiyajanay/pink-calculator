import React from "react";
import { Button } from "./components/Button";
import { ButtonBox } from "./components/ButtonBox";
import { CalculatorWrapper } from "./components/CalculatorWrapper";
import { Screen } from "./components/Screen";
import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  let [calculation, setCalculation] = useState({
    sign: "",
    number: 0,
    result: 0,
  });

  let [history, setHistory] = useState("");

  const btnValues = [
    ["C", "D", "%", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  function numberClickHandler(e) {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;

    setCalculation({
      ...calculation,
      number:
        calculation.number === 0 && value === "0"
          ? 0
          : calculation.number % 1 === 0
          ? Number(calculation.number.toString() + value)
          : Number(calculation.number.toString() + value),
      result: !calculation.sign ? 0 : calculation.result,
    });

    setHistory(history + value);
    console.log(history);
  }

  function decimalClickHandler(e) {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;

    setCalculation({
      ...calculation,
      number: !calculation.number.toString().includes(".")
        ? Number(calculation.number.toString() + value)
        : calculation.number,
    });

    setHistory(history + value);
    console.log(history);
  }

  function signClickHandler(e) {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;

    setCalculation({
      ...calculation,
      sign: value,
      result:
        !calculation.result && calculation.number
          ? calculation.number
          : calculation.result,
      number: 0,
    });

    setHistory(history + " " + value + " ");
    console.log(history);
  }

  function equalsClickHandler() {
    if (calculation.sign && calculation.number) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "x"
          ? a * b
          : sign === "/"
          ? a / b
          : 0;

      setCalculation({
        ...calculation,
        result:
          calculation.number === 0 && calculation.sign === "/"
            ? NaN // Return NaN instead of a string
            : math(
                Number(calculation.result),
                Number(calculation.number),
                calculation.sign
              ),
        sign: "",
        number: 0,
      });

      setHistory(""); // Clear history when equals is clicked
      console.log(history);
    }
  }

  function resetClickHandler() {
    setCalculation({
      ...calculation,
      sign: "",
      number: 0,
      result: 0,
    });

    setHistory(""); // Clear history when reset is clicked
    console.log(history);
  }

  function handleClick(btn) {
    console.log(`${btn} clicked!`);
    const mockEvent = {
      preventDefault: () => {},
      currentTarget: { innerHTML: btn },
    };

    if (btn === "C") {
      resetClickHandler();
    } else if (btn === "=") {
      equalsClickHandler();
    } else if (btn === "/" || btn === "x" || btn === "-" || btn === "+") {
      signClickHandler(mockEvent);
    } else if (btn === ".") {
      decimalClickHandler(mockEvent);
    } else {
      numberClickHandler(mockEvent);
    }
  }

  return (
    <>
      <div className="App">
        <Header />
        <CalculatorWrapper>
          <Screen
            value={history || calculation.number ? history : calculation.result}
          />
          <ButtonBox>
            {btnValues.flat().map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={btn === "=" ? "equals" : btn}
                  value={btn}
                  onClick={() => handleClick(btn)}
                />
              );
            })}
          </ButtonBox>
        </CalculatorWrapper>
      </div>
    </>
  );
}

export default App;
