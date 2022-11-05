import { NumberContext } from "app/providers/context/NumberContext";
import React, { useContext } from "react";
import { DisplayStyles } from "../../app/styles/Styles";

const Display: React.FC = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <DisplayStyles>
      <h2
        className={
          storedNumber && storedNumber.length > 12
            ? "long-main-display"
            : undefined
        }
      >
        {!number.length && !storedNumber ? "0" : number || storedNumber}
      </h2>
      <p
        className={
          storedNumber && storedNumber.length > 12
            ? "long-stored-display"
            : undefined
        }
      >
        {!storedNumber
          ? "ENTER VALUE"
          : `${storedNumber} ${functionType} ${number}`}
      </p>
    </DisplayStyles>
  );
};

export default Display;
