import { Link } from "react-router-dom";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Cv from "../assets/cvlogo.svg";

const links = [
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/fabien-taupin/",
    border: "border-orange-400",
    image: Linkedin,
  },
  {
    title: "Github",
    url: "https://github.com/sifer75",
    border: "border-yellow-400",
    image: Github,
  },
  { title: "Cv", url: "/cv", border: "border-red-400", image: Cv },
];
function Links() {
  return (
    <div className="flex z-10 h-fit justify-start gap-5 text-yellow-100 border border-yellow-100 rounded-xl w-fit p-5">
      {links.map(
        (link: {
          title: string;
          url: string;
          border: string;
          image: string;
        }) => (
          <Link to={link.url} key={link.title}>
            <button
              className={`border-2 rounded-xl p-2 h-fit  text-xl  ${link.border}`}
            >
              <img src={link.image} alt="logo" className="min-w-10"></img>
            </button>
          </Link>
        )
      )}
    </div>
  );
}

export default Links;
