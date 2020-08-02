import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Layout.module.css";

const GlobalWrapper = ({children}) => {
    return (
        <div className={styles.globalWrapper}>
            {children}
        </div>
    )
}

export default GlobalWrapper;