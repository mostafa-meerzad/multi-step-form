import { useState } from "react";
import { stepTwoData } from "../../../data";

const StepTwo = ({ register, handlePeriod, period, setValue, errors }) => {
  const [plan, setPlan] = useState("");

  return (
    <div className="form-step-two">
      <header className="form-header">
        <h2 className="form-header__title">Select your plan</h2>
        <p className="form-header__desc">
          You have the option of monthly or yearly billing.
        </p>
      </header>

      {stepTwoData.map(({ img, price, title, freeMonths }) => (
        <label
          htmlFor={title}
          className={
            plan === title ? "form-plan form-plan--active" : "form-plan"
          }
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
          <input id={title} type="radio" value={title} {...register("plan", {required:true})} />
        </label>
      ))}

      <div className="period-change">
        <input type="hidden" {...register("cost")} />
        <input type="hidden" {...register("period")} value={period} />
        <button type="button" onClick={() => handlePeriod("monthly")}>
          Monthly
        </button>
        <div
          className={
            period === "monthly"
              ? " period-change__btn period-change__btn--monthly"
              : "period-change__btn period-change__btn--yearly"
          }
        ></div>
        <button
          type="button"
          onClick={() => {
            handlePeriod("yearly");
          }}
        >
          Yearly
        </button>
      </div>
      <p style={errors["plan"] ? {color:"red", visibility:"visible"}: {color:"green", visibility:"hidden"}}>
        you need to select a plan
      </p>
    </div>
  );
};

export default StepTwo;
