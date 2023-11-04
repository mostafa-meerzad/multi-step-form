import { useState } from "react";
import { stepThreeData } from "../../data";
import { checkMark } from "../../assets/icons";

const Addon = ({ title, desc, price, register, period }) => {
  const [selected, setSelected] = useState(false);

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

const StepThree = ({ register, period }) => {
  return (
    <div className="form-step-three">
      {stepThreeData.map(({ title, desc, price }) => (
        <Addon
          title={title}
          desc={desc}
          price={price}
          register={register}
          period={period}
          key={title}
        />
      ))}
    </div>
  );
};

export default StepThree;
