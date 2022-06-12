import React, { useEffect, useRef } from "react";
import { useIsTablet } from "@website-v3/web/helpers/hooks/useWindowDims";
import { Carousel as StyledCarousel, Inner } from "./carousel-styled";

const Carousel: React.FC<{index: number}> = ({
  index,
  children,
}) => {
  const isTablet = useIsTablet();
  const translateOffset = isTablet ? 100 : 66.666;
  
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sliderRef.current!.style.transform = `translateX(-${index * translateOffset}%)`;
  }, [index]);

  return (
    <StyledCarousel>
      <Inner ref={sliderRef}>
        {children}
      </Inner>
    </StyledCarousel>
  );
};

export default Carousel;