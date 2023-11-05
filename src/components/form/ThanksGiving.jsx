import { motion } from "framer-motion";
import { thankYou } from "../../assets/icons";

const ThanksGiving = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      className="form-thanks-giving"
    >
      <img src={thankYou} alt="thank you" className="form-thanks-giving__img" />
      <h2 className="form-thanks-giving__title">Thank you!</h2>

      <p className="form-thanks-giving__desc">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </motion.div>
  );
};
export default ThanksGiving;
