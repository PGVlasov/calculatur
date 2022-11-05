import { NumberContext } from "app/providers/context/NumberContext";
import React, { useContext } from "react";
import { ButtonProps } from "./ButtonProps";

export const NumberButton: React.FC<ButtonProps> = (props: any) => {
  const { buttonValue } = props;
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};
