import { techs } from "../lib/competences.utils";
import { useMemo, useState } from "react";
import CompetenceItem from "../component/fragments/CompetenceItem";

const Competences = () => {
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

    return (
        <section
            id="Compétences"
            className="flex flex-grow min-h-screen h-screen w-full flex-col items-center justify-between pt-24 pb-10 px-10"
        >
            <h1
                className={`flex w-full text-8xl font-Merich text-yellow-100 pb-7`}
            >
                Compétences
            </h1>
            <div
                className={`flex-grow grid grid-cols-5 grid-rows-3 gap-x-20 gap-y-5 h-full`}
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
