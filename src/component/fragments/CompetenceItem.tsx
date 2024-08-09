import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface CompetenceItemProps {
  img: string;
  title: string;
  index: number;
  animationState: "slide-down" | "slide-up" | "early-exit" | "none";
  setAnimationState: Dispatch<
    SetStateAction<{
      [key: number]: "slide-down" | "slide-up" | "early-exit" | "none";
    }>
  >;
}
const CompetenceItem = ({
  img,
  title,
  index,
  animationState,
  setAnimationState,
}: CompetenceItemProps) => {
  const animationContainerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [shouldExitEarly, setShouldExitEarly] = useState<boolean>(false);

  const handleMouseOn = useCallback(
    (index: number) => {
      if (animationState === "none" || animationState === "early-exit") {
        setAnimationState((prev) => ({
          ...prev,
          [index]: "slide-up",
        }));
        setIsAnimating(true);
        setShouldExitEarly(false);
      }
    },
    [animationState, setAnimationState]
  );

  const handleMouseLeave = useCallback(
    (index: number) => {
      if (isAnimating) {
        setShouldExitEarly(true);
      } else {
        setAnimationState((prev) => ({
          ...prev,
          [index]: "slide-down",
        }));
      }
    },
    [isAnimating, setAnimationState]
  );

  const handleAnimationEnd = useCallback(
    (event: AnimationEvent) => {
      const animationName = event.animationName;
      if (animationName === "slide-up") {
        setIsAnimating(false);
        if (shouldExitEarly) {
          setAnimationState((prev) => ({
            ...prev,
            [index]: "early-exit",
          }));
        }
      } else if (animationName === "slide-down") {
        setAnimationState((prev) => ({
          ...prev,
          [index]: "none",
        }));
      }
    },
    [setAnimationState, index, shouldExitEarly]
  );

  useEffect(() => {
    const container = animationContainerRef.current;

    if (!container) return;

    container.addEventListener("animationend", handleAnimationEnd);

    return () => {
      container.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [animationState, handleAnimationEnd]);

  return (
    <div
      className="relative container overflow-hidden h-40 w-40 grid place-content-center border-[5px] border-transparent rounded-3xl animate-[bg-spin_3s_linear_infinite] transition-transform duration-75 delay-75"
      key={index}
      onMouseEnter={() => handleMouseOn(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      <img src={img} className="h-16 z-0" alt="logo tech" />
      <div
        ref={animationContainerRef}
        className={`absolute inset-0 flex items-center justify-center z-10 text-white bg-black bg-opacity-75 rounded-3xl ${
          animationState === "slide-up"
            ? "animate-slide-up"
            : animationState === "slide-down"
            ? "animate-slide-down"
            : animationState === "early-exit"
            ? "animate-early-exit"
            : "transform opacity-0"
        } `}
      >
        {title}
      </div>
    </div>
  );
};

export default CompetenceItem;
