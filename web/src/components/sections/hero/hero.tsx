import { TextTrail } from '@website-v3/web/helpers/springs';
import { fontSizeExtraLarge, fontSizeSmall } from '@website-v3/web/styles';
import { Body1, H1 } from '@website-v3/web/styles';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { HeroContainer } from './hero-styles';

export const Hero = () => {
    const { ref, inView } = useInView();

    return (
        <HeroContainer ref={ref}>
            <TextTrail on={inView}>
                <H1 fontSize={fontSizeExtraLarge}>Andy</H1>
                <H1 fontSize={fontSizeExtraLarge}>
                    &nbsp;&nbsp;&nbsp;&nbsp;Truong
                </H1>
                <Body1
                    fontSize={fontSizeSmall}
                    textDirection="right"
                    margin="7.5vh 20vw"
                >
                    SOFTWARE
                    <br />
                    ENG
                </Body1>
            </TextTrail>
        </HeroContainer>
    );
};
