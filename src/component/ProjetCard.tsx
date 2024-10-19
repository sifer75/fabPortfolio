import { MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjetCard = ({
  title,
  description,
  img,
  stack,
  link,
}: {
  title: string;
  description: string;
  img: string;
  stack: { title: string; color: string }[];
  link: string;
}) => {
  return (
    <Link to={`${link}`}>
      <div className="border-2 border-black hover:border-yellow-200 transition-all bg-blue-700 items-center hover:shadow-2xl duration-200 p-4 rounded-xl flex flex-col w-[420px] h-fit">
        <img
          src={img}
          className="w-full h-60 object-cover rounded-xl border-2 border-black"
        ></img>
        <div className="h-fit w-full p-5 flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <h2 className="text-yellow-100 font-Neue text-xl ml-2">{title}</h2>
            <MousePointerClick className="w-5 h-5 text-white" />
          </div>
          <p className="text-white font-Neue">{description}</p>
          <div className="flex gap-2">
            {stack.map((stk) => (
              <div
                className={` ${stk.color} p-1.5 border text-yellow-100 text-sm font-Neue rounded-lg flex items-center justify-center`}
                key={stk.title}
              >
                {stk.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjetCard;
