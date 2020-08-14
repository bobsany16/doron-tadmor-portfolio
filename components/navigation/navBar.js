import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Navigation.module.css";
import Link from "next/link";
import Heading from "../typography/heading";
import Text from "../typography/text";
import Burger from "../navigation/burger";

const NavBar = ({ children, props }) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navTitleWrapper}>
        <Heading type="h5">
          <Link href="/">
            <a>
              <b>Doron Tadmor</b>
            </a>
          </Link>
        </Heading>
        <Text>STRATEGIST</Text>
      </div>
      <div className={styles.menu}>
        <Burger />
      </div>
    </div>
  );
};

export default NavBar;
