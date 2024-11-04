import { MousePointerClick } from "lucide-react";
import { FormEvent } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: (e: FormEvent) => void;
  link?: string;
  title: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  link,
  title,
}) => (
  <button
    className="px-6 py-3 bg-blue-800 lg:bg-blue-700 border-2 flex items-center hover:shadow-xl justify-center hover:scale-110 transition-all border-yellow-100 rounded-xl w-fit mt-5 mb-10"
    type={type}
    onClick={onClick}
  >
    {link ? (
      <a
        href={link}
        className="font-Merich text-lg xs:text-xl lg:text-2xl text-yellow-100 flex gap-2 items-center"
      >
        {title}
        <MousePointerClick className="w-7 xs:w-8 lg:w-9 text-yellow-200 h-12 group-hover:scale-125 transition-all" />
      </a>
    ) : (
      <span className="font-Merich text-lg xs:text-xl lg:text-2xl text-yellow-100 flex gap-2 items-center">
        {title}
        <MousePointerClick className="w-7 xs:w-8 lg:w-9 text-yellow-200 h-12 group-hover:scale-125 transition-all" />
      </span>
    )}
  </button>
);

export default Button;
