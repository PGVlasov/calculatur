import { NumberContext } from "app/providers/context/NumberContext";
import React, { useContext } from "react";

export const NegativeButton: React.FC = () => {
  const { handleToggleNegative } = useContext(NumberContext);
  return (
    <button
      type="button"
      className="white-button"
      onClick={() => handleToggleNegative()}
    >
      -/+
    </button>
  );
};
