import { useState } from "react";
import { stepTwoData } from "../../data";

const StepTwo = ({
  register,
  handlePeriod,
  period,
  setValue,
  errors,
  selectedPlan,
  trigger,
}) => {
  // create a plan state to keep track of which plan is selected
  // default plan value should come from the form data from parent form element
  const [plan, setPlan] = useState(selectedPlan);

  return (
    <div className="form-step-two">
     <div className="form-step-two__plans-wrapper">
     {stepTwoData.map(({ img, price, title, freeMonths }) => (
        <label
          htmlFor={title}
          className={`form-plan ${plan === title ? " form-plan--active" : ""}`}
          key={title}
          onClick={() => {
            setPlan(title);
            setValue("cost", price[period]);
            trigger("plan");
          }}
        >
          <img src={img} alt={title} className="form-plan__img" />
          <div className="form-plan__content-wrapper">
            <h3 className="form-plan__title">{title}</h3>
            <p className="form-plan__cost">
              ${price[period]}/{period === "monthly" ? "mo" : "yr"}
            </p>
            {period === "yearly" && (
              <p className="form-plan__free-months">{freeMonths}</p>
            )}
            <input
              id={title}
              type="radio"
              value={title}
              {...register("plan", { required: true })}
            />
          </div>
        </label>
      ))}
     </div>

      <div className="period-change">
        {/* hidden inputs needed to get more data from the user selection */}
        <input type="hidden" {...register("cost")} />
        <input type="hidden" {...register("period")} value={period} />
        {/* reset plan state whenever the user changes plan period to avoid showing incorrect details */}
        <button
          type="button"
          onClick={() => {
            handlePeriod("monthly");
            setPlan("");
          }}
          className={`period-change__btn ${
            period === "monthly" ? "period-change__btn--active" : ""
          }`}
        >
          Monthly
        </button>
        <div className={`period-change__switch`}>
          <div
            className={` period-change__core ${
              period === "monthly"
                ? "period-change__core--left"
                : "period-change__core--right"
            }`}
          ></div>
        </div>
        <button
          type="button"
          onClick={() => {
            handlePeriod("yearly");
            setPlan("");
          }}
          className={`period-change__btn ${
            period === "yearly" ? "period-change__btn--active" : ""
          }`}
        >
          Yearly
        </button>
      </div>
{/* check if there is any validation error for plan form-field */}
      <p
        className={` form-plan__error ${
          errors["plan"] ? "form-plan__error--active" : ""
        }`}
      >
        you need to select a plan
      </p>
    </div>
  );
};

export default StepTwo;
