import { Link } from "react-router-dom";
import Fabien from "../../assets/fabien.png";

function Decription() {
  const links = [
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/fabien-taupin/",
      border: "border-orange-400",
    },
    {
      title: "Github",
      url: "https://github.com/sifer75",
      border: "border-yellow-400",
    },
    { title: "Cv", url: "/cv", border: "border-red-400" },
  ];

  return (
    <section
      id="Description"
      className="min-h-screen h-screen w-full flex flex-col xxs:items-center sm:items-stretch justify-between py-28 px-10 "
    >
      <h1 className={`flex w-full text-8xl font-Merich text-yellow-100 pb-5`}>
        Description
      </h1>
      <div className="w-full h-full flex gap-20">
        <div className="flex flex-col w-2/3 justify-around">
          <p className="font-Neue text-yellow-300 text-xl w-full pl-5 pb-10">
            Développeur front end passionné par la création de solutions
            innovantes, je suis spécialisé dans la mise en place de sites web et
            d'applications web robustes et performantes. J'aime résoudre des
            problèmes complexes en utilisant des approches créatives et des
            solutions technologiques de pointe. J'apprécie le travail en équipe
            et intégrer les suggestions pour contribuer au succès de projets.
            Également attentif aux détails, orienté vers la qualité et soucieux
            de l'expérience utilisateur. Je m'efforce de créer des produits qui
            sont esthétiquement plaisants et faciles à utiliser.
          </p>
          <div className="w-full  h-fit flex-col flex  gap-4 flex-grow-0 items-center">
            <h2 className="w-full font-Merich text-yellow-100 text-3xl">
              Mes liens:
            </h2>
            <div className="flex w-full h-fit justify-start gap-5 text-yellow-100 pl-5">
              {links.map(
                (link: { title: string; url: string; border: string }) => (
                  <Link to={link.url}>
                    <button
                      className={`border-2 rounded-xl p-2 h-fit text-xl w-32 ${link.border}`}
                    >
                      {link.title}
                    </button>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
        <img
          className=" h-60 bg-cover bg-center mt-1 bg-no-repeat border border-white rounded-xl"
          src={Fabien}
          alt="photo"
        ></img>
      </div>
    </section>
  );
}

export default Decription;
