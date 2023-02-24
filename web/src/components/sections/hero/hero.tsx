import { TextTrail } from '@website-v3/web/src/helpers/springs';
import { fontSizeExtraLarge, fontSizeSmall } from '@website-v3/web/styles';
import { Body1, H1 } from '@website-v3/web/styles';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export const Hero = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div
            ref={ref}
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <div style={{ marginLeft: '7.5vw' }}>
                <TextTrail on={inView}>
                    <H1 fontSize={fontSizeExtraLarge}>A</H1>
                    <H1 fontSize={fontSizeExtraLarge}>n</H1>
                    <H1 fontSize={fontSizeExtraLarge}>d</H1>
                    <H1 fontSize={fontSizeExtraLarge}>y</H1>
                </TextTrail>
            </div>

            <div className="text-center">
                <TextTrail on={inView} delay={500}>
                    <H1 fontSize={fontSizeExtraLarge}>T</H1>
                    <H1 fontSize={fontSizeExtraLarge}>r</H1>
                    <H1 fontSize={fontSizeExtraLarge}>u</H1>
                    <H1 fontSize={fontSizeExtraLarge}>o</H1>
                    <H1 fontSize={fontSizeExtraLarge}>n</H1>
                    <H1 fontSize={fontSizeExtraLarge}>g</H1>
                </TextTrail>
            </div>

            <TextTrail on={inView} delay={1000}>
                <Body1
                    fontSize={fontSizeSmall}
                    textDirection="right"
                    style={{ width: '100%', padding: '7.5vh' }}
                >
                    SOFTWARE
                    <br />
                    ENG
                </Body1>
            </TextTrail>
        </div>
    );
};
