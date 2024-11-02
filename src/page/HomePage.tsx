import Menu from "../component/Menu";
import "../index.css";
import Accueil from "../page/section/Accueil";
import Competences from "../page/section/Competences";
import Portfolio from "../page/section/Portfolio";
import Joindre from "../page/section/Joindre";
import Description from "../page/section/Description";
import Icons from "../component/Icons";

function HomePage() {
  return (
    <div className="w-screen h-full bg-gradient flex overflow-hidden">
      <div className="z-20 h-full w-fit sticky hidden lg:block">
        <Menu />
      </div>
      <div className="flex flex-col overflow-y-scroll w-fit h-full scroll-smooth">
        <Accueil />
        <Description />
        <Portfolio />
        <Competences />
        <Joindre />
      </div>
      <div className="z-0 inset-0 absolute w-screen hidden lg:block">
        <Icons />
      </div>
    </div>
  );
}

export default HomePage;
