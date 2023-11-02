import { formStepsData } from "../../data";

const FormSteps = ({ currentStep }) => {
  return (
    <ul className="form-steps">
      {formStepsData.map(({ step, desc }) => (
        <li key={step} className="form-step">
          <div
            className={`
            form-step__num ${
              currentStep === step ? "form-step__num--active" : ""
            }
          `}
          >
            {step}
          </div>
          <div className="form-step-content">
            <p className="form-step__title">step {step}</p>
            <p className="form-step__desc">{desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default FormSteps;
