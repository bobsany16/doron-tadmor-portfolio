import Link from "next/link";
import PropTypes from "prop-types";
import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Navigation.module.css";
import Heading from "../typography/heading";

const propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    headingType: PropTypes.string,
    onClick: PropTypes.func,
  },
  defaultProps = {
    href: "/",
    title: "",
    headingType: "h5",
    onClick: () => {},
  };

const Anchor = ({ href, title, headingType, onClick }) => {
  return (
    <Heading type={headingType}>
      <Link href={href} >
        <a className={styles.nav_menu_item} onClick={onClick}>
          <b>{title}</b>
        </a>
      </Link>
    </Heading>
  );
};

Anchor.propTypes = propTypes;
Anchor.defaultProps = defaultProps;

export default Anchor;
