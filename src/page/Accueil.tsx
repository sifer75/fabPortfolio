import { useCallback, useEffect, useRef, useState } from "react";
import { Nullable } from "../types/Utils";
// import throttle from "throttleit";

interface AccueilProps {
  menuShouldChange: boolean;
}

const ME = ["Taupin", "Fabien"] as const;
const stack = ["WEB", "DEVELOPER", "FULL STACK"] as const;

const softSkills = [
  "autodidacte",
  "polyvalent",
  "persévérant",
  "soucieux",
  "efficace",
  "passionné",
] as const;

const softSkillsMultiple = [...softSkills, ...softSkills];

const fullCycleDuration = 1e4; // NOTE: 10s
const slowCycleDuration = fullCycleDuration * 2;

function Accueil({ menuShouldChange }: AccueilProps) {
  const cyclingNodeRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLHeadingElement>(null);
  const [cyclingNodeIsHovered, setCyclingNodeIsHovered] =
    useState<Nullable<boolean>>(null);
  const [, stScrollY] = useState(window.scrollY);

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
    cyclingNode.style.transition = cyclingNodeIsHovered
      ? `left ${slowCycleDuration}ms linear`
      : "";

    moveLeft();
  }, [moveLeft, cyclingNodeIsHovered]);

  const slowdownCycle = useCallback(() => {
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    const { left } = window.getComputedStyle(cyclingNode);
    const currentLeft = parseFloat(left);

    const containerWidth = cyclingNode.getBoundingClientRect().width;
    const remainingDistance = containerWidth / 2 + currentLeft;

    const remainingTime =
      (remainingDistance / (containerWidth / 2)) * slowCycleDuration;

    cyclingNode.style.transition = "none";
    cyclingNode.style.left = `${currentLeft}px`;
    cyclingNode.offsetHeight;
    cyclingNode.style.transition = `left ${remainingTime}ms linear`;

    moveLeft();
  }, [moveLeft]);

  const restoreCycleSpeed = useCallback(() => {
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    const { left } = window.getComputedStyle(cyclingNode);
    const currentLeft = parseFloat(left);

    const containerWidth = cyclingNode.getBoundingClientRect().width;
    const remainingDistance = containerWidth / 2 + currentLeft;

    const remainingTime =
      (remainingDistance / (containerWidth / 2)) * fullCycleDuration;

    cyclingNode.style.transition = "none";
    cyclingNode.style.left = `${currentLeft}px`;
    cyclingNode.offsetHeight;
    cyclingNode.style.transition = `left ${remainingTime}ms linear`;

    moveLeft();
  }, [moveLeft]);

  useEffect(() => {
    if (cyclingNodeIsHovered === null) return;

    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    cyclingNodeIsHovered ? slowdownCycle() : restoreCycleSpeed();
  }, [cyclingNodeIsHovered, slowdownCycle, restoreCycleSpeed]);

  useEffect(() => {
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    moveLeft();
  }, [moveLeft]);

  useEffect(() => {
    function handleScroll() {
      console.log("coucou");

      const { scrollY, innerWidth } = window;
      stScrollY(scrollY);
      const { current: stackNode } = stackRef;
      if (stackNode === null) return;

      const texts = stackNode.children as HTMLCollectionOf<HTMLElement>;

      if (scrollY <= 0) {
        for (const element of texts) element.style.opacity = "";
        return;
      }

      const isLargeScreen = innerWidth > 400;
      const fadeDelta = isLargeScreen ? 200 : 300;
      // console.log(fadeDelta);
      for (let i = 0; i < texts.length; i++) {
        const element = texts[i];
        const startFade = fadeDelta * i;
        const distance = scrollY - startFade;

        let opacity = 1 - distance / fadeDelta;
        opacity = Math.max(0, opacity);
        opacity = Math.min(1, opacity);

        element.style.opacity = opacity.toString();
      }
    }

    // const throttledHandleScroll = throttle(handleScroll, 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen flex flex-col pt-28 px-10" ref={contentWrapperRef}>
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
          onTransitionEnd={cycle}
        >
          <div
            className="flex relative left-0 transition-[left] duration-[10s] ease-linear z-10"
            ref={cyclingNodeRef}
          >
            {softSkillsMultiple.map((value, index) => (
              <div className="flex mr-1 items-center h-7" key={index}>
                <span className="font-Merich mr-1 text-white">
                  {value}&nbsp;
                </span>
                <span className="font-Kelsi text-yellow-100">X&nbsp;</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex ml-auto flex-col text-left">
        <h2
          className="text-8xl transition-opacity duration-500 font-Merich text-yellow-100 max-w-[9ch]"
          ref={stackRef}
        >
          {stack.map((value, k) => (
            <span className="block " key={k}>
              {value}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}

export default Accueil;
