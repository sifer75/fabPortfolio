import Menu from "../component/Menu";
import "../index.css";
import Accueil from "../page/section/Accueil";
import Competences from "../page/section/Competences";
import Portfolio from "../page/section/Portfolio";
import Joindre from "../page/section/Joindre";
import Description from "../page/section/Description";

function HomePage() {
  return (
    <div className="min-w-screen h-screen bg-gradient flex flex-row overflow-hidden">
      <Menu />
      <div className="flex flex-col overflow-y-scroll w-full scroll-smooth">
        <Accueil />
        <Description />
        <Portfolio />
        <Competences />
        <Joindre />
      </div>
    </div>
  );
}

export default HomePage;
