import {
    colourBlack,
    colourLightBrown,
    colourPink,
} from '@website-v3/web/styles';
import React, { ReactNode } from 'react';
import { animated, config, useSpring, useTrail } from 'react-spring';

export { animated } from 'react-spring';

type SpringProps = {
    on?: boolean;
    delay?: number;
    children: ReactNode;
};

export const TextTrail: React.FC<SpringProps> = ({ on, delay, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        opacity: on ? 1 : 0,
        y: on ? 0 : 100,
        delay: delay,
        config: config.default,
    });

    return (
        <>
            {trail.map(({ ...style }, index) => (
                <animated.div
                    key={index}
                    style={{ display: 'inline-block', ...style }}
                >
                    {items[index]}
                </animated.div>
            ))}
        </>
    );
};

export const FadeUp: React.FC<SpringProps> = ({ children }) => {
    const props = useSpring({
        from: { opacity: 0, y: 10 },
        to: { opacity: 1, y: 0 },
        config: config.molasses,
    });

    return <animated.div style={props}>{children}</animated.div>;
};

export const FadeIn: React.FC<SpringProps> = ({ children }) => {
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.molasses,
    });

    return <animated.div style={props}>{children}</animated.div>;
};

export const ProjectTextHover: React.FC<SpringProps> = ({ on, children }) => {
    const props = useSpring({
        color: on ? colourBlack : colourLightBrown,
        config: config.default,
    });

    return (
        <animated.div style={Object.assign({ display: 'inline-block' }, props)}>
            {children}
        </animated.div>
    );
};

export const SwapColour: React.FC<SpringProps> = ({ on, children }) => {
    const props = useSpring({
        color: on ? colourPink : colourLightBrown,
        config: config.default,
    });

    return <animated.div style={props}>{children}</animated.div>;
};

type ExpandBorderProps = {
    borderRadius?: string;
} & SpringProps;

export const ExpandBorder: React.FC<ExpandBorderProps> = ({
    on,
    children,
    borderRadius,
}) => {
    const props = useSpring({
        borderRadius: borderRadius ? borderRadius : '0.5rem',
        boxShadow: on
            ? `0 0 0 4px ${colourBlack}, 0 0 0 6px ${colourLightBrown}, 0 0 ${colourLightBrown}, 0 0 ${colourLightBrown}`
            : `0 0 0 0px ${colourBlack}, 0 0 0 0px ${colourLightBrown}, 0 0 ${colourLightBrown}, 0 0 ${colourLightBrown}`,
        overflow: 'hidden',

        margin: 0,
        config: config.stiff,
    });

    return <animated.div style={props}>{children}</animated.div>;
};
