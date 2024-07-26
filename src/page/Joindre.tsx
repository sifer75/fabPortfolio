import type { RefObject } from "react";
import WithMenuShouldChange from "../component/types/WithMenuShouldChange";

interface JoindreProps extends WithMenuShouldChange {
  joindreRef: RefObject<HTMLDivElement>;
}
function Joindre({ joindreRef, menuShouldChange }: JoindreProps) {
  return (
    <section
      ref={joindreRef}
      className="flex flex-grow w-screen h-screen flex-col items-center justify-between pt-24 pb-10 px-10"
    >
      <h1
        className={`flex w-full text-8xl font-Merich text-yellow-100 pb-5 ${
          menuShouldChange
            ? "transition duration-500 delay-100 translate-x-52 sm:translate-x-56"
            : "transition duration-1000 delay-1000 translate-x-0"
        }`}
      >
        Joindre
      </h1>
    </section>
  );
}

export default Joindre;
