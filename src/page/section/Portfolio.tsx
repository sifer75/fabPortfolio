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
      "Conçu pour me perfectionner dans le développement frontend. Ils’appuie sur une API pour simuler le backend, me permettant demettre en pratique des compétences telles que la gestion d’état, lesappels API, et les interactions utilisateur tout en explorant des technologies modernes du frontend.",
    detail: {
      category: "Site vitrine",
      role: "Initiation au React avec api",
      tag: ["React", "Css", "Express", "MongoDB"],
    },
    link: "https://yu-gi-oh-oh-oh.netlify.app/",
    gitHub: "https://github.com/sifer75/YU-GI-OH/tree/main/YU-GI-OH",
  },
  {
    title: "Kanban",
    img: kanban,
    description:
      "Conçu pour me perfectionner dans le développement frontend. Ils’appuie sur une API pour simuler le backend, me permettant demettre en pratique des compétences telles que la gestion d’état, lesappels API, et les interactions utilisateur tout en explorant destechnologies modernes du frontend.",
    detail: {
      category: "Gestionnaire de Tâches",
      role: "Application full Stack",
      tag: ["React", "Tailwind", "AdoniJs", "Postgre"],
    },
    link: "https://yu-gi-oh-oh-oh.netlify.app/",
    gitHub: "https://github.com/sifer75/fun",
  },
];

function Portfolio() {
  return (
    <section
      id="Portfolio"
      className="flex flex-grow h-fit w-full flex-col items-center py-20 px-10"
    >
      {projects.map((project) => {
        return (
          <ProjetCard
            key={project.title}
            title={project.title}
            description={project.description}
            img={project.img}
            detail={project.detail}
            link={project.link}
            gitHub={project.gitHub}
          />
        );
      })}
    </section>
  );
}

export default Portfolio;
