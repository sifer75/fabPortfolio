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

  const renderIcons = () => {
    return logos.map((icon, index) => (
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
      className="w-max h-full bg-red-500 relative flex items-center justify-center flex-col gap-10 text-3xl"
      style={{
        overflow: "hidden",
        position: "relative",
        left: "-36%",
      }}
    >
      {[...Array(25)].map((_, index) => (
        <div key={index} className="-rotate-45 flex  gap-5 min-h-fit w-full">
          {renderIcons()}
        </div>
      ))}
    </div>
  );
}

export default Test;
