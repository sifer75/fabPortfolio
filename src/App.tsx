import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Cv from "./page/Cv";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cv" element={<Cv />} />
    </Routes>
  );
}

export default App;
