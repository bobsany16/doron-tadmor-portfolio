import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Lists.module.css";
import PropTypes from "prop-types";
import Text from "../typography/text";

const propTypes = {
    data: PropTypes.array,
    hasBulletPoints: PropTypes.bool,
    isBig: PropTypes.bool,
    hasSeparator: PropTypes.bool,
  },
  defaultProps = {
    data: [],
    hasBulletPoints: false,
    isBig: true,
    hasSeparator: false,
  };