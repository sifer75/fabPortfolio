import yugioh from "../../assets/yugioh.png";
import kanban from "../../assets/funn.svg";
import ProjetCard from "../../component/ProjetCard";
const projects: {
  img: string;
  title: string;
  description: string;
  stack: string[];
}[] = [
  {
    title: "Yu-Gi-Oh",
    img: yugioh,
    description: "Utilisation d’une API pour la database.",
    stack: ["react", "css", "express", "mongoDB"],
  },
  {
    title: "Kanban",
    img: kanban,
    description: "Application Full Stack",
    stack: ["react", "typescript", "tailwindCss", "adonisJs", "postgreSql"],
  },
];

function Portfolio() {
  return (
    <section
      id="Portfolio"
      className="flex flex-grow min-h-screen h-screen w-full flex-col items-center pt-24 pb-10 px-10"
    >
      <h1 className={`flex w-full text-8xl font-Merich text-yellow-100 pb-5`}>
        Projets
      </h1>
      <div className="flex gap-10 p-10 justify-around items-center h-full w-full">
        {projects.map((project) => {
          return (
            <ProjetCard
              key={project.title}
              title={project.title}
              description={project.description}
              img={project.img}
              stack={project.stack}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
