import { useEffect, useRef } from "react";
import throttle from "throttleit";

const stack = ["WEB", "DEVELOPER", "FULL STACK"] as const;

function FadingSkills() {
  const stackRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    function handleScroll() {
      const { scrollY: currentScrollY, innerWidth } = window;
      const { current: stackNode } = stackRef;
      if (stackNode === null) return null;
      const texts = stackNode.children as HTMLCollectionOf<HTMLElement>;
      if (currentScrollY <= 0) {
        for (const element of texts) element.style.opacity = "";
        return;
      }

      let fadeDelta;
      let startOffset;

      if (innerWidth >= 320 && innerWidth <= 500) {
        fadeDelta = 500;
        startOffset = 500;
      } else {
        fadeDelta = 200;
        fadeDelta = 50;
      }

      for (let i = 0; i < texts.length; i++) {
        const text = texts[i];
        if (!startOffset) return;
        const startFade = fadeDelta * i - startOffset;

        const distance = currentScrollY - startFade;
        const opacity = Math.max(0, 1 - distance / fadeDelta);

        text.style.opacity = String(opacity);
      }
    }

    const throttledHandleScroll = throttle(handleScroll, 16);

    document.addEventListener("scroll", throttledHandleScroll);

    handleScroll();

    return () => document.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <div className="flex h-fit max-w-full flex-col text-right z-10 items-center sm:items-end">
      <h2
        className=" leading-[1] transition-opacity duration-500 font-Merich text-yellow-100"
        ref={stackRef}
      >
        {stack.map((value, k) => (
          <span
            className="block text-4xl xs:text-5xl sm:text-6xl lg:text-7xl"
            key={k}
          >
            {value}
          </span>
        ))}
      </h2>
    </div>
  );
}

export default FadingSkills;
