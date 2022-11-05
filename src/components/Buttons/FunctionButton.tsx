import { NumberContext } from "app/providers/context/NumberContext";
import React, { useContext } from "react";
import { ButtonProps } from "./ButtonProps";

export const FunctionButton: React.FC<ButtonProps> = (props: any) => {
  const { buttonValue } = props;
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button
      className="function-button"
      type="button"
      onClick={() => handleSetCalcFunction(buttonValue)}
    >
      {buttonValue}
    </button>
  );
};
