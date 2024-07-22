import { useCallback, useEffect, useRef, useState } from "react";

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
  const cyclingNodeRef = useRef<HTMLDivElement>(null);
  const [cyclingNodeIsHovered, setCyclingNodeIsHovered] = useState<
    boolean | null
  >(null);

  const moveLeft = useCallback(() => {
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    cyclingNode.style.left =
      "-" + cyclingNode.getBoundingClientRect().width / 2 + "px";
  }, []);

  const cycle = useCallback(() => {
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    cyclingNode.style.transition = "none";
    cyclingNode.style.left = "0";
    cyclingNode.offsetHeight;
    cyclingNode.style.transition = "";

    moveLeft();
  }, [moveLeft]);

  const slowdownCycle = useCallback(() => {
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    const computedStyle = getComputedStyle(cyclingNode);
    const currentLeft = parseFloat(computedStyle.left);

    cyclingNode.style.transition = "none";
    cyclingNode.style.left = `${currentLeft}px`;
    cyclingNode.offsetHeight;
    cyclingNode.style.transition = "left 20s linear";

    moveLeft();
  }, [moveLeft]);

  const restoreCycleSpeed = useCallback(() => {
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    const computedStyle = getComputedStyle(cyclingNode);
    const currentLeft = parseFloat(computedStyle.left);

    cyclingNode.style.transition = "none";
    cyclingNode.style.left = `${currentLeft}px`;
    cyclingNode.offsetHeight;
    cyclingNode.style.transition = "left 10s linear";

    moveLeft();
  }, [moveLeft]);

  useEffect(() => {
    if (cyclingNodeIsHovered === null) return;
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    const slowingDownCycle = cyclingNodeIsHovered;

    if (slowingDownCycle) {
      slowdownCycle();
    } else {
      restoreCycleSpeed();
    }
  }, [cyclingNodeIsHovered, slowdownCycle, restoreCycleSpeed]);

  useEffect(() => {
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    const handleTransitionEnd = () => cycle();

    cyclingNode.addEventListener("transitionend", handleTransitionEnd);
    moveLeft();

    return () =>
      cyclingNode.removeEventListener("transitionend", handleTransitionEnd);
  }, [moveLeft, cycle]);

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

        <div
          className="border-2 border-black bg-black rounded-3xl p-1 h-fit w-full flex overflow-hidden"
          onMouseOver={() => setCyclingNodeIsHovered(true)}
          onMouseOut={() => setCyclingNodeIsHovered(false)}
        >
          <div
            className="flex animate-[defilement_10s_linear_infinite] hover:animate-[defilement_20s_linear_infinite] cycle-x z-10"
            ref={cyclingNodeRef}
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
