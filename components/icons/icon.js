import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Icons.module.css";
import PropTypes from "prop-types";

const propTypes = {
    iconType: PropTypes.oneOf(["brands", "solid", "regular"]),
    iconName: PropTypes.string,
    smallest: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
  },
  defaultProps = {
    iconType: "brands",
    iconName: "twitter",
    medium: false,
    smallest: false,
    small: false,
    large: true,
  };

const Icon = ({ iconType, iconName, smallest, small, medium, large }) => {
  if (!small && !medium && !large && !smallest) {
    small = true;
  }
  return <i className="fab fa-github"></i>;
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
