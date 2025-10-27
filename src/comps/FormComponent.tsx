import { useContext, useState } from "react";
import { cardContext } from "../App";
import clsx from "clsx";
import { motion } from "motion/react";

export default function FormComponent() {
  const cardInfo = useContext(cardContext);
  const [fillError, setFillError] = useState(false);

  if (!cardInfo) {
    throw new Error("This component needs contextProvider!");
  }

  const { handleCardChange, details, handleConfirm } = cardInfo;

  const numbers = "0123456789 ";
  const alphabet = "qwertyuiopasdfghjklzxcvbnm ";

  const nameError = details.cardName
    .toLocaleLowerCase()
    .split("")
    .map((item) => alphabet.includes(item))
    .includes(false);

  const cardNumberError = details.cardNumber
    .split("")
    .map((item) => numbers.includes(item))
    .includes(false);

  const cardNumberErrorTwo = details.cardNumber.split("").length < 16;
  console.log(cardNumberErrorTwo);

  const monthError = details.cardMonth
    .split("")
    .map((item) => numbers.includes(item))
    .includes(false);

  const yearError = details.cardYear
    .split("")
    .map((item) => numbers.includes(item))
    .includes(false);

  const cvcError = details.cardCvc
    .split("")
    .map((item) => numbers.includes(item))
    .includes(false);

  const currentYear = Number(
    new Date().getFullYear().toString().split("").slice(2).join(""),
  );

  const errorStyle = `border-my-red focus:outline-0 text-my-red`;
  const normalStyle = "border-my-gray-200 focus:outline-1 text-my-purple-950";

  //MONTH

  /*   const testCase = details.cardMonth;
  const testCaseSplit = testCase.split("");
  const finalNumber =
    testCaseSplit[0] === "0"
      ? testCase.split(" ").join("").split("0").join("")
      : testCase.split(" ").join(""); */

  const monthErrorTwo =
    details.cardMonth === ""
      ? true
      : Number(details.cardMonth) > 0 && Number(details.cardMonth) < 13;

  //YEAR

  const yearCard = details.cardYear;
  const yearCardSplit = yearCard.split("");
  const finalNumberYear =
    yearCardSplit[0] === "0"
      ? yearCard.split(" ").join("").split("0").join("")
      : yearCard.split(" ").join("");

  const yearErrorTwo =
    details.cardYear === "" ? true : Number(finalNumberYear) >= currentYear;

  const allErrorsBottom =
    monthError || yearError || cvcError || !monthErrorTwo || !yearErrorTwo;

  function handleSubmit(): void {
    const vaules = Object.values(details);
    const error = vaules.includes("");
    if (error || cardNumberErrorTwo) {
      setFillError(true);
      return;
    }

    setFillError(false);
    handleConfirm();
  }

  return (
    <div className="text-my-purple-950 mt-25 grid max-w-[500px] gap-8 px-5 font-bold tracking-widest xl:mt-0 xl:w-[400px] xl:px-0">
      <div className="grid gap-1">
        <p className="uppercase">cardholder name</p>
        <input
          type="text"
          className={clsx(
            `placeholder:text-my-gray-200 focus:outline-my-second-grad w-full rounded-md border p-2 pl-5 tracking-normal placeholder:font-normal ${nameError ? errorStyle : normalStyle} ${fillError && details.cardName === "" && errorStyle}`,
          )}
          placeholder="e.g. Jane Applessed"
          required
          onChange={(e) => {
            handleCardChange(e);
          }}
          name="cardName"
          value={details.cardName.replaceAll("  ", " ")}
          maxLength={25}
        />
        {nameError && (
          <p className="text-my-red mt-1 text-xs">Wrong format, letters only</p>
        )}
      </div>
      <div className="grid gap-1">
        <p className="uppercase">card number</p>
        <input
          type="string"
          className={clsx(
            `placeholder:text-my-gray-200 focus:outline-my-second-grad w-full rounded-md border p-2 pl-5 placeholder:font-normal ${cardNumberError ? errorStyle : normalStyle} ${fillError && details.cardNumber === "" && errorStyle} ${fillError && cardNumberErrorTwo && errorStyle}`,
          )}
          placeholder="e.g. 1234 5678 9123 0000"
          required
          maxLength={16}
          onChange={(e) => {
            handleCardChange(e);
          }}
          name="cardNumber"
          value={details.cardNumber.split(" ").join("")}
        />
        {cardNumberError && (
          <p className="text-my-red mt-1 text-xs">Wrong format, numbers only</p>
        )}
        {cardNumberErrorTwo && fillError && (
          <p className="text-my-red mt-1 text-xs">Card number too short</p>
        )}
      </div>
      <div>
        <div className="flex flex-row gap-5">
          <div className="grid basis-1/3 gap-2 text-sm xl:text-base">
            <p className="text-nowrap uppercase">Exp.date (mm/yy)</p>
            <div className="flex gap-2">
              <input
                type="text"
                className={clsx(
                  `placeholder:text-my-gray-200 focus:outline-my-second-grad w-full rounded-md border p-2 pl-5 placeholder:font-normal ${monthError || !monthErrorTwo ? errorStyle : normalStyle} ${fillError && details.cardMonth === "" && errorStyle}`,
                )}
                required
                placeholder="05"
                maxLength={2}
                onChange={(e) => {
                  handleCardChange(e);
                }}
                name="cardMonth"
                value={details.cardMonth.split(" ").join("")}
              />
              <input
                type="text"
                className={clsx(
                  `placeholder:text-my-gray-200 focus:outline-my-second-grad w-full rounded-md border p-2 pl-5 placeholder:font-normal ${yearError || !yearErrorTwo ? errorStyle : normalStyle} ${fillError && details.cardYear === "" && errorStyle}`,
                )}
                required
                placeholder="22"
                maxLength={2}
                onChange={(e) => {
                  handleCardChange(e);
                }}
                name="cardYear"
                value={finalNumberYear}
              />
            </div>
          </div>
          <div className="grid basis-2/3 gap-2 text-sm xl:text-base">
            <p className="uppercase">cvc</p>
            <input
              type="text"
              className={clsx(
                `placeholder:text-my-gray-200 focus:outline-my-second-grad rounded-md border p-2 pl-5 placeholder:font-normal ${cvcError ? errorStyle : normalStyle} ${fillError && details.cardCvc === "" && errorStyle}`,
              )}
              required
              placeholder="e.g. 123"
              maxLength={3}
              onChange={(e) => {
                handleCardChange(e);
              }}
              name="cardCvc"
              value={details.cardCvc.split(" ").join("")}
            />
          </div>
        </div>
        {allErrorsBottom && (
          <p className="text-my-red mt-2 text-center text-xs">Check format</p>
        )}
      </div>
      <motion.button
        className="bg-my-purple-950 cursor-pointer rounded-md p-4 font-normal text-white"
        onClick={handleSubmit}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.8 }}
      >
        Confirm
      </motion.button>
      {fillError && (
        <p className="text-my-red text-center text-sm">Fill all the gaps</p>
      )}
    </div>
  );
}
