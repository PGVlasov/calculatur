import { BackButton } from "components/Buttons/BackButton";
import { ClearButton } from "components/Buttons/ClearButton";
import { EqualButton } from "components/Buttons/EqualButton";
import { FunctionButton } from "components/Buttons/FunctionButton";
import { NegativeButton } from "components/Buttons/NegativeButton";
import { NumberButton } from "components/Buttons/NumberButton";
import Display from "components/Display/Display";
import { CalculatorStyles } from "../../app/styles/Styles";

export const Calculator: React.FC = () => (
  <CalculatorStyles>
    <div className="display">
      <h1>CALCULATER</h1>
      <Display />
    </div>
    <div className="number-pad">
      <ClearButton />
      <BackButton />
      <NegativeButton />
      <FunctionButton buttonValue="/" />
      <FunctionButton buttonValue="(" />
      <NumberButton buttonValue={7} />
      <NumberButton buttonValue={8} />
      <NumberButton buttonValue={9} />
      <FunctionButton buttonValue="*" />
      <FunctionButton buttonValue=")" />
      <NumberButton buttonValue={4} />
      <NumberButton buttonValue={5} />
      <NumberButton buttonValue={6} />
      <FunctionButton buttonValue="-" />
      <NumberButton buttonValue="%" />
      <NumberButton buttonValue={1} />
      <NumberButton buttonValue={2} />
      <NumberButton buttonValue={3} />
      <FunctionButton buttonValue="+" />
      <FunctionButton buttonValue="√" />
    </div>
    <div className="number-pad-buttom">
      <NumberButton buttonValue={0} />

      <NumberButton buttonValue="." />

      <EqualButton />
    </div>
  </CalculatorStyles>
);

export default Calculator;
