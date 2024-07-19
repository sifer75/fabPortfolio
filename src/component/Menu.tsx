import { useEffect, useState } from "react";

function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [menuIsHovered, setMenuIsHovered] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [animateButton, setAnimateButton] = useState<boolean>(false);
  //   const [menuFinishAnimation, setMenuFinishAnimation] = useState<boolean>(true);
  console.log(menuIsOpen, "menuIsOpen", showButton, "showButton");
  useEffect(() => {
    if (menuIsOpen) {
      const timeout = setTimeout(() => {
        setShowButton(true);
        setTimeout(() => {
          setAnimateButton(true);
        }, 100);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setShowButton(false);
      setAnimateButton(false);
    }
  }, [menuIsOpen]);

  return (
    <div className="relative h-screen w-screen flex">
      {/* menu blanc */}
      <div
        className={`absolute top-4 left-4 z-10 transition-all duration-500 ease-in-out bg-white ${
          menuIsOpen
            ? "w-40 h-full top-0 left-0 scale-150"
            : `w-20 h-20 rounded-full  ${
                menuIsHovered ? "scale-125 shadow-2xl" : "scale-100"
              }`
        }`}
      ></div>
      {/* barre noir du menu */}
      <div
        className={`absolute top-4 left-4 z-20 w-20 h-20 rounded-full flex flex-col gap-2 items-center justify-center hover:scale-125  transition-all duration-100 ease-in-out ${
          menuIsOpen ? "" : "hover:scale-125"
        }`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        onMouseEnter={() => setMenuIsHovered(true)}
        onMouseLeave={() => setMenuIsHovered(false)}
      >
        <div
          className={`bg-black w-10 h-1 transform transition-transform duration-150 ${
            menuIsOpen ? "rotate-45 translate-y-3" : "rotate-0 translate-y-0 "
          }`}
        ></div>
        <div
          className={`bg-black w-10 h-1 transition-opacity duration-100 ${
            menuIsOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`bg-black w-10 h-1 transform transition-transform duration-150 ${
            menuIsOpen ? "-rotate-45 -translate-y-3" : "rotate-0 translate-y-0"
          }`}
        ></div>
      </div>
      {/* boutton de sélection */}
      <div
        className={`h-full z-30 w-40 ml-24 flex items-center justify-start `}
      >
        {showButton ? (
          <div className="flex flex-col gap-6">
            <button
              className={`border-2 rounded-xl p-2 border-red-400 hover:scale-110 transform transition-all duration-1000 delay-200 ${
                animateButton
                  ? "translate-y-8 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
              //   style={{ transitionDelay: "400ms" }}
            >
              Menu
            </button>
            <button
              className={`border-2 rounded-xl p-2 border-blue-400 hover:scale-110 transition duration-1000 delay-100	 ${
                animateButton
                  ? "translate-y-8 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
              //   style={{ transitionDelay: "200ms" }}
            >
              Accueil
            </button>
            <button
              className={`border-2 rounded-xl p-2 border-yellow-400 hover:scale-110 transition duration-1000  delay-0	${
                animateButton
                  ? "translate-y-8 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
              //   style={{ transitionDelay: "0ms" }}
            >
              Projets
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Menu;
