import { useContext } from "react";
import cardFront from "/bg-card-front.png";
import logo from "/card-logo.svg";
import { cardContext } from "../App";

export default function FrontCard() {
  const cardInfo = useContext(cardContext);

  if (!cardInfo) {
    throw new Error("This component needs contextProvider");
  }

  const { cardName, cardNumber, cardMonth, cardYear } = cardInfo.details;

  const fixedCardNumber =
    cardNumber.slice(0, 4) +
    " " +
    cardNumber.slice(4, 8) +
    " " +
    cardNumber.slice(8, 12) +
    " " +
    cardNumber.slice(12);

  const fixedCardMonth =
    cardMonth.split("").length === 1 ? "0" + cardMonth : cardMonth;

  return (
    <div className="absolute top-34 left-5 z-2 w-70 xl:top-3/10 xl:left-30 xl:w-110">
      <img
        src={cardFront}
        alt="Back card"
        className="rounded-xl shadow-[0px_0px_50px_0px_black] xl:shadow-[0px_0px_50px_0px_black]"
      />
      <p className="absolute top-21 left-5 font-thin tracking-widest text-white xl:top-33 xl:left-10 xl:text-2xl">
        {cardNumber === "" ? "0000 0000 0000 0000" : fixedCardNumber}
      </p>
      <p className="xl:text-md absolute bottom-4 left-5 text-xs font-thin text-white uppercase xl:bottom-7 xl:left-10">
        {cardName === "" ? "jane appleseed" : cardName}
      </p>
      <p className="xl:text-md absolute right-5 bottom-4 text-xs font-thin text-white xl:right-10 xl:bottom-7">
        <span>{cardMonth === "" ? "00" : fixedCardMonth}</span>/
        <span>{cardYear === "" ? "00" : cardYear}</span>
      </p>
      <img
        src={logo}
        alt="card logo"
        className="absolute top-5 left-5 w-12 xl:top-7 xl:left-10 xl:w-20"
      />
    </div>
  );
}
