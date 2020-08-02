import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Typography.module.css";

const SubHeading = ({ children }) => {
  return (
    <span>
      <h3 className={styles.subheading}>{children}</h3>
    </span>
  );
};

export default SubHeading;