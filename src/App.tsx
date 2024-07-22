// import { useRef } from "react";
import { useRef, useState } from "react";
import Menu from "./component/Menu";
import "./index.css";
import Accueil from "./page/Accueil";
import Competences from "./page/Competences";

function App() {
  // const subHeaderRef = useRef<HTMLDivElement | null>(null);
  const accueilRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const compétencesRef = useRef<HTMLDivElement | null>(null);
  const joindreRef = useRef<HTMLDivElement | null>(null);
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
          Compétences: compétencesRef,
          Joindre: joindreRef,
        }}
      />
      <Accueil menuShouldChange={menuShouldChange} />
      <Competences competencesRef={compétencesRef} />
    </div>
  );
}

export default App;
