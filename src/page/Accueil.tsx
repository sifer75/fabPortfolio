import { useRef } from "react";
import type WithMenuShouldChange from "../component/types/WithMenuShouldChange";
import MyHeadline from "../component/MyHeadline";
import FadingSkills from "../component/fragments/FadingSkills";

interface AccueilProps extends WithMenuShouldChange {}

function Accueil({ menuShouldChange }: AccueilProps) {
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="h-screen flex flex-col pt-28 px-10"
      ref={contentWrapperRef}
    >
      <MyHeadline menuShouldChange={menuShouldChange} />
      <FadingSkills />
    </section>
  );
}

export default Accueil;
