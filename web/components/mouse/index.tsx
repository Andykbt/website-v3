import React, { useEffect, useRef } from "react";
import { Circle } from "./mouse-styled";

export const Mouse = ({
  expand
} : {
  expand: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = (e) => {
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
    <Circle ref={ref} expand={expand}/>
  );
};