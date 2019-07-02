import React from "react";
import PropTypes from "prop-types";
import { StyledButton, Label } from "./Button.styles";
import Box from "../Box";

export const VARIANTS = {
  primary: "primary",
  plain: "plain",
  default: "default"
};

function Button({ icon, children, reverse, variant, ...rest }) {
  const hasIcon = !!icon;
  const hasChildren = !!children;
  const isWithIconOnly = !hasChildren && hasIcon;

  let content;
  if (hasIcon && hasChildren) {
    content = (
      <Box direction={reverse ? "rowReverse" : "row"}>
        {icon}
        <Label>{children}</Label>
      </Box>
    );
  } else if (isWithIconOnly) {
    content = icon;
  } else {
    content = children;
  }

  const isPrimary = variant === VARIANTS.primary;
  const isPlain = variant === VARIANTS.plain;

  return (
    <StyledButton
      hasIcon={hasIcon}
      isWithIconOnly={isWithIconOnly}
      isPrimary={isPrimary}
      isPlain={isPlain}
      variant={variant}
      {...rest}
    >
      {content}
    </StyledButton>
  );
}

Button.defaultProps = {
  variant: VARIANTS.default,
  disabled: false,
  icon: null,
  reverse: false
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    VARIANTS.default,
    VARIANTS.plain,
    VARIANTS.primary
  ]),
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  reverse: PropTypes.bool
};

export default Button;
