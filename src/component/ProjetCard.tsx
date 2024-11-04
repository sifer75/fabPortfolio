import { MousePointerClick } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

interface DetailProps {
  category: string;
  role: string;
  tag: string[];
}
export const ProjetCard = ({
  title,
  description,
  img,
  detail,
  link,
  github,
}: {
  title: string;
  description: string;
  img: string;
  detail: DetailProps;
  link: string;
  github: string;
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLargeScreen < 1024 ? (
    <div className="h-full w-full flex flex-col justify-between gap-10">
      <Link to={link} className="w-full h-full relative group">
        <img
          src={img}
          alt="link"
          className="h-full w-full hover:border-yellow-100 transition-all hover:shadow-2xl object-cover rounded-xl border-2 border-black"
        ></img>
        <MousePointerClick className="absolute top-5 group-hover:scale-125 transition-all left-5 h-8 xs:h-10 sm:h-12 w-8 xs:w-10 sm:w-12 text-white" />
      </Link>
      <div className="flex flex-col gap-5">
        <h1 className="font-Merich text-yellow-100 text-4xl xs:text-5xl sm:text-6xl">
          {title}
        </h1>
        <p className="font-Neue text-yellow-100 text-sm sm:text-lg">
          {description}
        </p>
        <div className="[&>p]:border-yellow-100 flex flex-col  xs:[&>p]:text-sm [&>p]:py-2 [&>p]:italic &>p]:font-Neue [&>p]:text-yellow-100 w-full">
          <p className="border-t flex gap-6 items-center text-xs xs:text-sm ">
            <span className="sm:text-lg">Categorie:</span>
            <span className="sm:text-lg">{detail.category}</span>
          </p>
          <p className="border-y flex gap-14 sm:gap-16 items-center text-xs sm:text-lg">
            <span className="sm:text-lg">Role:</span>
            <span className="sm:text-lg">{detail.role}</span>
          </p>
          <p className="border-b flex gap-12 sm:gap-14 items-center text-xs sm:text-lg">
            <span className="sm:text-lg">Stack:</span>
            <span className="sm:text-lg">{detail.tag.join(", ")}</span>
          </p>
        </div>
        {/* <Link
          to={github}
          className="flex text-merich justify-center gap-2 items-center"
        >
          <p className="text-yellow-100 text-2xl xs:text-3xl sm:text-4xl transition-all">
            Voir le Github
          </p>
          <MousePointerClick className="w-10 h-8 xs:h-10 sm:h-14 transition-all text-yellow-200" />
        </Link> */}
        <Button title="Voir mon Github" link={github} type="button" />
      </div>
    </div>
  ) : (
    <div className="w-full h-4/5 flex justify-between items-start gap-14 py-24 border-y border-yellow-100">
      <div className="h-full w-1/2 flex flex-col justify-between">
        <div className="flex flex-col gap-5 justify-start h-full">
          <h1 className="font-Merich text-yellow-100 text-6xl">{title}</h1>
          <p className="font-Neue text-yellow-100 text-lg">{description}</p>
          <div className="[&>p]:border-yellow-100 flex flex-col  xs:[&>p]:text-sm [&>p]:py-2 [&>p]:italic &>p]:font-Neue [&>p]:text-yellow-100 w-full">
            <p className="border-t flex gap-6 items-center text-sm ">
              <span className="sm:text-lg">Categorie:</span>
              <span className="sm:text-lg">{detail.category}</span>
            </p>
            <p className="border-y flex gap-14 sm:gap-16 items-center text-lg">
              <span className="sm:text-lg">Role:</span>
              <span className="sm:text-lg">{detail.role}</span>
            </p>
            <p className="border-b flex gap-12 sm:gap-14 items-center">
              <span className="sm:text-lg">Stack:</span>
              <span className="text-lg">{detail.tag.join(", ")}</span>
            </p>
          </div>
        </div>
        {/* <Link
          to={github}
          className="w-fit flex text-merich group gap-5 items-center mt-4 hover:scale-125"
        >
          <p className="text-yellow-100 text-4xl transition-all">
            Voir le gitHub
          </p>
        </Link> */}
        <Button title="Voir mon Github" link={github} />
      </div>
      <Link to={link} className="w-1/2 h-full relative group">
        <img
          src={img}
          alt="link"
          className={`h-[402px] w-full hover:border-white transition-all hover:shadow-2xl border-2 border-black object-cover rounded-xl ${
            title === "Kanban" ? "border-black rounded-xl blur-sm" : ""
          }`}
        ></img>
        {title === "Kanban" ? (
          <h2 className="absolute inset-0 flex items-center justify-center group-hover:scale-125 transition-all text-2xl left-10 text-black font-Merich">
            Prochainement
          </h2>
        ) : (
          <MousePointerClick className="absolute top-10 group-hover:scale-125 transition-all left-10 w-12 h-12 text-white" />
        )}
      </Link>
    </div>
  );
};

export default ProjetCard;
