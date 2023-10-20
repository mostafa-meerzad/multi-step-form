import { formStepsData } from "../../data";

const FormSteps = ({ formStep }) => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__steps">
        {formStepsData.map(({ step, desc }) => (
          <li key={step} className="step">
            <div
              className={
                formStep === step ? "step__num step__num--active" : "step__num"
              }
            >
              {step}
            </div>
            <span className="step__title">step {step}</span>
            <span className="step__desc">{desc}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default FormSteps;
