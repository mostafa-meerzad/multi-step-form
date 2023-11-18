import { useState } from "react";
import { stepThreeData } from "../../data";
import { checkMark } from "../../assets/icons";

const Addon = ({ title, desc, price, register, period, addons }) => {

  // addons[title] is either true or false, used as default state to keep selected addons in active sate if user navigates between form-steps back and forth
  const [selected, setSelected] = useState(addons?.[title]);

  return (
    <label
      htmlFor={title}
      className={`form-addon ${selected ? "form-addon--active" : ""}`}
      key={title}
    >
      <div
        className={`form-addon__check ${
          selected ? "form-addon__check--active" : ""
        }`}
      >
        {selected ? <img src={checkMark} alt="check" /> : ""}
      </div>
      <div className="form-addon__content-wrapper">
        <h3 className="form-addon__title">{title}</h3>

        <p className="form-addon__desc"> {desc}</p>
      </div>
      <p className="form-addon__cost">
        +${price[period]}/{period === "monthly" ? "mo" : "yr"}
      </p>

      <input
        id={title}
        type="checkbox"
        {...register(`addons.${title}`)}
        onChange={() => setSelected(!selected)}
      />
    </label>
  );
};

const StepThree = ({ register, period, addons }) => {
  return (
    <div className="form-step-three">
      {stepThreeData.map(({ title, desc, price }) => (
        <Addon
          title={title}
          desc={desc}
          price={price}
          register={register}
          period={period}
          addons={addons}
          key={title}
        />
      ))}
    </div>
  );
};

export default StepThree;
