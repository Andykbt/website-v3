import { Border, Cursor, CursorShadow } from './mouse-styled';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mouseState } from '@website-v3/web/src/helpers/state/atoms';
import { colorGrey, colourDarkGrey } from '@website-v3/web/styles/index';
import React, { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';

export const Mouse = () => {
    const ref = useRef<HTMLDivElement>(null);
    const shadowRef = useRef<HTMLDivElement>(null);
    const state = useRecoilValue(mouseState);

    const colors = new Map([
        ['default', colorGrey],
        ['inspect', colourDarkGrey],
        ['hidden', colorGrey],
    ]);
    const color = colors.get(state);

    /* states
     * default -> small ball with following see thru circle
     * image
     * inspect
     * hidden
     */

    const handlePointerDown = () => {
        const attr = ref.current!.getAttribute('state');

        if (attr === 'default' || attr === 'image') {
            ref.current!.style.left = '-7.5px';
            ref.current!.style.top = '-7.5px';
            ref.current!.style.height = '25px';
            ref.current!.style.width = '25px';
        }
    };

    const handlePointerUp = () => {
        const attr = ref.current!.getAttribute('state');

        if (attr === 'default' || attr === 'image') {
            ref.current!.style.left = '';
            ref.current!.style.top = '';
            ref.current!.style.height = '';
            ref.current!.style.width = '';
        }
    };

    useEffect(() => {
        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('pointerup', handlePointerUp);

        const update = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            const mouseX = clientX - ref.current!.clientWidth / 2;
            const mouseY = clientY - ref.current!.clientHeight / 2;

            ref.current!.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            shadowRef.current!.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        };

        document.addEventListener('mousemove', update);

        return () => {
            document.removeEventListener('mousemove', update);
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('pointerup', handlePointerUp);
        };
    }, []);

    useEffect(() => {
        // set the attribute since mouse handlers don't have access to true state.
        ref.current!.setAttribute('state', state);
    }, [state]);

    return (
        <>
            <Cursor ref={ref} color={color} state={state}>
                {state === 'inspect' && (
                    <>
                        <FontAwesomeIcon icon={faEye} />
                        <Border />
                    </>
                )}
            </Cursor>
            <CursorShadow ref={shadowRef} state={state} />
        </>
    );
};
