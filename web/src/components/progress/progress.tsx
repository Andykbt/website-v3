import { useNProgress } from '@tanem/react-nprogress';
import { showMenuState } from '@website-v3/web/helpers/state/atoms';
import { colourBlack, colourPurple } from '@website-v3/web/styles';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { animated as a, useSpring } from 'react-spring';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

export const Progress = () => {
    const router = useRouter();
    const [isAnimating, setAnimating] = useState<boolean>(false);

    const { isFinished, progress } = useNProgress({
        isAnimating,
        animationDuration: 100,
    });

    useEffect(() => {
        router.events.on('routeChangeStart', () => setAnimating(true));
        router.events.on('routeChangeComplete', () => setAnimating(false));
    }, []);

    return <Bar isFinished={isFinished} progress={progress} />;
};

const Bar: React.FC<{
    isFinished: boolean;
    progress: number;
}> = ({ isFinished, progress }) => {
    const toggleMenu = useRecoilValue(showMenuState);
    const Bar = styled.div`
        position: sticky;
        z-index: 10;
        top: 0px;
    `;
    const props = useSpring({
        background: toggleMenu ? colourBlack : colourPurple,
        height: isFinished ? 0 : 5,
        width: `${progress * 100}%`,
    });

    return <Bar as={a.div} style={props} />;
};
