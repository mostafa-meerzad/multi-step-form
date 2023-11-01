import { useForm } from "react-hook-form";
import StepOne from "./stepOne/StepOne";
import StepTwo from "./stepTwo/StepTwo";
import StepThree from "./stepThree/StepThree";
import StepFour from "./stepFour/StepFour";
import { useState } from "react";

const Form = ({ step, handleNext, handlePrev, handleChangePlan }) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    trigger,
    formState: { errors },
    resetField,
  } = useForm();

  // form steps: needed for form validation, these steps requires the user to provide data
  const firstStep = 0;
  const secondeStep = 1;
  // last step is needed to decide when to show the submit button
  const lastStep = 3;

  // plan period either monthly or yearly
  const [period, setPeriod] = useState("monthly");
  // get values of those inputs that will determine the final cost, period and plan-type
  const addons = getValues("addons");
  const plan = getValues("plan");
  const cost = getValues("cost");

  const handlePeriod = (value) => {
    setPeriod(value);
    // need to reset fields from the previous choice, causing miss calculation in the final-form-step
    resetField("addons");
    resetField("cost");
    resetField("plan");
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  // put form steps in an array for easier conditional rendering
  const steps = [
    <StepOne register={register} errors={errors} key={"stepOne"} />,
    <StepTwo
      register={register}
      period={period}
      handlePeriod={handlePeriod}
      setValue={setValue}
      errors={errors}
      key={"stepTwo"}
    />,
    <StepThree register={register} period={period} key={"stepThree"} />,
    <StepFour
      plan={plan}
      cost={cost}
      addons={addons}
      period={period}
      handleChange={handleChangePlan}
      key={"stepFour"}
    />,
  ];
  // check if the user has provided the required data or not using the "gitValues" function
  // relying on "errors" object and calling "trigger" is not sufficient
  const nextHandler = () => {
    if (step === firstStep) {
      if (getValues("name") && getValues("email") && getValues("phone")) {
        handleNext();
      }
      trigger(["name", "email", "phone"]);
    } else if (step === secondeStep) {
      if (getValues("plan")) {
        handleNext();
      }
      trigger("plan");
    } else {
      handleNext();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      {steps[step]}

      <div className="main-btn-container">
        <button
          type="button"
          onClick={handlePrev}
          style={
            step === firstStep
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
        >
          prev
        </button>
        {step < lastStep ? (
          <button type="button" onClick={nextHandler}>
            next
            {step}
          </button>
        ) : (
          <input type="submit" value={"submit"} />
        )}
      </div>
    </form>
  );
};
export default Form;
