import yugioh from "../../assets/yugioh.png";
import kanban from "../../assets/kanban.png";
import ProjetCard from "../../component/ProjetCard";
interface DetailProps {
  category: string;
  role: string;
  tag: string[];
}

const projects: {
  img: string;
  title: string;
  description: string;
  detail: DetailProps;
  link: string;
  gitHub: string;
}[] = [
  {
    title: "YU-GI-OH",
    img: yugioh,
    description:
      "Conçu pour me perfectionner dans le développement frontend. Il s'appuie sur une API pour simuler le backend, me permettant de mettre en pratique des compétences telles que la gestion d’état, les appels API, et les interactions utilisateur.",
    detail: {
      category: "Site vitrine",
      role: "Initiation à React",
      tag: ["React", "CSS", "Express", "MongoDB"],
    },
    link: "https://yu-gi-oh-oh-oh.netlify.app/",
    gitHub: "https://github.com/sifer75/YU-GI-OH/tree/main/YU-GI-OH",
  },
  {
    title: "Kanban",
    img: kanban,
    description:
      "Je me suis entraîné à utiliser plusieurs technologies backend, notamment PostgreSQL et AdonisJS. J'ai appris à concevoir des bases de données efficaces avec SQL et à développer des applications robustes avec AdonisJS",
    detail: {
      category: "Gestionnaire de Tâches",
      role: "Application full Stack",
      tag: ["React", "TailwindCSS", "AdonisJS", "PostgreSQL"],
    },
    link: "",
    gitHub: "https://github.com/sifer75/fun",
  },
];

function Portfolio() {
  return (
    <section
      className="flex flex-grow h-fit w-full flex-col items-center gap-40 py-20 px-10"
      id="Portfolio"
    >
      {projects.map((project) => (
        <ProjetCard
          key={project.title}
          title={project.title}
          description={project.description}
          img={project.img}
          detail={project.detail}
          link={project.link}
          gitHub={project.gitHub}
        />
      ))}
    </section>
  );
}

export default Portfolio;
