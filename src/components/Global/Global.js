import React from "react";
import { Global as EmotionGlobal, css } from "@emotion/core";

const externalFonts = theme =>
  theme.global.externalFonts &&
  theme.global.externalFonts.map(
    font =>
      css`
        @import url(${font});
      `
  );

const global = theme =>
  css`
    ${externalFonts(theme)}
    html,
    body {
      font-size: ${theme.global.fontSize};
    }
  `;

function Global({ children }) {
  return (
    <React.Fragment>
      <EmotionGlobal styles={global} />
      {children}
    </React.Fragment>
  );
}

export default Global;
