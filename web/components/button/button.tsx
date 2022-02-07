import React, { useState } from "react";
import { ExpandBorder } from "../../helpers/springs";
import { Body1 } from "../../styles";
import { ButtonContainer } from "./button-styled";

type Props = {
  label?: string,
  onClick?: () => void
  color?: string,
  background?: string,
};

export const Button: React.FC<Props> = ({
  label,
  children,
  onClick,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <ExpandBorder on={hover} borderRadius="9999px">
      <ButtonContainer
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <Body1>{label || children}</Body1>
      </ButtonContainer>
    </ExpandBorder>
  );
};
