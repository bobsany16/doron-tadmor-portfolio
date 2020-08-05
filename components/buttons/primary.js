// import styled from 'styled-components';
import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Button.module.css";
import Heading from "../typography/heading";
import PropTypes from "prop-types";

const propTypes = {
    color: PropTypes.oneOf(["blue", "black"])
}, defaultProps = {
    color: "black",
}

const ButtonPrimary = ({ color, children }) => {
  return (
    <div className={styles.buttonWrapper}>
      {(color === "blue") && <button className={styles.buttonComponent_blue}>
        <Heading type="h5">{children}</Heading>
      </button>}
      {(color === "black") && <button className={styles.buttonComponent_black}>
        <Heading type="h5">{children}</Heading>
      </button>}
    </div>
  );
};

ButtonPrimary.propTypes = propTypes;
ButtonPrimary.defaultProps = defaultProps;

export default ButtonPrimary;
