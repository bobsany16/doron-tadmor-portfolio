import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Navigation.module.css";
import Link from "next/link";
import Heading from "../typography/heading";
import Text from "../typography/text";
import Burger from "../navigation/burger";

const Footer = ({ children, props }) => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.navTitleWrapper}>
        <Text>Copyright @2020</Text>
      </div>
      <div className={styles.creatorWrapper}>
        <Text>
          Created by{" "}
          <a href="https://linhnguyen.dev" target="_blank">
            <u>Linh Nguyen</u>
          </a>
        </Text>
      </div>
    </div>
  );
};

export default Footer;
