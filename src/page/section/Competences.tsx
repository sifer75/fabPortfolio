import { techs } from "../../lib/competences.utils";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Competences = () => {
  const competencesFront = useMemo(() => [...techs.frontend], []);
  const competencesBack = useMemo(() => [...techs.backend], []);
  const navigate = useNavigate();
  return (
    <section
      id="Compétences"
      className="flex flex-grow min-h-screen h-screen w-full flex-col items-center justify-between pt-24 pb-10 px-10"
    >
      <h1 className="flex w-full text-8xl font-Merich text-yellow-100 pb-7">
        Compétences
      </h1>
      <div className="flex flex-col w-full h-fit bg-blue-600 items-center rounded-xl border p-5">
        <div className="w-full h-full flex justify-between">
          <div className="w-full p-5 flex flex-col items-center gap-5 justify-around">
            <h1 className="font-Merich text-yellow-100 text-4xl">FrontEnd</h1>
            <div className="w-full h-fit flex flex-col gap-5 items-center justify-center">
              {competencesFront.map(({ img, title }, index: number) => (
                <div
                  className="flex w-full bg-slate-500 h-fit items-center gap-5  border rounded-xl p-2 px-5"
                  key={index}
                >
                  <img
                    src={img}
                    key={index}
                    className="h-10 min-w-10 bg-cover border border-slate-50 rounded-xl p-2 bg-slate-300"
                    alt="logo"
                  />
                  <span className="min-w-full flex items-center text-xl font-Neue text-yellow-100">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full p-5 flex flex-col items-center gap-5 justify-around">
            <h1 className="font-Merich text-yellow-100 text-4xl">FrontEnd</h1>
            <div className="w-full h-fit flex flex-col gap-5 items-center justify-center">
              {competencesBack.map(({ img, title }, index: number) => (
                <div
                  className="flex w-full bg-slate-500 h-fit items-center gap-5  border rounded-xl p-2 px-5"
                  key={index}
                >
                  <img
                    src={img}
                    key={index}
                    className="h-10 min-w-10 bg-cover border border-slate-50 rounded-xl p-2 bg-slate-300"
                    alt="logo"
                  />
                  <span className="min-w-full flex items-center text-xl font-Neue text-yellow-100">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className="border-2 rounded-xl w-fit hover:scale-110 bg-yellow-400 transition-all hover:bg-yellow-200 p-5"
          onClick={() => navigate("/cv")}
        >
          Voir mon CV
        </button>
      </div>
    </section>
  );
};

export default Competences;
