import { useState, useEffect } from "react";

type windowSizeProps = {
  width: number | undefined,
  height: number | undefined,
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<windowSizeProps>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
};

export const useIsTablet = () => {
  const { width } = useWindowSize();
  
  if (!width) {
    return false;
  }
  
  if (width < 768) {
    return true;
  }

  return false;
};