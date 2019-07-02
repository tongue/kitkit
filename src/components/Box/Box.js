import styled from "@emotion/styled";
import { css } from "@emotion/core";

const DIRECTION = {
  row: "row",
  rowReverse: "row-reverse",
  column: "column",
  columnReverse: "column-reverse"
};

const Box = styled.div`
  ${({ direction }) => css`
    display: flex;
    flex-direction: ${DIRECTION[direction]};
    align-items: center;
  `}
`;

Box.defaultProps = {
  direction: DIRECTION.row
};

export default Box;
