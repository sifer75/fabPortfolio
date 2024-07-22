import { useCallback, useEffect, useRef, useState } from "react";

import type { RefObject, Dispatch, SetStateAction } from "react";
import type { Id } from "../types/Number";
import type { OneOrMany } from "../types/Utils";

const sections = {
  home: "Accueil",
  portfolio: "Portfolio",
  skills: "Compétences",
  contact: "Joindre",
} as const;

const buttonsSectionsClassnamesMatchers = {
  home: "border-orange-400",
  portfolio: "border-yellow-400",
  skills: "border-green-400",
  contact: "border-blue-400",
} as const satisfies Record<Section, string>;

interface MenuProps {
  menuShouldChange: boolean;
  setMenuShouldChange: Dispatch<SetStateAction<boolean>>;
  sectionsRefs: Record<Section, RefObject<HTMLDivElement>>;
}

function Menu({
  menuShouldChange,
  setMenuShouldChange,
  sectionsRefs,
}: MenuProps) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [menuIsHovered, setMenuIsHovered] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [animateButton, setAnimateButton] = useState<boolean>(false);

  const timeoutsIdsSetRef = useRef<Set<Id>>(new Set());

  const scrollToSection = useCallback(
    (section: RefObject<HTMLDivElement>) =>
      section.current !== null &&
      section.current.scrollIntoView({ behavior: "smooth" }),

    []
  );

  const generateButtons = useCallback(() => {
    return Object.keys(sections).map((k) => {
      const k2 = k as Section;

      return (
        <button
          key={k}
          className={`border-2 rounded-xl p-2 hover:scale-110 hover:duration-300 hover:delay-0 transition duration-700 ${
            buttonsSectionsClassnamesMatchers[k2]
          } ${
            animateButton
              ? "delay-300 translate-y-8 opacity-100"
              : "delay-0 -translate-y-8 opacity-0"
          }`}
          onClick={() => scrollToSection(sectionsRefs[k2])}
        >
          {sections[k2]}
        </button>
      );
    });
  }, [animateButton, scrollToSection, sectionsRefs]);

  const clearTimeouts = useCallback(
    (
      selector: OneOrMany<Id> = Array.from(timeoutsIdsSetRef.current.values())
    ) => {
      function cleanup(selector: Id) {
        clearTimeout(selector);
        timeoutsIdsSetRef.current.delete(selector);
      }

      !Array.isArray(selector) ? cleanup(selector) : selector.forEach(cleanup);
    },

    []
  );

  // {ToDo} Trouver une alternative au useEffect
  useEffect(() => {
    const invokeButtonsAnimationAfterOpenedMenuCoroutine = () => {
      const t1 = setTimeout(() => {
        setMenuIsOpen(true);

        const t2 = setTimeout(() => {
          setShowButton(true);

          const t3 = setTimeout(() => {
            setAnimateButton(true);
            clearTimeouts([t1, t2, t3]);
          }, 100);
          timeoutsIdsSetRef.current.add(t3);
        }, 100);
        timeoutsIdsSetRef.current.add(t2);
      }, 500);
      timeoutsIdsSetRef.current.add(t1);
    };

    function invokeCloseMenuAfterButtonsAnimationCoroutine() {
      setAnimateButton(false);

      const t = setTimeout(() => {
        setShowButton(false);
        setMenuIsOpen(false);
        clearTimeouts(t);
      }, 800);
      timeoutsIdsSetRef.current.add(t);
    }

    const dispose = () => clearTimeouts();

    if (menuShouldChange) {
      invokeButtonsAnimationAfterOpenedMenuCoroutine();
      return dispose;
    }

    invokeCloseMenuAfterButtonsAnimationCoroutine();
    return dispose;
  }, [menuShouldChange, clearTimeouts]);

  return (
    <aside className="h-full w-max flex fixed z-10">
      {/* menu blanc */}
      <div
        className={`absolute top-4 left-4 z-10 transition-all duration-500 ease-in-out bg-white ${
          menuIsOpen
            ? "w-44 h-full top-0 left-0 scale-150"
            : `w-16 h-16 rounded-full  ${
                menuIsHovered ? "scale-125 shadow-2xl" : "scale-100"
              }`
        }`}
      />

      {/* barre noir du menu */}
      <div
        className={`absolute top-2 left-2 z-20 w-20 h-20 rounded-full flex flex-col gap-1.5 items-center justify-center hover:scale-125  transition-all duration-100 ease-in-out ${
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
        />

        <div
          className={`bg-black w-8 h-1 transition-opacity duration-100 ${
            menuIsOpen ? "opacity-0" : "opacity-100"
          }`}
        />

        <div
          className={`bg-black w-8 h-1 transform transition-transform duration-150 ${
            menuIsOpen
              ? "-rotate-45 -translate-y-2.5"
              : "rotate-0 translate-y-0"
          }`}
        />
      </div>

      {/* boutton de sélection */}
      <div
        className={`h-full z-30 w-auto ml-20 flex items-center justify-start `}
      >
        {showButton && (
          <div className="flex flex-col gap-6">{generateButtons()}</div>
        )}
      </div>
    </aside>
  );
}

export default Menu;

type Section = keyof typeof sections;
