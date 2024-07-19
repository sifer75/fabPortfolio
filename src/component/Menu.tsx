import { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-screen w-screen">
      <div
        className={`absolute top-4 left-4 z-40 transition-all duration-300 ease-in-out bg-white ${
          isOpen
            ? "w-96 h-full top-0 left-0 scale-150"
            : `w-20 h-20 rounded-full  ${
                isHovered ? "scale-125 shadow-2xl" : "scale-100"
              }`
        }`}
      ></div>
      <div
        className={`absolute top-4 left-4 z-50 w-20 h-20 rounded-full flex flex-col gap-2 items-center justify-center hover:scale-125  transition ease-in-out ${
          isOpen ? "" : "hover:scale-125"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`bg-black w-10 h-1 transform transition-transform duration-200 ${
            isOpen ? "rotate-45 translate-y-3" : "rotate-0 translate-y-0 "
          }`}
        ></div>
        <div
          className={`bg-black w-10 h-1 transition-opacity duration-150 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`bg-black w-10 h-1 transform transition-transform duration-200 ${
            isOpen ? "-rotate-45 -translate-y-3" : "rotate-0 translate-y-0"
          }`}
        ></div>
      </div>
      <div className="h-full">fdfq</div>
    </div>
  );
}

export default Menu;
