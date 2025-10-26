import logo from "/icon-complete.svg";

export default function CompleteMessage() {
  return (
    <div className="mt-25 flex max-w-[500px] flex-col items-center gap-8 px-5 xl:mt-0 xl:w-[400px] xl:px-0">
      <div>
        <img src={logo} alt="" />
      </div>
      <h3 className="text-3xl font-bold tracking-widest uppercase">
        Thank you!
      </h3>
      <p className="text-xl font-bold">We've added your card details</p>
      <button className="w-full cursor-pointer rounded-md bg-black p-3 text-white">
        Continue
      </button>
    </div>
  );
}
