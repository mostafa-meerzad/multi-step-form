import { formStepsData } from "../../data";

const FormSteps = ({ currentStep }) => {
  // add 1 to currentStep to match the value in formSteps data,
  // form steps are 0 for that reason
  const currentFormStep = currentStep + 1;
  return (
    <ul className="form-steps">
      {formStepsData.map(({ step, desc }) => (
        <li key={step} className="form-step">
          <div
            className={`
            form-step__num ${
              currentFormStep === step ? "form-step__num--active" : ""
            }
          `}
          >
            {step}
          </div>
          <div className="form-step__content">
            <p className="form-step__title">step {step}</p>
            <p className="form-step__desc">{desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default FormSteps;
