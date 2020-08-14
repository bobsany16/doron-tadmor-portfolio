import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Typography.module.css";
import PropTypes from "prop-types";

const propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  isBold: PropTypes.bool,
  isItalics: PropTypes.bool,
  isBlue: PropTypes.bool,

}, defaultProps = {
  type: "h1",
  isBold: true,
  isItalics: false,
  isBlue: false,
}
const Heading = ({ type, isBold, isItalics, children, isBlue }) => {
  return (
    <span className={styles.heading_span}>
      {(type === "h1") && <h1 className={styles.heading_h1}>{children}</h1>}
      {(type === "h2") && <h2 className={styles.heading_h2}>{children}</h2>}
      {(type === "h3") && <h3 className={styles.heading_h3}>{children}</h3>}
      {(type === "h4") && <h4 className={styles.heading_h4}>{children}</h4>}
      {(type === "h5") && !isBlue && <h5 className={styles.heading_h5}>{children}</h5>}
      {(type === "h5") && isBlue && <h5 className={styles.heading_h5_blue}>{children}</h5>}
      {(type === "h6") && <h6 className={styles.heading_h6_no_bold}>{children}</h6>}
      
    </span>
  );
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;