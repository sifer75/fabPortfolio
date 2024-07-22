// import { useRef } from "react";
import { useRef, useState } from "react";
import Menu from "./component/Menu";
import "./index.css";
import Accueil from "./page/Accueil";
import Competences from "./page/Competences";
import { Nullable } from "./types/Utils";

function App() {
  // const subHeaderRef = useRef<Nullable<HTMLDivElement>>(null);
  const accueilRef = useRef<Nullable<HTMLDivElement>>(null);
  const portfolioRef = useRef<Nullable<HTMLDivElement>>(null);
  const competencesRef = useRef<Nullable<HTMLDivElement>>(null);
  const joindreRef = useRef<Nullable<HTMLDivElement>>(null);
  const [menuShouldChange, setMenuShouldChange] = useState<boolean>(false);

  return (
    <div
      className="w-screen"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,70,255,1) 0%, rgba(0,155,255,1) 100%)",
      }}
      ref={accueilRef}
    >
      <Menu
        menuShouldChange={menuShouldChange}
        setMenuShouldChange={setMenuShouldChange}
        sectionRef={{
          Accueil: accueilRef,
          Portfolio: portfolioRef,
          Compétences: competencesRef,
          Joindre: joindreRef,
        }}
      />
      <Accueil menuShouldChange={menuShouldChange} />
      <Competences competencesRef={competencesRef} />
    </div>
  );
}

export default App;
