import React from "react";
import { useTrail, config, animated, useSpring } from "react-spring";
import { colourBlack, colourLightBrown, colourPink } from "@website-v3/web/styles";
export { animated } from "react-spring";

type SpringProps = {
  on?: boolean,
  styles?: React.CSSProperties | undefined 
};

export const TextTrail: React.FC<SpringProps> = ({
  on,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    opacity: on ? 1 : 0,
    y: on ? 0 : 150,
    config: config.slow  
  });

  return (
    <div>
      {trail.map(({ ...style }, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

export const FadeIn: React.FC<SpringProps> = ({
  on,
  children
}) => {
  const props = useSpring({
    opacity: on ? 1 : 0,
    from: {opacity: 0},
    to: {opacity: 1},
    config: config.gentle,
  });

  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  );
};

export const ProjectTextHover: React.FC<SpringProps> = ({
  on,
  children,
}) => {
  const props = useSpring({
    color: on ? colourBlack : colourLightBrown,
    config: config.default,
  });

  return (
    <animated.div style={Object.assign({display: "inline-block"}, props)}>
      {children}
    </animated.div>
  );
};

export const SwapColour: React.FC<SpringProps> = ({
  on,
  children,
}) => {
  const props = useSpring({
    color: on ? colourPink : colourLightBrown,
    config: config.default,
  });

  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  );
};