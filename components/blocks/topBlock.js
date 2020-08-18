import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Blocks.module.css";
import PropTypes from "prop-types";
import Link from "next/link";
import Heading from "../typography/heading";
import ButtonPrimary from "../buttons/primary";

const propTypes = {
    twoItem: PropTypes.bool,
    hasExternalLink: PropTypes.bool,
    // oneItem: PropTypes.bool,
    titleLeft: PropTypes.string,
    titleRight: PropTypes.string,
    url: PropTypes.string,
    
  },
  defaultProps = {
    // oneItem: false,
    hasExternalLink: false,
    twoItem: false,
    titleRight: "",
    titleLeft: "",
    url: "/",
    
  };

const TopBlock = ({ twoItem, oneItem, titleRight, titleLeft, url, props, hasExternalLink }) => {
  //   if (!oneItem && !twoItem) {
  //     oneItem = true;
  //   }

  return (
    <div className={styles.blockWrapper}>
      <Heading type="h4">
        <b>{titleLeft}</b>
      </Heading>

      {twoItem && (
        <ButtonPrimary hasExternalLink color="blue"  url={url}>
          {titleRight}
        </ButtonPrimary>
      )}
    </div>
  );
};

TopBlock.propTypes = propTypes;
TopBlock.defaultProps = defaultProps;

export default TopBlock;
