import colors from "./colors";
import typography from "./typography";

export default {
  colors,
  ...typography,
  global: {
    fontSize: "100%",
    externalFonts: [
      "https://fonts.googleapis.com/css?family=Roboto:400,500,700"
    ]
  },
  button: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.medium,
    padding: "0.5em 1em",
    border: {
      width: "2px",
      color: colors.brand,
      radius: "0.5em"
    },
    color: colors.brand,
    disabled: {
      opacity: 0.3
    },
    primary: {
      color: colors.light[0]
    }
  },
  icon: {
    size: {
      small: "12px",
      medium: "24px",
      large: "48px",
      xlarge: "96px"
    }
  }
};
