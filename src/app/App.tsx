import NumberProvider from "app/providers/context/NumberContext";
import Calculator from "components/Colculator/Colcilator";
import React from "react";

export const App: React.FC = () => {
  return (
    <NumberProvider>
      <div className="App">
        <Calculator />
      </div>
    </NumberProvider>
  );
};
