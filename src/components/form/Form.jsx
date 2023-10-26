import { useForm } from "react-hook-form";
import StepOne from "./stepOne/StepOne";
import StepTwo from "./stepTwo/StepTwo";
import StepThree from "./stepThree/StepThree";
import StepFour from "./stepFour/StepFour";
import { useState } from "react";
const Form = ({step}) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

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
        <StepTwo register={register} />
      </form>
    );
  else if (step === 3)
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <StepThree register={register} />
      </form>
    );
  else
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <StepFour />
      </form>
    );
};
export default Form;
