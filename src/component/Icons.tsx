import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logos } from "../lib/test.utils";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const shuffleArray = (array: IconDefinition[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const renderIcons = () => {
  const shuffleLogos = shuffleArray([...logos]);
  return shuffleLogos.map((icon, index: number) => (
    <FontAwesomeIcon
      key={index}
      icon={icon}
      size="2xl"
      className="i text-gray-900"
    />
  ));
};
function Icons() {
  return (
    <div className="w-screen overflow-hidden h-screen text-3xl border border-black relative">
      <div className="w-full h-full flex -left-[13%] relative items-center justify-center flex-col gap-10">
        {[...Array(35)].map((_, index) => (
          <div key={index} className="-rotate-45 flex gap-5 min-h-fit w-full">
            {renderIcons()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Icons;
