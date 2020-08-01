import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Typography.module.css";

const Heading = ({ children }) => {
  return (
    <span>
      <h1 className={styles.heading}>{children}</h1>
    </span>
  );
};

export default Heading;