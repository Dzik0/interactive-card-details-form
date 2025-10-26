import type { ReactNode } from "react";

type CardsContainerProps = {
  children: ReactNode;
};

export default function CardsContainer({ children }: CardsContainerProps) {
  return (
    <div className="relative mx-auto h-60 w-full max-w-[550px] xl:mx-0 xl:h-dvh xl:max-w-none">
      {children}{" "}
    </div>
  );
}
