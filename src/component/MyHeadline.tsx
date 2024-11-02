import CyclingSkills from "./fragments/CyclingSkills";

const me = ["Taupin", "Fabien"] as const;

const MyHeadline = () => (
  <div className="w-full xs:flex xs:items-center h-fit z-10 transition duration-500 delay-100 flex flex-col items-center sm:items-start">
    <h1 className="font-Merich w-fit text-yellow-100">
      {me.map((txt, k) => (
        <div className="text-7xl  xs:text-8xl lg:text-9xl" key={k}>
          {txt}
        </div>
      ))}
    </h1>

    <CyclingSkills />
  </div>
);

export default MyHeadline;
