import React from "react";
import { useIsTablet } from "@website-v3/web/helpers/hooks/useWindowDims";
import { Carousel as StyledCarousel, Inner } from "./carousel-styled";

const Carousel: React.FC<{index: number}> = ({
  index,
  children,
}) => {
  const isTablet = useIsTablet();
  const translateOffset = isTablet ? 100 : 66.666;

  return (
    <StyledCarousel>
      <Inner translateX={index * translateOffset}>
        {children}
      </Inner>
    </StyledCarousel>
  );
};

export default Carousel;