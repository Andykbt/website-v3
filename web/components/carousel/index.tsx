import React, { useEffect, useRef, useState } from "react";
import { useIsTablet } from "@website-v3/web/helpers/hooks/useWindowDims";
import { Carousel as StyledCarousel, Inner } from "./carousel-styled";
import { useSetRecoilState } from "recoil";
import { isCarouselDrag } from "@website-v3/web/helpers/state/atoms";

const Carousel: React.FC<{index: number}> = ({
  index,
  children,
}) => {
  const isTablet = useIsTablet();
  const translateOffset = isTablet ? 100 : 66.666;
  const [isMouseDown, setMouseDown] = useState<boolean>(false);
  const [initialMPos, setInitialMPos] = useState<number>(0);
  const setDrag = useSetRecoilState(isCarouselDrag);
  
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: any) => {
    const { clientX } = e;
    
    setMouseDown(true);
    setInitialMPos(clientX);
  };

  const handleSnap = () => {
    const slider = sliderRef.current!;
    setMouseDown(false);
    setDrag(false);

    const style = window.getComputedStyle(slider);
    const { m41 } = new WebKitCSSMatrix(style.transform);

    if (m41 > 0) {
      slider.style.transform = "translateX(0px)";
    }

    const inner = slider.getBoundingClientRect();

    if (inner.right <= 0) {
      slider.style.transform = `translateX(-${translateOffset * (React.Children.count(children) - 1)}%)`;
    }
  };

  const handleMouseMove = (e: any) => {
    if (!isMouseDown) return;

    setDrag(true);
    const slider = sliderRef.current!;
    const style = window.getComputedStyle(slider);
    const { m41 } = new WebKitCSSMatrix(style.transform);
    const { clientX } = e;

    slider.style.transform = `translateX(${m41 + (clientX - initialMPos) * 25}px)`;
    setInitialMPos(clientX);
  };

  useEffect(() => {
    sliderRef.current!.style.transform = `translateX(-${index * translateOffset}%)`;
  }, [index]);

  return (
    <StyledCarousel
      onMouseDown={handleMouseDown}
      onMouseUp={handleSnap}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleSnap}
    >
      <Inner ref={sliderRef}>
        {children}
      </Inner>
    </StyledCarousel>
  );
};

export default Carousel;