const calculateFontSize = power => {
  const factor = 1.25;
  const size = (factor ** power).toFixed(3);

  return `${size}rem`;
};

const fontFamily = "Roboto";
const lineHeight = 1.45;
const fontWeight = {
  bold: 700,
  medium: 500,
  regular: 400
};

const fontSize = {
  xxlarge: calculateFontSize(3),
  xlarge: calculateFontSize(2),
  large: calculateFontSize(1),
  medium: calculateFontSize(0),
  small: calculateFontSize(-1)
};

export default { fontFamily, fontWeight, lineHeight, fontSize };
