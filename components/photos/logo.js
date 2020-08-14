import GlobalWrapper from "../layout/globalWrapper";
import PropTypes from "prop-types";
import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Photos.module.css";

const propTypes = {
  uri: PropTypes.string,
};

const Logo = ({ uri }) => {
  return (
    <div className={styles.logoWrapper}>
      <img src={uri} alt="logo" className={styles.logo} />
    </div>
  );
};

Logo.propTypes = propTypes;

export default Logo;
