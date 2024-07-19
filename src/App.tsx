import Menu from "./component/Menu";
import "./index.css";

function App() {
  return (
    <div
      className="w-screen h-screen bg-font"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,70,255,1) 0%, rgba(0,155,255,1) 100%)",
      }}
    >
      <Menu />
    </div>
  );
}

export default App;
