import CyclingSkills from "./fragments/CyclingSkills";

const me = ["Taupin", "Fabien"] as const;

const MyHeadline = () => (
  <div
    className={`sm:w-[316px] md:w-[422px] max-w-full transition duration-500 delay-100`}
  >
    <h1 className=" font-Merich w-fit text-yellow-100">
      {me.map((txt, k) => (
        <div
          className="xxs:text-7xl xs:text-8xl sm:text-8xl md:text-9xl"
          key={k}
        >
          {txt}
        </div>
      ))}
    </h1>

    <CyclingSkills />
  </div>
);

export default MyHeadline;
