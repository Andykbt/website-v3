import { Container } from '@website-v3/web/src/components/layout';
import { TextTrail } from '@website-v3/web/src/helpers/springs';
import { A, H2 } from '@website-v3/web/styles/typography';

import {
    AboutBody,
    AboutContainer,
    Separator,
    VertSeparator,
} from './about-styles';

import React from 'react';
import { useInView } from 'react-intersection-observer';

export const About = () => {
    const [ref, inView] = useInView({ threshold: 1 });

    return (
        <Container size="XS">
            <Separator expand={inView} />
            <AboutContainer ref={ref}>
                <TextTrail on={inView} delay={1000}>
                    <H2 fontSize="5vw" style={{ padding: '2.5vw' }}>
                        CURRENTLY
                    </H2>
                </TextTrail>

                <VertSeparator expand={inView} />

                <AboutBody>
                    <TextTrail on={inView} delay={1250}>
                        <H2 fontSize="5vw" style={{ whiteSpace: 'nowrap' }}>
                            Building{' '}
                            <A href="https://www.firefront.com.au/?page_id=412">
                                Firemapper
                            </A>{' '}
                            @{' '}
                            <A href="https://www.firefront.com.au/">
                                FireFront
                            </A>
                        </H2>

                        <H2 fontSize="5vw" style={{ whiteSpace: 'nowrap' }}>
                            Building{' '}
                            <A href="https://www.firefront.com.au/?page_id=412">
                                Firemapper
                            </A>{' '}
                            @{' '}
                            <A href="https://www.firefront.com.au/">
                                FireFront
                            </A>
                        </H2>
                    </TextTrail>
                </AboutBody>
            </AboutContainer>
            <Separator expand={inView} />
        </Container>
    );
};
