import React, { createContext, useState } from "react";

interface IContextProps {
  number: string;
  storedNumber: string;
  functionType: string;
  handleBackButton: () => void;
  handleSetDisplayValue: (num: string) => void;
  doMath: () => void;
  handleClearValue: () => void;
  handleSetCalcFunction: (num: string) => void;
  handleToggleNegative: () => void;
}

export const NumberContext = React.createContext<IContextProps>(
  {} as IContextProps
);

const NumberProvider = (props: any) => {
  let [number, setNumber] = useState<string>("");
  const [storedNumber, setStoredNumber] = useState<string>("");
  const [functionType, setFunctionType] = useState("");
  const handleSetDisplayValue = (num: string) => {
    if ((!number.includes(".") || num !== ".") && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, "")}`);
    }
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber("");
  };

  const handleClearValue = () => {
    setNumber("");
    setStoredNumber("");
    setFunctionType("");
  };

  const handleBackButton = () => {
    if (number !== "") {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };

  const handleSetCalcFunction = (type: string) => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  const handleToggleNegative = () => {
    if (number) {
      if (Number(number) > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (Number(storedNumber) > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  const doMath = () => {
    let numberValue = parseFloat(number);
    if (storedNumber && !number) {
      switch (functionType) {
        case "√":
          setStoredNumber(`${Math.sqrt(Number(storedNumber))}`);
          break;
      }
    }
    if (number.includes("%") && (functionType === "+" || functionType == "-")) {
      numberValue = (parseFloat(storedNumber) / 100) * parseFloat(number);
    }
    if (number.includes("%") && (functionType === "/" || functionType == "*")) {
      numberValue = parseFloat(number) / 100;
    }
    if (number && storedNumber) {
      switch (functionType) {
        case "+":
          setStoredNumber(
            `${
              Math.round((parseFloat(storedNumber) + numberValue) * 1000) / 1000
            }`
          );
          break;
        case "-":
          setStoredNumber(
            `${
              Math.round((parseFloat(storedNumber) - numberValue) * 1000) / 1000
            }`
          );
          break;
        case "/":
          setStoredNumber(
            `${
              Math.round((parseFloat(storedNumber) / numberValue) * 1000) / 1000
            }`
          );
          break;
        case "*":
          setStoredNumber(
            `${
              Math.round(parseFloat(storedNumber) * numberValue * 1000) / 1000
            }`
          );
          break;
        case "(":
          // setStoredNumber("(");
          break;
        case ")":
          // setStoredNumber(")");
          break;
        default:
          break;
      }
      setNumber("");
    }
  };
  return (
    <NumberContext.Provider
      value={{
        number,
        storedNumber,
        functionType,
        handleBackButton,
        handleSetDisplayValue,
        doMath,
        handleClearValue,
        handleSetCalcFunction,
        handleToggleNegative,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
