import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Lists.module.css";
import PropTypes from "prop-types";
import Text from "../typography/text";

const propTypes = {
    data: PropTypes.array,
    hasBulletPoints: PropTypes.bool,
    isBig: PropTypes.bool,
  },
  defaultProps = {
    data: [],
    hasBulletPoints: false,
    isBig: true,
  };

const _renderItems = (listItems, isBig) => {
  return listItems.map((item) => {
    return (
      <li className={styles.listItem}>
        <Text isBig={isBig}>{item}</Text>
      </li>
    );
  });
};

const FlatList = ({ data, hasBulletPoints, isBig }) => {
  if (!hasBulletPoints) return <ul className={styles.listWrapper}>{_renderItems(data, isBig)}</ul>;
};

FlatList.propTypes = propTypes;
FlatList.defaultProps = defaultProps;

export default FlatList;
