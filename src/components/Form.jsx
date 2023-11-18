import { useForm } from "react-hook-form";
import StepOne from "./form/StepOne";
import StepTwo from "./form/StepTwo";
import StepThree from "./form/StepThree";
import StepFour from "./form/StepFour";
import { useState } from "react";
import { formStepsHeader } from "../data";
import FormSteps from "./form/FormSteps";
import ThanksGiving from "./form/ThanksGiving";
import { AnimatePresence, motion } from "framer-motion";

const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    trigger,
    formState: { errors },
    resetField,
  } = useForm();
  const firstStep = 0;
  // the only purpose of secondStep is to determine when to render "go back" button
  const secondeStep = 1;
  const lastStep = 3;

  const [step, setStep] = useState(firstStep);
  const [formCompleted, setFormCompleted] = useState(false);
  // plan period either monthly or yearly
  const [period, setPeriod] = useState("monthly");

  //animation state
  const [initialAnimate, setInitialAnimate] = useState({ opacity: 0, x: 100 });

  const [playingAnimate, setPlayingAnimate] = useState({ opacity: 1, x: 0 });

  // get values of those inputs that will determine the final cost, period and plan-type
  const addons = getValues("addons");
  const plan = getValues("plan");
  const cost = getValues("cost");

  const handleNext = () => {
    setStep((preState) => (preState < lastStep ? preState + 1 : preState));

    setPlayingAnimate({ opacity: 1, x: 0 });
    setInitialAnimate({ opacity: 0, x: 100 });
  };

  const handlePrev = () => {
    setStep((preState) => (preState > firstStep ? preState - 1 : preState));

    setInitialAnimate({ opacity: 0, x: -100 });
    setPlayingAnimate({ opacity: 1, x: 0 });
  };
  // reset form-step to the first step when the user wants to change their plan
  const handleChangePlan = () => setStep(0);

  const handlePeriod = (value) => {
    setPeriod(value);
    // need to reset fields from the previous choice, causing miss calculation in the final-form-step
    resetField("addons");
    resetField("cost");
    resetField("plan");
  };

  const onSubmit = (data) => {
    console.log(data);
    setFormCompleted(true);
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
      selectedPlan={plan}
      trigger={trigger}
      key={"stepTwo"}
    />,
    <StepThree
      register={register}
      addons={addons}
      period={period}
      key={"stepThree"}
    />,
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
      <FormSteps currentStep={step} />

      <div className="form-content">
        {formCompleted ? (
          <ThanksGiving />
        ) : (
          <AnimatePresence>
            <motion.div
              initial={initialAnimate}
              animate={playingAnimate}
              key={step}
              transition={{ staggerChildren: 0.2 }}
            >
              <header className="form-header">
                <h2 className="form-header__title">
                  {formStepsHeader[step]["title"]}
                </h2>
                <p className="form-header__desc">
                  {formStepsHeader[step]["desc"]}{" "}
                </p>
              </header>
              {/* render different form steps here */}
              {steps[step]}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {!formCompleted && (
        <div className="form-buttons">
          <button
            type="button"
            onClick={handlePrev}
            className={`form-buttons__btn ${
              step === firstStep ? "form-buttons__btn--invisible" : ""
            }`}
          >
            go back
          </button>
          {step < lastStep ? (
            <button
              type="button"
              onClick={nextHandler}
              className="form-buttons__btn form-buttons__btn--next"
            >
              next step
            </button>
          ) : (
            <input
              type="submit"
              value={"confirm"}
              className="form-buttons__btn form-buttons__btn--confirm"
            />
          )}
        </div>
      )}
    </form>
  );
};
export default Form;
