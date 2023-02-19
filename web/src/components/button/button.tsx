import { ExpandBorder } from '@website-v3/web/src/helpers/springs';
import { Body1 } from '@website-v3/web/styles';

import { ButtonContainer } from './button-styled';

import React, { useState } from 'react';

type Props = {
    label?: string;
    onClick?: () => void;
    color?: string;
    background?: string;
    disabled?: boolean;
};

export const Button: React.FC<Props> = ({
    label,
    children,
    background,
    disabled,
    onClick,
}) => {
    const [hover, setHover] = useState(false);

    return (
        <ExpandBorder on={hover} borderRadius="9999px">
            <ButtonContainer
                onClick={onClick}
                disabled={disabled}
                background={background}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Body1
                    textDirection="center"
                    data-testid={'button.button-label'}
                >
                    {label || children}
                </Body1>
            </ButtonContainer>
        </ExpandBorder>
    );
};
