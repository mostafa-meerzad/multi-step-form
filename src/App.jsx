import { useState } from "react";
import Form from "./components/form/Form";

const App = () => {
  const [step, setStep] = useState(1);
  const lastStep = 4;
  const firstStep = 1;
  const handleNext = () =>
    setStep((preState) => (preState < lastStep ? preState + 1 : preState));
  const handlePrev = () =>
    setStep((preState) => (preState > firstStep ? preState - 1 : preState));

  return (
    <main className="main">
      <Form step={step} />

      <div className="main-btn-container">
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
      </div>
    </main>
  );
};
export default App;
