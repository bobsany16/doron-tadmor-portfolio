import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Layout.module.css";
import PropTypes from "prop-types";

const propTypes = {
    fullWidth: PropTypes.bool,
    halfWidth: PropTypes.bool,
    // color: PropTypes.oneOf(["blue", "black"]),
  },
  defaultProps = {
    fullWidth: false,
    halfWidth: false,
    // color: "blue",
  };

const HorizontalLine = ({ fullWidth, halfWidth, color }) => {
  if (!fullWidth && !halfWidth) halfWidth = true;

  if (halfWidth) return <hr className={styles.horizontalLine_halfWidth} />;
  return <hr className={styles.horizontalLine_fullWidth} />;
};

HorizontalLine.propTypes = propTypes;
HorizontalLine.defaultProps = defaultProps;

export default HorizontalLine;
