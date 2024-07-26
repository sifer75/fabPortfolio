import { useRef, useState } from "react";
import Menu from "./component/Menu";
import "./index.css";
import Accueil from "./page/Accueil";
import Competences from "./page/Competences";
import Portfolio from "./page/Portfolio";
import Joindre from "./page/Joindre";

function App() {
  const accueilRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const competencesRef = useRef<HTMLDivElement>(null);
  const joindreRef = useRef<HTMLDivElement>(null);
  const [menuShouldChange, setMenuShouldChange] = useState<boolean>(false);

  return (
    <div
      className="min-w-screen max-w-screen"
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
      <Competences
        competencesRef={competencesRef}
        menuShouldChange={menuShouldChange}
      />
      <Portfolio
        portfolioRef={portfolioRef}
        menuShouldChange={menuShouldChange}
      />
      <Joindre joindreRef={joindreRef} menuShouldChange={menuShouldChange} />
    </div>
  );
}

export default App;
