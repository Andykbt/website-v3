import React, { useState } from "react";
import { ExpandBorder } from "../../helpers/springs";
import { Body1 } from "../../styles";
import { ButtonContainer } from "./button-styled";

type Props = {
  label?: string,
  onClick?: () => void
  color?: string,
  background?: string,
  disabled?: boolean
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
        data-testid={"button.button"}
        onClick={onClick}
        disabled={disabled}
        background={background}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <Body1 textDirection="center" data-testid={"button.button-label"}>{label || children}</Body1>
      </ButtonContainer>
    </ExpandBorder>
  );
};
