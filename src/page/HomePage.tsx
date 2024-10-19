import Menu from "../component/Menu";
import "../index.css";
import Accueil from "../page/section/Accueil";
import Competences from "../page/section/Competences";
import Portfolio from "../page/section/Portfolio";
import Joindre from "../page/section/Joindre";
import Description from "../page/section/Description";
import Test from "./section/Test";

function HomePage() {
  return (
    <div className="min-w-screen h-full bg-gradient flex flex-row overflow-hidden">
      <Menu />
      <div className="flex flex-col overflow-y-scroll w-full scroll-smooth">
        <Accueil />
        <Description />
        <Portfolio />
        <Competences />
        <Joindre />
      </div>
      <div className="z-0 inset-0 absolute">
        <Test />
      </div>
    </div>
  );
}

export default HomePage;
