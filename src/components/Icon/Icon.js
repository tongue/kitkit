import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

const Icon = styled.figure`
  ${({ theme, size }) => css`
    display: inline-block;
    flex: 0 0 auto;
    width: ${theme.icon.size[size]};
    height: ${theme.icon.size[size]};
    margin: 0;
    color: inherit;

    path {
      stroke: currentColor;
      fill: currentColor;
    }

    *:not([stroke]) {
      &[fill="none"] {
        stroke-width: 0;
      }
    }
    *[stroke*="#"],
    *[STROKE*="#"] {
      stroke: inherit;
      fill: none;
    }
    *[fill-rule],
    *[FILL-RULE],
    *[fill*="#"],
    *[FILL*="#"] {
      fill: inherit;
      stroke: none;
    }
  `}
`;

Icon.defaultProps = {
  size: "medium"
};

Icon.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"])
};

export default Icon;
