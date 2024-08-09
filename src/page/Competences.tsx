import { techs } from "../lib/competences.utils";
import type React from "react";
import WithMenuShouldChange from "../component/types/WithMenuShouldChange";
import { useMemo, useState } from "react";
import CompetenceItem from "../component/fragments/CompetenceItem";

interface CompetencesProps extends WithMenuShouldChange {
  competencesRef: React.RefObject<HTMLDivElement>;
}

const Competences = ({
  competencesRef,
  menuShouldChange,
}: CompetencesProps) => {
  const competences = useMemo(
    () => [...techs.frontend, ...techs.backend, ...techs.deployment],
    []
  );
  const [animationState, setAnimationState] = useState<{
    [key: number]: "slide-down" | "slide-up" | "early-exit" | "none";
  }>(
    competences.reduce((acc, _, index) => {
      acc[index] = "none";
      return acc;
    }, {} as { [key: number]: "slide-down" | "slide-up" | "early-exit" | "none" })
  );
  console.log(animationState, "state");

  return (
    <section
      className="flex flex-grow w-screen h-screen flex-col items-center justify-between pt-24 pb-10 px-10"
      ref={competencesRef}
    >
      <h1
        className={`flex w-full text-8xl font-Merich text-yellow-100 pb-7 ${
          menuShouldChange
            ? "transition duration-500 delay-100 translate-x-52 sm:translate-x-56"
            : "transition duration-1000 delay-1000 translate-x-0"
        }`}
      >
        Compétences
      </h1>
      <div
        className={`flex-grow grid grid-cols-5 grid-rows-3 gap-x-20 gap-y-5 h-full ${
          menuShouldChange
            ? "transition duration-500 delay-500 translate-x-28"
            : "transition duration-1000 delay-1000 translate-x-0"
        }`}
      >
        {competences.map(({ img, title }, index: number) => (
          <CompetenceItem
            key={index}
            img={img}
            title={title}
            index={index}
            animationState={animationState[index]}
            setAnimationState={setAnimationState}
          />
        ))}
      </div>
    </section>
  );
};

export default Competences;
