import { useEffect, useRef } from "react";

interface AccueilProps {
  menuShouldChange: boolean;
}

const ME = ["Taupin", "Fabien"] as const;
const BIG_IDEAS = ["WEB", "DEVELOPER", "FULL STACK"] as const;

const SCROLLING_TEXT_PARTS = [
  "autodidacte",
  "polyvalent",
  "persévérant",
  "soucieux",
  "efficace",
  "passionné",
] as const;

const CYCLING_SCROLLING_TEXT_PARTS = [
  ...SCROLLING_TEXT_PARTS,
  ...SCROLLING_TEXT_PARTS,
];

function Accueil({ menuShouldChange }: AccueilProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container === null) return;

    const moveLeft = () =>
      (container.style.left =
        "-" + container.getBoundingClientRect().width / 2 + "px");

    const cycle = () => {
      container.style.transition = "none";
      container.style.left = "0";
      container.offsetHeight;
      container.style.transition = "";

      moveLeft();
    };

    const handleTransitionEnd = () => cycle();

    container.addEventListener("transitionend", handleTransitionEnd);
    moveLeft();

    return () =>
      container.removeEventListener("transitionend", handleTransitionEnd);
  }, []);

  return (
    <div className="h-screen flex flex-col pt-28 px-10">
      <div
        className={`w-[422px] ${
          menuShouldChange
            ? "transition duration-500 delay-100 translate-x-60"
            : "transition duration-1000 delay-1000 translate-x-0"
        }`}
      >
        <h1 className="text-9xl font-Merich w-fit text-yellow-100 pb-5">
          {ME.join("\n")}
        </h1>

        <div className="border-2 border-black bg-black rounded-3xl p-1 h-fit w-full flex overflow-hidden">
          <div
            className="flex animate-[defilement_10s_linear_infinite] hover:animate-[defilement_20s_linear_infinite] cycle-x z-10"
            ref={containerRef}
          >
            {CYCLING_SCROLLING_TEXT_PARTS.map((v, k) => (
              <div className="flex mr-1 items-center h-7" key={k}>
                <span className="font-Merich mr-1 text-white">{v}&nbsp;</span>
                <span className="font-Kelsi text-yellow-100">X&nbsp;</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex ml-auto flex-col text-right">
        <h2 className="text-8xl transition-opacity duration-500 font-Merich text-yellow-100 max-w-[9ch]">
          {BIG_IDEAS.join("\n")}
        </h2>
      </div>
    </div>
  );
}

export default Accueil;
