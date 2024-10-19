import { useCallback, useEffect, useRef, useState } from "react";
import { Nullable } from "../../types/Utils";

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

function CyclingSkills() {
  const cyclingNodeRef = useRef<HTMLDivElement>(null);
  const [cyclingNodeIsHovered, setCyclingNodeIsHovered] =
    useState<Nullable<boolean>>(null);

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

  return (
    <div
      className="border-2 border-yellow-300 rounded-3xl p-1 h-fit w-[422px]  flex overflow-hidden"
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
            <span className="font-Merich mr-1 text-white">{value}&nbsp;</span>
            <span className="font-Kelsi text-yellow-100">X&nbsp;</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CyclingSkills;
