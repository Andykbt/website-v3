import React from "react";
import { useTrail, config, animated, useSpring } from "react-spring";
import { colourBlack, colourLightBrown } from "../../styles";
export { animated } from "react-spring";

export const TextTrail: React.FC<{open: boolean}> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    opacity: open ? 1 : 0,
    y: open ? 0 : 150,
    config: config.gentle
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

export const FadeIn: React.FC<{
  on: boolean,
}> = ({
  on,
  children
}) => {
  const props = useSpring({
    opacity: on ? 1 : 0,
    config: config.gentle,
  });

  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  );
};

export const ProjectTextHover: React.FC<{
  on: boolean,
  styles?: React.CSSProperties | undefined,
}> = ({
  on,
  styles,
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