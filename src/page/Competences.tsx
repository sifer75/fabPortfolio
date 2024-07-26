import { techs } from "../lib/competences.utils";
import Html from "../assets/html.png";

import type React from "react";
import WithMenuShouldChange from "../component/types/WithMenuShouldChange";

interface CompetencesProps extends WithMenuShouldChange {
  competencesRef: React.RefObject<HTMLDivElement>;
}

// const competences = [...techs.frontend, ...techs.backend, ...techs.deployment];

const Competences = ({
  competencesRef,
  menuShouldChange,
}: CompetencesProps) => {
  return (
    <section
      className="flex flex-grow w-screen h-screen flex-col items-center justify-between pt-24 pb-10 px-10"
      ref={competencesRef}
    >
      <h1
        className={`flex w-full text-8xl font-Merich text-yellow-100 pb-5 ${
          menuShouldChange
            ? "transition duration-500 delay-100 translate-x-52 sm:translate-x-56"
            : "transition duration-1000 delay-1000 translate-x-0"
        }`}
      >
        Compétences
      </h1>
      <div
        className={`flex-grow grid grid-cols-5 grid-rows-3 gap-x-24 gap-y-5 h-full${
          menuShouldChange
            ? "transition duration-500 delay-100 translate-x-28"
            : "transition duration-1000 delay-1000 translate-x-0"
        }`}
      >
        {/* {competences.map(({ img }, index: number) => ( */}
        <div className="box">
          <img src={Html} className="w-30 h-30" alt="logo tech" />
        </div>
        {/* ))} */}
      </div>
    </section>
  );
};

export default Competences;
