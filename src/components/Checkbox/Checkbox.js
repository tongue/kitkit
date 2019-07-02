import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Box from "../Box";

const StyledCheckbox = styled.input`
  ${({ theme }) => css`
    width: ${theme.icon.size.medium};
    height: ${theme.icon.size.medium};
  `}
`;

const Checkbox = ({ children, ...rest }) => (
  <Box as="label">
    <StyledCheckbox {...rest} type="checkbox" />
    {children && children}
  </Box>
);

export default Checkbox;
