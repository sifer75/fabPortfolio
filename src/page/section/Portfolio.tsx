import yugioh from "../../assets/yugioh.png";
import kanban from "../../assets/kanban.png";
import ProjetCard from "../../component/ProjetCard";
const projects: {
  img: string;
  title: string;
  description: string;
  stack: { title: string; color: string }[];
  link: string;
}[] = [
  {
    title: "Yu-Gi-Oh",
    img: yugioh,
    description: "Utilisation d’une API pour la database",
    stack: [
      { title: "React", color: "bg-blue-500 border-black" },
      { title: "Css", color: "bg-blue-500 border-black" },
      { title: "Express", color: "bg-blue-500 border-black" },
      { title: "MongoDB", color: "bg-blue-500 border-black" },
    ],
    link: "https://yu-gi-oh-oh-oh.netlify.app/",
  },
  {
    title: "Kanban",
    img: kanban,
    description: "Application Full Stack",
    stack: [
      { title: "React", color: "bg-blue-500 border-black" },
      { title: "Typescript", color: "bg-blue-500 border-black" },
      { title: "Tailwind", color: "bg-blue-500 border-black" },
      { title: "Adonis", color: "bg-blue-500 border-black" },
      { title: "Postgre", color: "bg-blue-500 border-black" },
    ],
    link: "https://yu-gi-oh-oh-oh.netlify.app/",
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
      <div className="flex gap-10 p-10 justify-around w-full items-center h-full border-y border-yellow-100">
        {projects.map((project) => {
          return (
            <ProjetCard
              key={project.title}
              title={project.title}
              description={project.description}
              img={project.img}
              stack={project.stack}
              link={project.link}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
