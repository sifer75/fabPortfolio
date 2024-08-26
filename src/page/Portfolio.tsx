import { BentoGrid, BentoGridItem } from "../component/bentoGrid";

const projects: {
    img: string;
    title: string;
    description: string;
}[] = [
    {
        title: "Projet 1",
        img: "",
        description: "Projet 1 description",
    },
    {
        title: "Projet 2",
        img: "",
        description: "Projet 2 description",
    },
    {
        title: "Projet 3",
        img: "",
        description: "Projet 3 description",
    },
];

function Portfolio() {
    return (
        <section
            id="Portfolio"
            className="flex flex-grow min-h-screen h-screen w-full flex-col items-center pt-24 pb-10 px-10"
        >
            <h1
                className={`flex w-full text-8xl font-Merich text-yellow-100 pb-5`}
            >
                Projets
            </h1>
            <div className="flex flex-col justify-center items-center h-full w-full">
                <BentoGrid className="w-full">
                    {projects.map((project, index) => {
                        return (
                            <BentoGridItem
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                className={`${
                                    index === 0 ? "col-span-2" : ""
                                } last:col-span-3`}
                            />
                        );
                    })}
                </BentoGrid>
            </div>
        </section>
    );
}

export default Portfolio;
