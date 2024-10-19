import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faShieldHalved,
  faFilter,
  faGear,
  faBarcode,
  faFolder,
  faFolderOpen,
  faGears,
  faNetworkWired,
  faSitemap,
  faKeyboard,
  faCodeBranch,
  faWebAwesome,
  faTerminal,
  faRectangleXmark,
  faDiagramProject,
  faCubes,
  faCodeMerge,
  faCodeCommit,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

function Test() {
  const logos = [
    faWandMagicSparkles,
    faShieldHalved,
    faFilter,
    faGear,
    faBarcode,
    faFolder,
    faFolderOpen,
    faGears,
    faNetworkWired,
    faSitemap,
    faKeyboard,
    faCodeBranch,
    faWebAwesome,
    faTerminal,
    faRectangleXmark,
    faDiagramProject,
    faCubes,
    faCodeMerge,
    faCodeCommit,
    faBarsStaggered,
    faWandMagicSparkles,
    faShieldHalved,
    faFilter,
    faGear,
    faBarcode,
    faFolder,
    faFolderOpen,
    faGears,
    faNetworkWired,
  ] as const;

  const shuffleArray = (array: any[]) => {
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

  return (
    <div
      className="w-screen h-full relative text-3xl border border-black"
      style={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="w-full h-full flex items-center justify-center flex-col gap-10"
        style={{ position: "relative", left: "-13%" }}
      >
        {[...Array(26)].map((_, index) => (
          <div key={index} className="-rotate-45 flex gap-5 min-h-fit w-full">
            {renderIcons()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
