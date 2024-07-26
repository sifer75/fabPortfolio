import React, { useEffect, useState } from "react";
import type WithMenuShouldChange from "./types/WithMenuShouldChange";

interface MenuProps extends WithMenuShouldChange {
  setMenuShouldChange: React.Dispatch<React.SetStateAction<boolean>>;
  sectionRef: {
    Accueil: React.RefObject<HTMLDivElement>;
    Portfolio: React.RefObject<HTMLDivElement>;
    Compétences: React.RefObject<HTMLDivElement>;
    Joindre: React.RefObject<HTMLDivElement>;
  };
}
function Menu({
  menuShouldChange,
  setMenuShouldChange,
  sectionRef,
}: MenuProps) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [menuIsHovered, setMenuIsHovered] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [animateButton, setAnimateButton] = useState<boolean>(false);
  const buttons = [
    { text: "Accueil", border: "border-orange-400" },
    { text: "Compétences", border: "border-red-400" },
    { text: "Portfolio", border: "border-blue-400" },
    { text: "Joindre", border: "border-green-400" },
  ] as const;

  //trouver une alternative au useEffect
  useEffect(() => {
    //animation des boutons apres ouverture du menu
    if (menuShouldChange) {
      const timeout = setTimeout(() => {
        setMenuIsOpen(true);
        setTimeout(() => {
          setShowButton(true);
          setTimeout(() => {
            setAnimateButton(true);
          }, 100);
        }, 100);
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      //fermeture du menu apres animation des boutons
      setAnimateButton(false);
      const timeout = setTimeout(() => {
        setShowButton(false);
        setMenuIsOpen(false);
      }, 800);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [menuShouldChange]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-full w-max flex fixed z-10">
      {/* menu blanc */}
      <div
        className={`absolute top-4 left-4 z-10 transition-all duration-500 ease-in-out bg-white ${
          menuIsOpen
            ? "w-40 h-full top-0 left-0 scale-150"
            : `w-16 h-16 rounded-full  ${
                menuIsHovered ? "scale-125 shadow-2xl" : "scale-100"
              }`
        }`}
      ></div>
      {/* barre noir du menu */}
      <div
        className={`absolute top-2 left-2 z-50 w-20 h-20 rounded-full flex flex-col gap-1.5 items-center justify-center hover:scale-125 transition-all duration-100 ease-in-out ${
          menuIsOpen ? "" : "hover:scale-125"
        }`}
        onClick={() => setMenuShouldChange(!menuShouldChange)}
        onMouseEnter={() => setMenuIsHovered(true)}
        onMouseLeave={() => setMenuIsHovered(false)}
      >
        <div
          className={`bg-black w-8 h-1 transform transition-transform duration-150 ${
            menuIsOpen ? "rotate-45 translate-y-2.5" : "rotate-0 translate-y-0 "
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
      {/* boutton de sélection */}
      <div className="h-full z-30 w-auto flex items-center justify-start">
        {showButton ? (
          <div className="flex ml-12 flex-col gap-6">
            {buttons.map(({ text, border }, index: number) => (
              <button
                key={index}
                className={`border-2 rounded-xl p-2 ${border} hover:scale-110 hover:duration-300 hover:delay-0 transition duration-700 ${
                  animateButton
                    ? "delay-300 translate-y-8 opacity-100"
                    : "delay-0 -translate-y-8 opacity-0"
                }`}
                onClick={() =>
                  scrollToSection(sectionRef[text as keyof typeof sectionRef])
                }
              >
                {text}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Menu;
