import Menu from "./component/Menu";
import "./index.css";
import Accueil from "./page/Accueil";
import Competences from "./page/Competences";
import Portfolio from "./page/Portfolio";
import Joindre from "./page/Joindre";

function App() {
    return (
        <div className="min-w-screen h-screen bg-gradient flex flex-row overflow-hidden">
            <Menu />
            <div className="flex flex-col overflow-y-scroll w-full scroll-smooth">
                <Accueil />
                <Competences />
                <Portfolio />
                <Joindre />
            </div>
        </div>
    );
}

export default App;
