import { stepTwoData } from "../../../data";

const StepTwo = ({ register }) => {
  return (
    <div className="form-step-two">
      <header className="form-header">
        <h2 className="form-header__title">Select your plan</h2>
        <p className="form-header__desc">
          You have the option of monthly or yearly billing.
        </p>
      </header>

      {stepTwoData.map(({ img, price, title, freeMonths }) => (
        <label htmlFor={title} className="form-plan" key={title}>
          <img src={img} alt="" className="form-plan__img" />
          <h3 className="form-plan__title">{title}</h3>
          <p className="form-plan__cost">{price.monthly}</p>
          <input id={title} type="checkbox" {...register(title)} />
        </label>
      ))}
      <div className="period-change">
        <span>Monthly</span>
        <div className="period-change__btn period-change__btn--yearly period-change__btn--monthly"></div>
        <span>Yearly</span>
      </div>
    </div>
  );
};

export default StepTwo;
