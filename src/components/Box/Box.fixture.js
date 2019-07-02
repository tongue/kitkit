import React from "react";
import Box from ".";
import styled from "@emotion/styled";

const Inner = styled.div`
  flex-basis: 50%;
  width: 100%;
  height: 400px;
  background-color: ${props => props.color};
`;

const ColumnBox = styled(Box)`
  height: 400px;
`;

export default {
  default: (
    <Box>
      <Inner color="hotpink" />
      <Inner color="green" />
    </Box>
  ),
  directionColumn: (
    <ColumnBox direction="column">
      <Inner color="hotpink" />
      <Inner color="green" />
    </ColumnBox>
  ),
  directionRowReverse: (
    <Box direction="rowReverse">
      <Inner color="hotpink" />
      <Inner color="green" />
    </Box>
  ),
  directionColumnReverse: (
    <ColumnBox direction="columnReverse">
      <Inner color="hotpink" />
      <Inner color="green" />
    </ColumnBox>
  )
};
