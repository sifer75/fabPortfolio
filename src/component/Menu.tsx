import { useState } from "react";

function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const buttons = [
    { text: "Accueil", border: "border-orange-400" },
    { text: "Portfolio", border: "border-blue-400" },
    { text: "Compétences", border: "border-red-400" },
    { text: "Joindre", border: "border-green-400" },
  ] as const;

  return (
    <div
      onClick={() => setMenuIsOpen(!menuIsOpen)}
      className={`flex flex-col transition-all duration-700 overflow-hidden ease-in-out bg-white ${
        menuIsOpen
          ? "h-screen w-60"
          : " h-16 w-16 rounded-[48px] ml-5 mt-4 hover:scale-125 "
      }`}
    >
      <div
        className={`transition-all hover:scale-110 relative duration-200 ease-in-out h-16 w-16 rounded-full aspect-square flex flex-col justify-center items-center`}
      >
        <div
          className={`rounded-full flex flex-col gap-1.5 items-center justify-center transition-all duration-100 ease-in-out`}
        >
          <div
            className={`bg-black w-8 h-1 transform transition-transform duration-150 ${
              menuIsOpen
                ? "rotate-45 translate-y-2.5"
                : "rotate-0 translate-y-0 "
            }`}
          ></div>
          <div
            className={`bg-black w-8 h-1 transition-opacity duration-100 ${
              menuIsOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`bg-black w-8 h-1 transform transition-transform duration-150 ${
              menuIsOpen
                ? "-rotate-45 -translate-y-2.5"
                : "rotate-0 translate-y-0"
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`${
          menuIsOpen ? "" : "h-0"
        } h-screen w-full flex flex-col gap-6 px-5 pt-5`}
      >
        {buttons.map(({ text, border }, index: number) => (
          <a
            href={`#${text}`}
            key={index}
            onClick={() => setMenuIsOpen(false)}
            style={{
              transitionDelay: `${menuIsOpen ? 200 + index * 150 : 0}ms`,
            }}
            className={`${
              menuIsOpen
                ? "opacity-100"
                : "opacity-0 -translate-x-full  hover:scale-110"
            } border-2 rounded-xl p-2 ${border} hover:scale-110 hover:delay-0 duration-100 transition-all`}
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Menu;
