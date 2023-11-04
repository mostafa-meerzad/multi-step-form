import { stepThreeData } from "../../data";

const StepFour = ({ plan, addons, period, cost, handleChange }) => {
  let totalCost = parseInt(cost);

  const planPeriod = period === "monthly" ? "month" : "year";
  return (
    <div className="form-step-four">
      <ul className="form-details">
        <li className="form-details__field">
          <div className="form-details__plan">
            <span className="form-details__plan-title">
              {plan}({period})
            </span>
            <button
              type="button"
              onClick={handleChange}
              className="form-details__change-btn"
            >
              change
            </button>
          </div>

          <span className="form-details__plan-cost">
            ${cost}/{period === "monthly" ? "mo" : "yr"}
          </span>
        </li>
        <hr className="form-details__bar"/>
        {/* iterate over the options that was selected in the step-three */}
        {stepThreeData.map(({ title, price }) => {
          if (addons?.[title]) {
            totalCost += price[period];
            return (
              <li key={title} className="form-details__field">
                <span className="form-details__title">{title}</span>
                <span className="form-details__cost">
                  +${price[period]}/{period === "monthly" ? "mo" : "yr"}
                </span>
              </li>
            );
          }
        })}
      </ul>


      <div className="form-result">
          <span className="form-result__desc">Total (per {planPeriod})</span>
          <span className="form-result__total-cost">
            ${totalCost}/{period === "monthly" ? "mo" : "yr"}
          </span>
        </div>
    </div>
  );
};

export default StepFour;
