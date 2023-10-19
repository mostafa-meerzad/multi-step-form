import { useForm } from "react-hook-form";
import StepOne from "./stepOne/StepOne";
import StepTwo from "./stepTwo/StepTwo";
import StepThree from "./stepThree/StepThree";
import StepFour from "./stepFour/StepFour";
const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  errors;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <StepOne register={register} />

      <StepTwo register={register}/>

      <StepThree register={register}/>
      <StepFour/>
    </form>
  );
};
export default Form;
