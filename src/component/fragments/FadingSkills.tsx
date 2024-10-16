import { useEffect, useRef } from "react";
import throttle from "throttleit";

const stack = ["WEB", "DEVELOPER", "FULL STACK"] as const;

function FadingSkills() {
  const stackRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    function handleScroll() {
      const { scrollY, innerWidth } = window;
      const { current: stackNode } = stackRef;
      if (stackNode === null) return;

      const texts = stackNode.children as HTMLCollectionOf<HTMLElement>;
      if (scrollY <= 0) {
        for (const element of texts) element.style.opacity = "";
        return;
      }
      const isLargeScreen = innerWidth > 500;
      const fadeDeltaFluidity = innerWidth / 12;
      const fadeDelta = isLargeScreen
        ? 200
        : Math.max(50, 100 - fadeDeltaFluidity);
      for (let i = 0; i < texts.length; i++) {
        const text = texts[i];
        const startFade = fadeDelta * i;
        const distance = scrollY - startFade;

        const opacity = Math.max(0, 1 - distance / fadeDelta);
        console.log(`Text ${i}: Opacity = ${opacity}`);

        text.style.opacity = String(opacity);
      }
    }

    const throttledHandleScroll = throttle(handleScroll, 16);
    document.addEventListener("scroll", throttledHandleScroll);

    handleScroll();
    return () => document.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <div className="flex ml-auto max-w-full flex-col text-right">
      <h2
        className="text-[5.45rem] leading-[1] transition-opacity duration-500 font-Merich text-yellow-100 max-sm:mt-6 max-sm:text-4xl"
        ref={stackRef}
      >
        {stack.map((value, k) => (
          <span className="block" key={k}>
            {value}
          </span>
        ))}
      </h2>
    </div>
  );
}

export default FadingSkills;
