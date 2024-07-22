import "./index.css";

import { useRef, useState } from "react";

import Menu from "./component/Menu";
import Accueil from "./page/Accueil";
import Competences from "./page/Competences";

function App() {
  const accueilRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const competencesRef = useRef<HTMLDivElement>(null);
  const joindreRef = useRef<HTMLDivElement>(null);

  const [menuShouldChange, setMenuShouldChange] = useState<boolean>(false);

  return (
    <main
      className="w-screen bg-gradient-to-t from-blue-600 to-blue-500"
      ref={accueilRef}
    >
      <Menu
        menuShouldChange={menuShouldChange}
        setMenuShouldChange={setMenuShouldChange}
        sectionsRefs={{
          Accueil: accueilRef,
          Portfolio: portfolioRef,
          Compétences: competencesRef,
          Joindre: joindreRef,
        }}
      />
      <Accueil menuShouldChange={menuShouldChange} />
      <Competences competencesRef={competencesRef} />
    </main>
  );
}

export default App;
