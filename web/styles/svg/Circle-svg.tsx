import React from "react";
import { defaultTransition } from "..";

type Props = {
  radius: number,
  stroke: number,
  progress: number,
}

export const CircleSvg: React.FC<Props> = ({
  radius,
  stroke,
  progress,
  children
}) => {
  const normalisedRadius = radius - stroke * 2;
  const circumference = normalisedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
    >
      <circle
        stroke="rgb(213, 205, 196)"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset, transition: defaultTransition}}
        r={normalisedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x={"20%"}
        y={"60%"}
        fill={progress == 100 ? "rgb(213, 205, 196" : "rgba(213, 205, 196, 0.5)"}
        style={{transition: defaultTransition}}>
        {children}
      </text>

      <circle
        stroke="rgba(213, 205, 196, 0.5)"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        r={normalisedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};