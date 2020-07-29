import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
    textColor: PropTypes.string,

    type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h6", "span", "p"]),

    smallest: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    larger: PropTypes.bool,
    largest: PropTypes.bool,
  },
  defaultProps = {
    type: "h1",
    textColor: "#000000",
  };

const fontSettings = {
  fontWeight: "bold",

  smallest: { fontSize: 14, lineHeight: 14 },
  small: { fontSize: 16, lineHeight: 16 },
  medium: { fontSize: 18, lineHeight: 18 },
  large: { fontSize: 20, lineHeight: 20 },
  larger: { fontSize: 28, lineHeight: 28 },
  largest: { fontSize: 32, lineHeight: 32 },
};

const HeadingComponent = styled.span`
  font-weight: ${fontSettings.fontWeight};
  color: ${({ color }) => color};
  font-size: ${({fontSize}) => fontSize}px;
`;

const Heading = ({
  smallest,
  small,
  medium,
  large,
  larger,
  largest,
  textColor,
  type,
  children,
  ...rest
}) => {
  if (!smallest && !small && !medium && !large && !larger && !largest) {
    small = true;
  }

  let sizeSetting = {};

  if (smallest) {
    sizeSetting = fontSettings.smallest;
  } else if (small) {
    sizeSetting = fontSettings.small;
  } else if (medium) {
    sizeSetting = fontSettings.medium;
  } else if (large) {
    sizeSetting = fontSettings.large;
  } else if (larger) {
    sizeSetting = fontSettings.larger;
  } else {
    sizeSetting = fontSettings.largest;
  }

  return (
    <HeadingComponent
      color={textColor}
      type={type}
      fontSize={sizeSetting.fontSize}
      lineHeight={sizeSetting.lineHeight}
      {...rest}
    >
      {children}
    </HeadingComponent>
  );
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
