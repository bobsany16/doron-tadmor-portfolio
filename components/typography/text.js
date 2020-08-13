import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Typography.module.css";
import PropTypes from "prop-types";

const propTypes = {
    isBold: PropTypes.bool,
}, defaultProps ={
    isBold: true,
}

const Text = ({children, isBold}) => {
    return (
        <span>
            {(isBold && <p className={styles.text}>{children}</p>)}
            {!isBold && <p className={styles.text_no_bold}>{children}</p>}
        </span>
    )
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;