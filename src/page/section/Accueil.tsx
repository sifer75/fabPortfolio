import { useRef } from "react";
import MyHeadline from "../../component/MyHeadline";
import FadingSkills from "../../component/fragments/FadingSkills";

function Accueil() {
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="Accueil"
      className="h-screen w-full flex flex-col justify-between py-16 px-10"
      ref={contentWrapperRef}
    >
      <MyHeadline />
      <FadingSkills />
    </section>
  );
}

export default Accueil;
