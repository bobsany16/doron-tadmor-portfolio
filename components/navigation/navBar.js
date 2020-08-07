import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Navigation.module.css";
import Heading from "../typography/heading";
import Text from "../typography/text";
import Burger from "../navigation/burger";

const NavBar = ({ children, props }) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navTitleWrapper}>
        <Heading type="h5">Doron Tadmor</Heading>
        <Text>STRATEGIST</Text>
      </div>
      <div className={styles.menu}>
        <Burger />
      </div>
    </div>
  );
};

export default NavBar;
