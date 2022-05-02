import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { mouseImageState } from "../../helpers/state/atoms";
import { Circle } from "./mouse-styled";

export const Mouse = ({
  show,
} : {
  show: boolean,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const path = useRecoilValue(mouseImageState);

  useEffect(() => {
    const update = (e: any) => {
      const { clientX, clientY } = e;
  
      const mouseX = clientX - ref.current!.clientWidth / 2;
      const mouseY = clientY - ref.current!.clientHeight / 2;

      ref.current!.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    document.addEventListener("mousemove", update);

    return () => {
      document.removeEventListener("mousemove", update);
    };
  }, []);

  return (
    <Circle ref={ref} show={show} path={path}/>
  );
};