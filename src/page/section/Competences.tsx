import { techs } from "../../lib/competences.utils";

const Competences = () => {
  const {
    frontend: competencesFront,
    backend: competencesBack,
    database: dataBase,
  } = techs;

  return (
    <section
      id="Compétences"
      className="flex h-fit w-full flex-col items-center justify-between py-24 px-10"
    >
      <div className="flex w-full h-fit bg-blue-600 items-start rounded-xl border p-5">
        <div className="w-full p-5 flex flex-col items-center gap-5 justify-around">
          <h1 className="font-Merich text-yellow-100 text-4xl">Frontend</h1>
          {competencesFront.map(({ img, title }, index: number) => (
            <div
              className="w-2/3 h-fit flex flex-col p-2 items-center justify-center bg-blue-500 rounded-xl border"
              key={index}
            >
              <img
                src={img}
                className="h-12 w-12 bg-cover rounded-xl"
                alt="logo"
              />
              <span className="min-w-full justify-center flex items-center text-xl font-Neue text-yellow-100">
                {title}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full p-5 flex flex-col items-center gap-5 justify-around">
          <h1 className="font-Merich text-yellow-100 text-4xl">Backend</h1>
          {competencesBack.map(({ img, title }, index: number) => (
            <div
              className="w-2/3 h-fit flex flex-col p-2 items-center justify-center bg-blue-500 rounded-xl border "
              key={index}
            >
              <img
                src={img}
                className="h-12 w-12 bg-cover rounded-xl"
                alt="logo"
              />
              <span className="min-w-full justify-center flex items-center text-xl font-Neue text-yellow-100">
                {title}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full p-5 flex flex-col items-center gap-5 justify-around">
          <h1 className="font-Merich text-yellow-100 text-4xl">Database</h1>
          {dataBase.map(({ img, title }, index: number) => (
            <div
              className="w-2/3 h-fit flex flex-col p-2 items-center justify-center bg-blue-500 rounded-xl border "
              key={index}
            >
              <img
                src={img}
                className="h-12 w-12 bg-cover rounded-xl"
                alt="logo"
              />
              <span className="min-w-full justify-center flex items-center text-xl font-Neue text-yellow-100">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competences;
