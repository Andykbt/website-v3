import { useIsTablet } from '@website-v3/web/helpers/hooks/useWindowDims';
import React, { Children, useEffect, useRef } from 'react';

import { Inner, Carousel as StyledCarousel } from './carousel-styled';

const Carousel: React.FC<{ index: number }> = ({ index, children }) => {
    const isTablet = useIsTablet();
    const translateOffset = isTablet ? 105 : 66.666;

    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        sliderRef.current!.style.transform = `translateX(-${
            index * translateOffset
        }%)`;
    }, [index]);

    return (
        <StyledCarousel elements={Children.count(children)}>
            <Inner ref={sliderRef}>{children}</Inner>
        </StyledCarousel>
    );
};

export default Carousel;
