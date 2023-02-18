import {
    colorGrey,
    colourDarkGrey,
    colourLightBrown,
} from '@website-v3/web/styles';
import styled, { keyframes } from 'styled-components';

export const Circle = styled.div<{ show: boolean; path: string }>`
    ${(props) =>
        props.path === ''
            ? `
    width: ${props.show ? 100 : 0}px;
    height: ${props.show ? 100 : 0}px;

    background: ${colourDarkGrey};
    overflow: hidden;
    border-radius: 50%;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    z-index: 10;
    position: fixed;

    pointer-events: none;

    &:after {
      content: "Explore";
      color: ${colourLightBrown};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }`
            : `
    width: 22.22vh;
    height: 22.22vh;

    z-index: 10;
    border-radius: 50%;
    position: fixed;

    transition-duration: 200ms;
    transition-timing-function: ease-out;

    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url(${props.path});
    pointer-events: none;
  `}
`;

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Cursor = styled.div<{
    color: string | undefined;
    state: 'default' | 'image' | 'inspect' | 'hidden';
    image: string;
}>`
    background-color: ${(props) => props.color};
    opacity: ${(props) => (props.state === 'hidden' ? '0' : '1')};
    width: ${(props) => (props.state === 'inspect' ? '50px' : '10px')};
    height: ${(props) => (props.state === 'inspect' ? '50px' : '10px')};
    background-image: url('${(props) => props.image && props.image}');
    border-radius: 50%;
    position: fixed;
    z-index: 10;
    pointer-events: none;
    top: 0px;
    left: 0px;
    transition-property: width, height, top, left, background-color;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

    & svg,
    & div {
        position: absolute;
        top: 50%;
        left: 50%;
        pointer-events: none;
        text-align: center;
        transform: translate(-50%, -50%);
    }
`;

export const Border = styled.div`
    border: dashed 1px;
    border-radius: 50px;
    animation: ${rotate} 2s linear infinite;
    padding: 20px;
`;

export const CursorShadow = styled.div<{
    state: 'default' | 'image' | 'inspect' | 'hidden';
}>`
    background-color: ${colorGrey};
    opacity: ${(props) =>
        props.state === 'hidden' || props.state === 'inspect' ? '0' : '0.5'};
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border-collapse: separate;
    border-spacing: 2px 0;
    position: fixed;
    z-index: 10;
    pointer-events: none;
    left: -7.5px;
    top: -7.5px;
    transition: all 0.1s;
`;
