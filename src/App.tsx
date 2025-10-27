import FrontCard from "./comps/FrontCard";
import BackCard from "./comps/BackCard";
import CardsContainer from "./comps/CardsContainer";
import FormComponent from "./comps/FormComponent";
import { createContext, useState } from "react";
import CompleteMessage from "./comps/CompleteMessage";

export type CardDetailsProps = {
  cardName: string;
  cardNumber: string;
  cardMonth: string;
  cardYear: string;
  cardCvc: string;
};

type cardContextProps = {
  details: CardDetailsProps;
  handleCardChange: (e: any) => void;
  handleConfirm: () => void;
};

const cardContext = createContext<cardContextProps | undefined>(undefined);

export default function App() {
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [details, setDetails] = useState<CardDetailsProps>({
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvc: "",
  });

  function handleCardChange(e: any): void {
    const { name, value } = e.target;
    setDetails((pS) => ({ ...pS, [name]: value }));
  }

  function handleConfirm() {
    setIsConfirmed(true);
  }
  return (
    <cardContext.Provider value={{ details, handleCardChange, handleConfirm }}>
      <div className="flex flex-col xl:flex-row">
        <section className="section-one relative h-60 w-full xl:h-dvh xl:basis-2/6">
          <CardsContainer>
            <FrontCard />
            <BackCard />
          </CardsContainer>
        </section>
        <section className="flex w-full basis-4/6 flex-col items-center justify-center pb-10 xl:pb-0">
          {isConfirmed ? <CompleteMessage /> : <FormComponent />}
        </section>
      </div>
    </cardContext.Provider>
  );
}

export { cardContext };

//TO DO
//FIX THE INPUT NUMBERS WITH CARD
//FINISH CSS
