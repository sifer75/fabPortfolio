import CyclingSkills from "./fragments/CyclingSkills";
import type WithMenuShouldChange from "./types/WithMenuShouldChange";

interface WhoAmIProps extends WithMenuShouldChange {}

const me = ["Taupin", "Fabien"] as const;

const MyHeadline = ({ menuShouldChange }: WhoAmIProps) => (
  <div
    className={`sm:w-[316px] md:w-[422px] max-w-full ${
      menuShouldChange
        ? "transition duration-500 delay-100 translate-x-52 sm:translate-x-56"
        : "transition duration-1000 delay-1000 translate-x-0"
    }`}
  >
    <h1 className=" font-Merich w-fit text-yellow-100">
      {me.map((txt, k) => (
        <div
          className="xxs:text-7xl xs:text-8xl sm:text-8xl md:text-9xl"
          key={k}
        >
          {txt}
        </div>
      ))}
    </h1>

    <CyclingSkills />
  </div>
);

export default MyHeadline;
