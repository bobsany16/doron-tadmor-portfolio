import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Blocks.module.css";
import PropTypes from "prop-types";
import Heading from "../typography/heading";

const propTypes = {
    titleLeft: PropTypes.string,
    titleMiddle: PropTypes.string,
    titleRight: PropTypes.string,
    anchorLinkLeft: PropTypes.string,
    anchorLinkMiddle: PropTypes.string,
    anchorLinkRight: PropTypes.string,
  },
  defaultProps = {
    titleLeft: "",
    titleMiddle: "",
    titleRight: "",
    anchorLinkLeft: "",
    anchorLinkRight: "",
    anchorLinkMiddle: "",
  };

const ThreeBlock = ({
  titleLeft,
  titleMiddle,
  titleRight,
  anchorLinkLeft,
  anchorLinkMiddle,
  anchorLinkRight,
}) => {
  return (
    <div className={styles.threeBlockWrapper}>
      <Heading type="h5">
        <a href={`#${anchorLinkLeft}`}>
          <b>{titleLeft}</b>
        </a>
      </Heading>
      <Heading type="h5">
        <a href={`#${anchorLinkMiddle}`}>
          <b>{titleMiddle}</b>
        </a>
      </Heading>
      <Heading type="h5">
        <a href={`#${anchorLinkRight}`}>
          <b>{titleRight}</b>
        </a>
      </Heading>
    </div>
  );
};

ThreeBlock.propTypes = propTypes;
ThreeBlock.defaultProps = defaultProps;

export default ThreeBlock;
