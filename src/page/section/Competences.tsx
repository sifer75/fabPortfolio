import { techs } from "../../lib/competences.utils";
import CompetencesCard from "../../component/CompetenceCard";
const Competences = () => {
  return (
    <section
      id="Compétences"
      className="h-fit w-full gap-10 py-24 px-10 flex justify-center"
    >
      <div className="bg-blue-600 w-full xs:w-3/4 sm:1/2  h-full border-2 border-yellow-100 rounded-xl flex flex-col lg:flex-row lg:items-start items-center justify-between px-5 lg:px-0">
        {Object.entries(techs).map(([category, techList]) => (
          <div
            key={category}
            className={`flex flex-col items-center gap-5 xs:gap-7 w-full h-fit p-5  ${
              category === "Backend"
                ? "border-y border-yellow-100 lg:border-y-0 lg:border-x"
                : ""
            }  `}
          >
            <h2 className="text-yellow-100 font-Merich text-3xl xs:text-4xl sm:text-5xl lg:text-3xl">
              {category}
            </h2>
            <div className="w-full h-full font-Neue flex gap-5 items-center  flex-col">
              {techList.map((tech: { img: string; title: string }) => (
                <CompetencesCard
                  src={tech.img}
                  title={tech.title}
                ></CompetencesCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competences;
