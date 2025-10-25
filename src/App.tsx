import phoneBg from "/bg-main-mobile.png";
import logo from "/card-logo.svg";
import cardBack from "/bg-card-back.png";
import cardFront from "/bg-card-front.png";
import InputComponent from "./comps/InputComponent";

export default function App() {
  return (
    <div className="flex flex-col xl:flex-row">
      <section className="section-one relative h-60 w-full xl:h-dvh xl:basis-2/6">
        <div className="relative mx-auto h-60 w-full max-w-[400px] xl:mx-0 xl:h-dvh xl:max-w-none">
          <div className="absolute top-34 right-12 z-2 w-70 xl:top-3/10 xl:-right-30 xl:w-110">
            <img src={cardFront} alt="Back card" />
            <p className="absolute top-21 left-5 text-white xl:top-33 xl:left-10 xl:text-2xl">
              9234 1234 1234 1234
            </p>
            <p className="xl:text-md absolute bottom-4 left-5 text-sm text-white xl:bottom-7 xl:left-10">
              Felice Lerwer
            </p>
            <p className="xl:text-md absolute right-5 bottom-4 text-sm text-white xl:right-10 xl:bottom-7">
              09/00
            </p>
            <img
              src={logo}
              alt="card logo"
              className="absolute top-5 left-5 w-12 xl:top-7 xl:left-10 xl:w-20"
            />
          </div>
          <div className="absolute top-10 right-5 z-1 w-70 xl:top-4/8 xl:-right-60 xl:w-110">
            <img src={cardBack} alt="Back card" />
            <p className="absolute top-[66px] right-9 text-sm text-white xl:top-26 xl:right-14 xl:text-xl">
              000
            </p>
          </div>
        </div>
      </section>
      <section className="flex w-full basis-4/6 flex-col justify-center">
        <div className="mt-25 grid gap-8 px-5 xl:mt-0 xl:ml-100 xl:w-[400px] xl:px-0">
          <InputComponent />
          <InputComponent />
          <div className="flex flex-row gap-5">
            <div className="grid basis-1/3 gap-2">
              <p>Exp.date mm/yy</p>
              <div className="flex gap-2">
                <input type="text" className="w-full rounded-md border p-2" />
                <input type="text" className="w-full rounded-md border p-2" />
              </div>
            </div>
            <div className="grid basis-2/3 gap-2">
              <p>CVC</p>
              <input type="text" className="rounded-md border p-2" />
            </div>
          </div>
          <button className="rounded-md bg-black p-4 text-white">
            Confirm
          </button>
        </div>
      </section>
    </div>
  );
}
