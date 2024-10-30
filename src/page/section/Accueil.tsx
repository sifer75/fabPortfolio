import { useRef } from "react";
import MyHeadline from "../../component/MyHeadline";
import FadingSkills from "../../component/fragments/FadingSkills";
import Links from "../../component/Links";

function Accueil() {
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="Accueil"
      className="min-h-screen h-screen w-full flex flex-col justify-between py-28 px-10"
      ref={contentWrapperRef}
    >
      <MyHeadline />
      <Links />
      <FadingSkills />
    </section>
  );
}

export default Accueil;
