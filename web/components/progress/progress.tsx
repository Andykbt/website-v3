import React, { useEffect, useState } from "react";
import { useNProgress } from "@tanem/react-nprogress";
import { useRouter } from "next/router";
import { useSpring , animated as a } from "react-spring";
import { colourBlack, colourPurple } from "@website-v3/web/styles";
import { useRecoilValue } from "recoil";
import { showMenuState } from "@website-v3/web/helpers/state/atoms";

export const Progress = () => {
  const router = useRouter();
  const [isAnimating, setAnimating] = useState<boolean>(false);

  const { isFinished, progress } = useNProgress({
    isAnimating,
    animationDuration: 100,
  });

  useEffect(() => {
    router.events.on("routeChangeStart", () => setAnimating(true));
    router.events.on("routeChangeComplete", () => setAnimating(false));
  }, []);

  return (
    <Bar isFinished={isFinished} progress={progress} />
  );
};

const Bar: React.FC<{
  isFinished: boolean,
  progress: number
}> = ({
  isFinished,
  progress
}) => {
  const toggleMenu = useRecoilValue(showMenuState);

  const props = useSpring({
    position: "sticky",
    top: 0,
    background: toggleMenu ? colourBlack : colourPurple,
    height: isFinished ? 0 : 5,
    width: `${progress * 100}%`,
    zIndex: 10,
  });

  return(
    <a.div style={props}/>
  );
};