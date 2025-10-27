import { useContext } from "react";
import cardBack from "/bg-card-back.png";
import { cardContext } from "../App";
import { motion } from "motion/react";

export default function BackCard() {
  const cardInfo = useContext(cardContext);

  if (!cardInfo) {
    throw new Error("This component needs contextProvider");
  }

  const { cardCvc } = cardInfo.details;
  return (
    <motion.div
      className="absolute top-10 right-5 z-1 w-70 xl:top-4/8 xl:-right-60 xl:w-110"
      whileHover={{ scale: 1.1 }}
    >
      <img
        src={cardBack}
        alt="Back card"
        className="rounded-xl shadow-[0px_0px_50px_0px_black] xl:shadow-[0px_0px_20px_0px_gray]"
      />
      <p className="absolute top-[66px] right-9 text-sm font-thin text-white xl:top-26 xl:right-14 xl:text-xl">
        {cardCvc === "" ? "000" : cardCvc}
      </p>
    </motion.div>
  );
}
