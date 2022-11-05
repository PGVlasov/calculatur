import { NumberContext } from "app/providers/context/NumberContext";
import React, { useContext } from "react";

export const ClearButton: React.FC = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button
      type="button"
      className="white-button"
      onClick={() => handleClearValue()}
    >
      C
    </button>
  );
};
