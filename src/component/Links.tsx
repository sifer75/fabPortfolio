import { Link } from "react-router-dom";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Cv from "../assets/cvlogo.svg";

const links = [
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/fabien-taupin/",
    image: Linkedin,
  },
  {
    title: "Github",
    url: "https://github.com/sifer75",
    image: Github,
  },
  { title: "Cv", url: "/cv", image: Cv },
];

function Links() {
  return (
    <div className="flex z-20 bg-blue-800 top-10 right-12 h-fit justify-start gap-5 text-yellow-100 border-2 border-black rounded-xl w-fit p-5 fixed">
      {links.map((link: { title: string; url: string; image: string }) => (
        <Link to={link.url} key={link.title}>
          <button className="border rounded-xl p-2 h-fit text-xl hover:scale-125 transition-all hover:bg-yellow-200 border-black">
            <img src={link.image} alt="logo" className="w-10 "></img>
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Links;
