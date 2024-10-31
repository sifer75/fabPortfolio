import { MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";

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
  gitHub,
}: {
  title: string;
  description: string;
  img: string;
  detail: DetailProps;
  link: string;
  gitHub: string;
}) => {
  return (
    <div className="w-full h-4/5 flex justify-between items-center gap-14 py-24 border-y border-white">
      <div className="h-full w-1/2 flex flex-col justify-between ">
        <div className="flex flex-col gap-10 justify-start h-full pb-20">
          <h1 className="font-Merich text-yellow-100 text-5xl">{title}</h1>
          {description}
          <div className="flex flex-col w-full">
            <div className="w-full flex items-center">
              <div className="[&>p]:border-black flex flex-col [&>p]:py-2 [&>p]:italic ">
                <p className="border-t">Categorie: </p>
                <p className="border-y">Role: </p>
                <p className="border-b">Stack: </p>
              </div>
              <div className="flex flex-col [&>p]:py-2 [&>p]:pl-4 [&>p]:border-black w-full  border-black py-2">
                <p className="border-t">{detail.category}</p>
                <p className="border-y">{detail.role}</p>
                <p className="border-b">{detail.tag.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
        <Link
          to={gitHub}
          className="w-fit flex text-merich group text-yellow-100 gap-5 text-3xl items-center mb-10"
        >
          Github
          <MousePointerClick className="w-14 text-black h-14 group-hover:scale-125 transition-all group-hover:text-yellow-100" />
        </Link>
      </div>
      <Link to={link} className="w-1/2 h-full relative group">
        <img
          src={img}
          className="h-full hover:border-white transition-all hover:shadow-2xl object-cover rounded-xl border-2 border-black"
        ></img>
        <MousePointerClick className="absolute top-10 group-hover:scale-125 transition-all left-10 w-10 h-10 text-white" />
      </Link>
    </div>
  );
};

export default ProjetCard;
