import { useState } from "react";
import Form from "./components/form/Form";

const App = () => {
  const [step, setStep] = useState(0);
  const lastStep = 3;
  const firstStep = 0;
  const handleNext = () =>
    setStep((preState) => (preState < lastStep ? preState + 1 : preState));
  const handlePrev = () =>
    setStep((preState) => (preState > firstStep ? preState - 1 : preState));
  // reset form-step to the first step when the user wants to change their plan
  const handleChangePlan = () => setStep(0)

  return (
    <main className="main">
      <Form step={step} handleNext={handleNext} handlePrev ={handlePrev} handleChangePlan={handleChangePlan} firstStep={firstStep} lastStep={lastStep} />

      
    </main>
  );
};
export default App;
