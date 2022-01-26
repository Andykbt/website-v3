import React from "react";
import { useTrail, config, animated } from "react-spring";
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
    <div style={{display: "flex"}}>
      {trail.map(({ ...style }, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};
