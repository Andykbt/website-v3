import { Inner, Carousel as StyledCarousel } from './carousel-styled';

import { useIsTablet } from '@website-v3/web/src/helpers/hooks/useWindowDims';
import React, { Children, ReactNode, useEffect, useRef } from 'react';

const Carousel: React.FC<{ index: number; children: ReactNode }> = ({
    index,
    children,
}) => {
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
