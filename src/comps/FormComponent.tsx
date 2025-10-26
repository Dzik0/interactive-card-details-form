import { useContext } from "react";
import { cardContext } from "../App";

export default function FormComponent() {
  const cardInfo = useContext(cardContext);

  if (!cardInfo) {
    throw new Error("This component needs contextProvider!");
  }

  const { handleCardChange, details, handleConfirm } = cardInfo;

  return (
    <div className="text-my-purple-950 mt-25 grid max-w-[500px] gap-8 px-5 font-bold tracking-widest xl:mt-0 xl:w-[400px] xl:px-0">
      <div className="grid gap-1">
        <p className="uppercase">cardholder name</p>
        <input
          type="text"
          className="border-my-gray-200 placeholder:text-my-gray-200 focus:outline-my-second-grad w-full rounded-md border p-2 pl-5 tracking-normal placeholder:font-normal focus:outline-1"
          placeholder="e.g. Jane Applessed"
          required
          onChange={(e) => {
            handleCardChange(e);
          }}
          name="cardName"
          value={details.cardName}
        />
      </div>
      <div className="grid gap-1">
        <p className="uppercase">cardholder name</p>
        <input
          type="string"
          className="border-my-gray-200 placeholder:text-my-gray-200 focus:outline-my-second-grad w-full rounded-md border p-2 pl-5 placeholder:font-normal focus:outline-1"
          placeholder="e.g. 1234 5678 9123 0000"
          required
          maxLength={20}
          onChange={(e) => {
            handleCardChange(e);
          }}
          name="cardNumber"
          value={details.cardNumber}
        />
      </div>
      <div className="flex flex-row gap-5">
        <div className="grid basis-1/3 gap-2 text-sm xl:text-base">
          <p className="text-nowrap uppercase">Exp.date (mm/yy)</p>
          <div className="flex gap-2">
            <input
              type="text"
              className="border-my-gray-200 placeholder:text-my-gray-200 focus:outline-my-second-grad w-full rounded-md border p-2 pl-5 placeholder:font-normal focus:outline-1"
              required
              placeholder="05"
              maxLength={2}
              onChange={(e) => {
                handleCardChange(e);
              }}
              name="cardMonth"
              value={details.cardMonth}
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
              value={details.cardYear}
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
            value={details.cardCvc}
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
