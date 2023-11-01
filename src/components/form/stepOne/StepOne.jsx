import { stepOneData } from "../../../data";

const StepOne = ({ register, errors }) => {
  return (
    <div className="form-step-one">
      <header className="form-header">
        <h2 className="form-header__title">Personal info</h2>
        <p className="form-header__desc">
          Please provide your name, email address, and phone number.
        </p>
      </header>

      {stepOneData.map(({ name, label, placeholder, type }) => (
        <label
          htmlFor={name}
          className={
            errors[name]
              ? "form-step-one__input form-step-one__input--error"
              : "form-step-one__input"
          }
          key={name}
        >
          {label}
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            {...register(name, { required: true })}
          />
          <span
            style={
              errors[name] ? { display: "inline-block" } : { display: "none" }
            }
          >
            this field is required
          </span>
        </label>
      ))}
    </div>
  );
};
export default StepOne;
