import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Typography.module.css";

const Text = ({children}) => {
    return (
        <span>
            <p className={styles.text}>{children}</p>
        </span>
    )
}

export default Text;