import { NumberContext } from "app/providers/context/NumberContext";
import React, { ButtonHTMLAttributes, useContext } from "react";
import { ButtonProps } from "./ButtonProps";

export const EqualButton: React.FC<ButtonProps> = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button className="white-button" type="button" onClick={() => doMath()}>
      =
    </button>
  );
};
