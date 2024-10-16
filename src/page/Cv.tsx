import { useNavigate } from "react-router-dom";
import CV from "../assets/CV.svg";
import { CornerDownLeft } from "lucide-react";
function Cv() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex align-center justify-center bg-orange-400 relative">
      <button
        className="absolute top-10 left-10 bg-white w-20 h-20 rounded-full p-5 border-4 border-black"
        onClick={() => navigate("/")}
      >
        <CornerDownLeft className="w-8 h-8" />
      </button>
      <img src={CV} alt="CV" className="bg-cover bg-no-repeat"></img>
    </div>
  );
}

export default Cv;
