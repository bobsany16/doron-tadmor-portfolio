// import styled from 'styled-components';
import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Button.module.css";
import Heading from "../typography/heading";
import PropTypes from "prop-types";
import Link from "next/link";

const propTypes = {
    color: PropTypes.oneOf(["blue", "black"]),
    url: PropTypes.string,
    hasExternalLink: PropTypes.bool,
  },
  defaultProps = {
    color: "black",
    url: "",
    hasExternalLink: false,
  };

const _renderButtonHeader = (hasExternalLink, url, children) => {
  return (
    <Heading type="h5">
      {!hasExternalLink && (
        <Link href={`/${url}`}>
          <a>{children}</a>
        </Link>
      )}
      {hasExternalLink && <a href={url} target="_blank">{children}</a>}
    </Heading>
  );
};

const ButtonPrimary = ({ color, children, url, hasExternalLink }) => {
  return (
    <div className={styles.buttonWrapper}>
      {color === "blue" && (
        <button className={styles.buttonComponent_blue}>
          {_renderButtonHeader(hasExternalLink, url, children)}
        </button>
      )}
      {color === "black" && (
        <button className={styles.buttonComponent_black}>
          {_renderButtonHeader(hasExternalLink, url, children)}
        </button>
      )}
    </div>
  );
};

ButtonPrimary.propTypes = propTypes;
ButtonPrimary.defaultProps = defaultProps;

export default ButtonPrimary;
