import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Layout.module.css";
import PropTypes from "prop-types";

const propTypes = {
    firstChild: PropTypes.bool,
    lastChild: PropTypes.bool,
    noPadding: PropTypes.bool,
  },
  defaultProps = {
    firstChild: false,
    lastChild: false,
    noPadding: false,
  };

const GlobalWrapper = ({ firstChild, lastChild, noPadding, children, ...props }) => {
  return (
    <div>
      {(lastChild && !noPadding) && (
        <div className={styles.globalWrapper_last_child}>{children}</div>
      )}
      {(lastChild && noPadding) && (
        <div className={styles.globalWrapper_last_child_no_padding}>{children}</div>
      )}
      {(firstChild && !noPadding) && (
        <div className={styles.globalWrapper_first_child}>{children}</div>
      )}
      {(firstChild && noPadding) && (
        <div className={styles.globalWrapper_first_child_no_padding}>{children}</div>
      )}
      {(noPadding && !firstChild && !lastChild) && (
        <div className={styles.globalWrapper_no_padding}>{children}</div>
      )}
    </div>
  );
};

GlobalWrapper.propTypes = propTypes;
GlobalWrapper.defaultProps = defaultProps;

export default GlobalWrapper;
