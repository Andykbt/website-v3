import React from 'react';

type Props = {
    width?: number | string;
    height?: number | string;
    isHovered?: boolean;
};

const ArrowSvg = ({ width, height, isHovered }: Props) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                stroke={isHovered ? '#D5CDC4' : '#232025'}
                fill={isHovered ? '#232025' : '#D5CDC4'}
                style={{ transition: 'all 0.5s' }}
                strokeWidth={'1pxx'}
                d="M0.677735 42.6401L5.63774 37.6001L34.8377 8.56007L34.7577 8.40007C34.4377 8.64007 33.8777 8.88007 32.9977 8.96007L1.87774 9.28006L1.31774 8.80006L10.0377 0.0800644L50.0377 0.0800707L50.0377 40.0001L41.3177 48.7201L40.7577 48.2401L41.1577 17.1201C41.1577 16.2401 41.4777 15.6001 41.7177 15.3601L41.5577 15.2001L37.3977 19.4401L12.4377 44.4001L7.47773 49.4401L0.677735 42.6401Z"
            />
        </svg>
    );
};

export default ArrowSvg;
