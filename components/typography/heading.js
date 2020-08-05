import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Typography.module.css";
import PropTypes from "prop-types";

const propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  isBold: PropTypes.bool,
  isItalics: PropTypes.bool,

}, defaultProps = {
  type: "h1",
  isBold: true,
  isItalics: false,
}
const Heading = ({ type, isBold, isItalics, children }) => {
  return (
    <span className={styles.heading_span}>
      {(type === "h1") && <h1 className={styles.heading_h1}>{children}</h1>}
      {(type === "h2") && <h2 className={styles.heading_h2}>{children}</h2>}
    </span>
  );
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;