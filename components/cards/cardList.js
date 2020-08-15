import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Cards.module.css";
import CardHeader from "./cardHeader";
import HorizontalLine from "../layout/horizontalLine";
import GlobalWrapper from "../layout/globalWrapper";
import PropTypes from "prop-types";
import Card from "./cardBackground";
import Heading from "../typography/heading";
import FlatList from "../list/flatList";

const propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
  },
  defaultProps = {
    data: [],
    title: "",
  };

const CardList = ({ data, title, children }) => {
  return (
    <div className={styles.cardComponent}>
      <Heading type="h5" isBlue>
        <b>{title}</b>
      </Heading>

      {/* <HorizontalLine fullWidth/> */}
      <br />

      <FlatList isBig data={data} />
    </div>
  );
};

CardList.propTypes = propTypes;
CardList.defaultProps = defaultProps;

export default CardList;
