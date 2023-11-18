import { stepOneData } from "../../data";

const StepOne = ({ register, errors }) => {
  return (
    <div className="form-step-one">
      {stepOneData.map(({ name, label, placeholder, type }) => (
        <label
          htmlFor={name}
          className={`form-input ${errors[name] ? "form-input--error" : ""}`}
          key={name}
        >
          {label}
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            {...register(name, { required: true })}
          />
          <span className="form-input__error">this field is required</span>
        </label>
      ))}
    </div>
  );
};
export default StepOne;
