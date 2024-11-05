import CyclingSkills from "./fragments/CyclingSkills";
import Links from "./Links";

const me = ["Taupin", "Fabien"] as const;

const MyHeadline = () => (
  <div className="w-full xs:flex xs:items-center h-fit transition duration-500 delay-100 flex flex-col items-center sm:items-start">
    <h1 className="font-Merich w-fit z-20 text-yellow-100">
      {me.map((txt, k) => (
        <div className="text-7xl z-20 xs:text-8xl lg:text-9xl" key={k}>
          {txt}
        </div>
      ))}
    </h1>
    <CyclingSkills />
    <div className="w-fit h-fit z-20 mt-5 sm:hidden">
      <Links />
    </div>
  </div>
);

export default MyHeadline;
