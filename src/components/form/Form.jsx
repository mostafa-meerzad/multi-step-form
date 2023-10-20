import { useForm } from "react-hook-form";
import StepOne from "./stepOne/StepOne";
import StepTwo from "./stepTwo/StepTwo";
import StepThree from "./stepThree/StepThree";
import StepFour from "./stepFour/StepFour";
import { useState } from "react";

const Form = ({ step }) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    resetField,
  } = useForm();

  const [period, setPeriod] = useState("monthly");
  const addons = getValues("addons");
  const plan = getValues("plan");
  const cost = getValues("cost");

  const handlePeriod = (value) => {
    setPeriod(value);
    resetField("addons");
    resetField("cost");
    resetField("plan");
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  if (step === 1)
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <StepOne register={register} />
      </form>
    );
  else if (step === 2)
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <StepTwo
          register={register}
          period={period}
          handlePeriod={handlePeriod}
          setValue={setValue}
          resetField={resetField}
          getValues={getValues}
        />
      </form>
    );
  else if (step === 3)
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <StepThree register={register} period={period} />
      </form>
    );
  else
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <StepFour plan={plan} cost={cost} addons={addons} period={period} />
      </form>
    );
};
export default Form;
