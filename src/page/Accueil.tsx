import { useEffect, useRef } from "react";

interface AccueilProps {
  menuShouldChange: boolean;
}
function Accueil({ menuShouldChange }: AccueilProps) {
  const names = ["Taupin", "Fabien"] as const;
  const title1 = ["WEB", "DEVELOPER", "FULL STACK"] as const;
  // const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  // console.log(containerWidth);
  const softSkills = [
    "autodidacte",
    "polyvalent",
    "persévérant",
    "soucieux",
    "efficace",
    "passionné",
  ] as const;
  // useEffect(() => {
  //   const width = containerRef.current?.offsetWidth;
  //   if (containerRef && width) {
  //     setContainerWidth(width);
  //   }
  // }, [containerRef]);
  //changer la position left en px, change le delay de transition,
  // faire looper en attendant le transition end
  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (container) {
  //     const handleMouseEnter = () => {
  //       container.classList.remove("animate-defilement-slow");
  //     };

  //     const handleMouseLeave = () => {
  //       container.classList.add("animate-defilement-slow");
  //     };

  //     container.addEventListener("mouseenter", handleMouseEnter);
  //     container.addEventListener("mouseleave", handleMouseLeave);

  //     return () => {
  //       container.removeEventListener("mouseenter", handleMouseEnter);
  //       container.removeEventListener("mouseleave", handleMouseLeave);
  //     };
  //   }
  // }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const cycle = () => {
        container.style.left =
          "-" + container.getBoundingClientRect().width / 2 + "px";
      };

      const handleTransitionEnd = () => {
        container.style.transition = "none";
        container.style.left = "0";
        container.offsetHeight;
        container.style.transition = "";
        cycle();
      };

      container.addEventListener("transitionend", handleTransitionEnd);
      cycle();
      return () => {
        container.removeEventListener("transitionend", handleTransitionEnd);
      };
    }
  }, []);

  return (
    <div className="h-screen flex flex-col pt-28 px-10">
      {/* nom et prénom */}
      <div
        className={`w-[422px] ${
          menuShouldChange
            ? "transition duration-500 delay-100 translate-x-60"
            : "transition duration-1000 delay-1000 translate-x-0"
        }`}
      >
        {names.map((title: string, index: number) => (
          <h1
            className="text-9xl font-Merich w-fit text-yellow-100 pb-5"
            key={index}
          >
            {title}
          </h1>
        ))}
        <div className="border-2 border-black bg-black rounded-3xl p-1 h-fit w-full flex overflow-hidden">
          <div
            className="flex animate-[defilement_10s_linear_infinite] hover:animate-[defilement_20s_linear_infinite] cycle z-10"
            ref={containerRef}
          >
            {[...softSkills, ...softSkills].map((softSkill, index: number) => (
              <div className="flex mr-1 items-center h-7" key={index}>
                <span className="font-Merich mr-1 text-white">
                  {softSkill}&nbsp;
                </span>
                <span className="font-Kelsi text-yellow-100">X&nbsp;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* stack */}
      <div className="flex w-full flex-col justify-between items-end">
        {title1.map((title: string, index: number) => (
          <h1
            key={index}
            className="text-8xl transition-opacity duration-500 font-Merich text-yellow-100"
          >
            {title}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Accueil;
