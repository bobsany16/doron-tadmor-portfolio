import Link from "next/link";
import PropTypes from "prop-types";
import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Navigation.module.css";
import Heading from "../typography/heading";

const propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    headingType: PropTypes.string,
  },
  defaultProps = {
    href: "/",
    title: "",
    headingType: "h5",
  };

const Anchor = ({ href, title, headingType }) => {
  return (
    <Heading type={headingType}>
      <Link  href={href}>
        <a className={styles.nav_menu_item}>{title}</a>
      </Link>
    </Heading>
  );
};

Anchor.propTypes = propTypes;
Anchor.defaultProps = defaultProps;

export default Anchor;
