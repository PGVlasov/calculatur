import { NumberContext } from "app/providers/context/NumberContext";
import React, { useContext } from "react";

export const BackButton: React.FC = () => {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <button
      type="button"
      className="white-button"
      onClick={() => handleBackButton()}
    >
      &#8592;
    </button>
  );
};
