import { stepOneData } from "../../../data";

const StepOne = ({ register }) => {
  return (
    <div className="form-step-one">
      <header className="form-header">
        <h2 className="form-header__title">Personal info</h2>
        <p className="form-header__desc">
          Please provide your name, email address, and phone number.
        </p>
      </header>

      {stepOneData.map(({ name, label, placeholder }) => (
        <label htmlFor={name} className="form-step-one__input" key={name}>
          {label}
          <input
            id={name}
            type="text"
            placeholder={placeholder}
            {...register("name")}
          />
          <span className="form-step-one__error form-step-one__error--active">
            this field is required
          </span>
        </label>
      ))}
    </div>
  );
};

// StepOne.propTypes = {register:propTypes.object}
export default StepOne;
