import { stepThreeData } from "../../data";

const StepThree = ({ register, period }) => {
  return (
    <div className="form-step-three">
      {stepThreeData.map(({ title, desc, price }) => (
        <label htmlFor={title} className="form-addon" key={title}>
          <h3 className="form-addon__title">{title}</h3>

          <p className="form-addon__desc"> {desc}</p>
          <p className="form-addon__cost">
            +${price[period]}/{period === "monthly" ? "mo" : "yr"}
          </p>

          <input id={title} type="checkbox" {...register(`addons.${title}`)} />
        </label>
      ))}
    </div>
  );
};

export default StepThree;
