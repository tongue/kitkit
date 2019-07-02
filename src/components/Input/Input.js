import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.brand};
    font-size: ${theme.fontSize.medium};
  `}
`;

export default Input;
