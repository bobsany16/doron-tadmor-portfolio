import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Typography.module.css";
import PropTypes from "prop-types";

const propTypes = {
    isBold: PropTypes.bool,
    isBig: PropTypes.bool,
}, defaultProps ={
    isBold: true,
    isBig: false,
}

const Text = ({children, isBold, isBig, ...props}) => {
    return (
        <span>
            {(isBold && !isBig && <p className={styles.text_bold_small} {...props}>{children}</p>)}
            {(isBold && isBig && <p className={styles.text_bold_big} {...props}>{children}</p>)}
            {!isBold && <p className={styles.text_no_bold} {...props}>{children}</p>}
        </span>
    )
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;