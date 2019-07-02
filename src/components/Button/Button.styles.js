import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { VARIANTS } from ".";

const getPadding = ({ theme, isPlain, isWithIconOnly }) => {
  if (isWithIconOnly) {
    return "1em";
  }
  if (isPlain) {
    return 0;
  }

  return theme.button.padding;
};

const getColor = ({ theme, variant }) => {
  const colors = {
    [VARIANTS.plain]: "inherit",
    [VARIANTS.primary]: theme.button.primary.color,
    [VARIANTS.default]: theme.button.color
  };

  return colors[variant];
};

const hoverStyle = css`
  &:hover {
    transform: scale(1.02);
  }
`;

const activeStyle = css`
  &:active {
    transition: transform 50ms ease-in-out;
    transform: scale(0.98);
  }
`;

export const StyledButton = styled.button`
  ${props => {
    const { theme, isPrimary, isPlain, isWithIconOnly, disabled } = props;
    return css`
      display: inline-block;
      box-sizing: border-box;
      padding: ${getPadding(props)};

      background-color: ${isPrimary ? theme.button.color : "transparent"};

      border: ${isPlain
        ? "none"
        : `${theme.button.border.width} solid ${theme.button.border.color}`};
      border-radius: ${isWithIconOnly ? "1000px" : theme.button.border.radius};

      font-family: ${theme.fontFamily};
      line-height: ${isWithIconOnly ? 0 : theme.lineHeight};
      font-size: ${theme.button.fontSize};
      font-weight: ${theme.button.fontWeight};
      color: ${getColor(props)};

      opacity: ${disabled ? theme.button.disabled.opacity : null};
      cursor: ${disabled ? "default" : "pointer"};

      transition: transform 100ms ease-in-out;

      ${!disabled && !isPlain && hoverStyle};
      ${!disabled && !isPlain && activeStyle};
    `;
  }}
`;

export const Label = styled.span`
  display: inline-block;
  margin: 0 0.5em;
`;
