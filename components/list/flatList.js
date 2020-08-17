import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Lists.module.css";
import PropTypes from "prop-types";
import Text from "../typography/text";

const propTypes = {
    data: PropTypes.array,
    hasBulletPoints: PropTypes.bool,
    isBig: PropTypes.bool,
    hasSeparator: PropTypes.bool,
  },
  defaultProps = {
    data: [],
    hasBulletPoints: false,
    isBig: true,
    hasSeparator: false,
  };

const _renderItems = (listItems, isBig, hasSeparator) => {
  return listItems.map((item) => {
    if (hasSeparator)
      return (
        <li className={styles.listItem_hasSeparator}>
          <Text isBig={isBig}>{item}</Text>
        </li>
      );

    return (
      <li className={styles.listItem_noSeparator}>
        <Text isBig={isBig}>{item}</Text>
      </li>
    );
  });
};

const FlatList = ({ data, hasBulletPoints, isBig, hasSeparator }) => {
  if (!hasBulletPoints)
    return <ul className={styles.listWrapper}>{_renderItems(data, isBig, hasSeparator)}</ul>;
};

FlatList.propTypes = propTypes;
FlatList.defaultProps = defaultProps;

export default FlatList;
