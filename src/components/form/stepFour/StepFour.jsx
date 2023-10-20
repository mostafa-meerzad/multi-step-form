import { stepThreeData } from "../../../data";

const StepFour = ({ plan, addons, period, cost, handleChange }) => {
  let totalCost = parseInt(cost);
  return (
    <div className="form-step-four">
      <header className="form-header">
        <h2 className="form-header__title">Finishing up</h2>
        <p className="form-header__desc">
          Double-check everything looks OK before confirming.
        </p>
      </header>

      <ul className="options">
        <li className="options__option">
          <div className="options__option-wrapper">
            <span className="options__option-title">
              {plan}({period})
            </span>
            <button type="button" onClick={handleChange}>
              change
            </button>
          </div>

          <span className="option__option-price">
            ${cost}/{period === "monthly" ? "mo" : "yr"}
          </span>
        </li>
        {stepThreeData.map(({ title, price }) => {
          if (addons?.[title]) {
            totalCost += price[period];
            return (
              <li key={title} className="options__option">
                <span className="options__option-title">{title}</span>
                <span className="options__option-price">
                  +${price[period]}/{period === "monthly" ? "mo" : "yr"}
                </span>
              </li>
            );
          }
        })}
      </ul>

      <footer className="footer">
        <span className="footer__period">Total (per {period === "monthly" ? "month" : "year"})</span>
        <span className="footer__price">
          ${totalCost}/{period === "monthly" ? "mo" : "yr"}
        </span>
      </footer>
    </div>
  );
};

export default StepFour;
