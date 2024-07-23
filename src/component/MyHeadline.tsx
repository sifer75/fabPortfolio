import CyclingSkills from "./fragments/CyclingSkills";
import type WithMenuShouldChange from "./types/WithMenuShouldChange";

interface WhoAmIProps extends WithMenuShouldChange {}

const ME = ["Taupin", "Fabien"] as const;

const MyHeadline = ({ menuShouldChange }: WhoAmIProps) => (
  <div
    className={`w-[422px] max-w-full ${
      menuShouldChange
        ? "transition duration-500 delay-100 translate-x-60"
        : "transition duration-1000 delay-1000 translate-x-0"
    }`}
  >
    <h1 className="text-9xl font-Merich w-fit text-yellow-100 pb-5 max-sm:text-4xl">
      {ME.map((txt, k) => (
        <span className="block" key={k}>
          {txt}
        </span>
      ))}
    </h1>

    <CyclingSkills />
  </div>
);

export default MyHeadline;
