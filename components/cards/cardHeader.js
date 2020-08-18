import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Cards.module.css";
import PropTypes from "prop-types";
import Heading from "../typography/heading";
import HorizontalLine from "../layout/horizontalLine";
import Card from "./cardMain";
import Logo from "../photos/logo";

const propTypes = {
    hasLogo: PropTypes.bool,

    logo: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    subTitle: PropTypes.string,
    positionTitle: PropTypes.string,
  },
  defaultProps = {
    hasLogo: false,
  };

const CardHeader = ({
  hasLogo,
  logo,
  title,
  location,
  subTitle,
  positionTitle,
  children,
}) => {
  if (hasLogo)
    return (
      <div className={styles.cardHeaderGlobalWrapper}>
        <div className={styles.cardHeaderTitleWrapper}>
          <Heading type="h5" isBlue>
            <b>{title}</b>
          </Heading>
          <Heading type="h5">
            <b>{subTitle}</b>
          </Heading>
          <br />
          {children}
        </div>
        <div className={styles.cardHeaderLogoWrapper}>
            <Logo uri={logo} />
        </div>
      </div>
    );

  return (
    <div>
      <Heading type="h5" isBlue>
        <b>{title}</b>
      </Heading>
      <Heading type="h5">
        <b>{subTitle}</b>
      </Heading>
      <br />
      {children}
    </div>
  );
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
