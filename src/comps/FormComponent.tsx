import { useContext } from "react";
import { cardContext } from "../App";
import clsx from "clsx";

export default function FormComponent() {
  const cardInfo = useContext(cardContext);

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

  const monthError = details.cardMonth
    .split("")
    .map((item) => numbers.includes(item))
    .includes(false);

  const errorStyle = `border-my-red focus:outline-0 text-my-red`;
  const normalStyle = "border-my-gray-200 focus:outline-1 text-my-purple-950";

  return (
    <div className="text-my-purple-950 mt-25 grid max-w-[500px] gap-8 px-5 font-bold tracking-widest xl:mt-0 xl:w-[400px] xl:px-0">
      <div className="grid gap-1">
        <p className="uppercase">cardholder name</p>
        <input
          type="text"
          className={clsx(
            `placeholder:text-my-gray-200 focus:outline-my-second-grad w-full rounded-md border p-2 pl-5 tracking-normal placeholder:font-normal ${nameError ? errorStyle : normalStyle}`,
          )}
          placeholder="e.g. Jane Applessed"
          required
          onChange={(e) => {
            handleCardChange(e);
          }}
          name="cardName"
          value={details.cardName.replaceAll("  ", " ")}
        />
        {nameError && (
          <p className="text-my-red mt-1 text-xs">Wrong format, letters only</p>
        )}
      </div>
      <div className="grid gap-1">
        <p className="uppercase">cardholder name</p>
        <input
          type="string"
          className={clsx(
            `placeholder:text-my-gray-200 focus:outline-my-second-grad w-full rounded-md border p-2 pl-5 placeholder:font-normal ${cardNumberError ? errorStyle : normalStyle}`,
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
      </div>
      <div className="flex flex-row gap-5">
        <div className="grid basis-1/3 gap-2 text-sm xl:text-base">
          <p className="text-nowrap uppercase">Exp.date (mm/yy)</p>
          <div className="flex gap-2">
            <input
              type="text"
              className={clsx(
                `placeholder:text-my-gray-200 focus:outline-my-second-grad w-full rounded-md border p-2 pl-5 placeholder:font-normal ${monthError ? errorStyle : normalStyle}`,
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
              className="border-my-gray-200 placeholder:text-my-gray-200 focus:outline-my-second-grad w-full rounded-md border p-2 pl-5 placeholder:font-normal focus:outline-1"
              required
              placeholder="22"
              maxLength={2}
              onChange={(e) => {
                handleCardChange(e);
              }}
              name="cardYear"
              value={details.cardYear.split(" ").join("")}
            />
          </div>
        </div>
        <div className="grid basis-2/3 gap-2 text-sm xl:text-base">
          <p className="uppercase">cvc</p>
          <input
            type="text"
            className="border-my-gray-200 placeholder:text-my-gray-200 focus:outline-my-second-grad rounded-md border p-2 pl-5 placeholder:font-normal focus:outline-1"
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
      <button
        className="bg-my-purple-950 rounded-md p-4 font-normal text-white"
        onClick={handleConfirm}
      >
        Confirm
      </button>
    </div>
  );
}
