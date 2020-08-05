import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Navigation.module.css";
import Heading from "../typography/heading";
import Text from "../typography/text";
import GlobalWrapper from "../layout/globalWrapper";

const NavBar = ({ children }) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navTitleWrapper}>
        <Heading type="h5">Doron Tadmor</Heading>
        <Text>STRATEGIST</Text>
      </div>
      <div className={styles.menu}>
      <Heading type="h5">MENU</Heading>
      </div>
    </div>
  );
};

export default NavBar;
