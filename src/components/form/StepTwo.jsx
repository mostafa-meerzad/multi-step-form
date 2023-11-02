import { useState } from "react";
import { stepTwoData } from "../../data";

const StepTwo = ({ register, handlePeriod, period, setValue, errors }) => {
  // create a plan state to keep track of which plan is selected
  const [plan, setPlan] = useState("");

  return (
    <div className="form-step-two">
      {stepTwoData.map(({ img, price, title, freeMonths }) => (
        <label
          htmlFor={title}
          className={`form-plan ${plan === title ? " form-plan--active" : ""}`}
          key={title}
          onClick={() => {
            setPlan(title);
            setValue("cost", price[period]);
          }}
        >
          <img src={img} alt={title} className="form-plan__img" />
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
        </label>
      ))}

      <div className="period-change">
        <input type="hidden" {...register("cost")} />
        <input type="hidden" {...register("period")} value={period} />
        <button
          type="button"
          onClick={() => handlePeriod("monthly")}
          className="period-change-btn"
        >
          Monthly
        </button>
        <div
          className={`period-change__switch
              ${
                period === "monthly"
                  ? "period-change__switch--monthly"
                  : "period-change__switch--yearly"
              }
            `}
        ></div>
        <button
          type="button"
          onClick={() => {
            handlePeriod("yearly");
          }}
          className="period-change-btn"
        >
          Yearly
        </button>
      </div>

      <p
        className={` plan-error ${errors["plan"] ? "plan-error--active" : ""}`}
      >
        you need to select a plan
      </p>
    </div>
  );
};

export default StepTwo;
