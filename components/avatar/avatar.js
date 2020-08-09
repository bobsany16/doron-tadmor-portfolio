import Avatar from "react-avatar";
import GlobalWrapper from "../layout/globalWrapper";
import PropTypes from "prop-types";
import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Photos.module.css";

const propTypes = {
    uri: PropTypes.string,
    // size: PropTypes.string,
  },
  defaultProps = {
    uri: "",
    // size: "50",
  };

const MainAvatar = ({ size, uri }) => {
  return (
    <div className={styles.avatarWrapper}>
      {/* <Avatar alt="Doron's pic" src={uri} size={size}/> */}
      <img src={uri} alt="profile picture" className={styles.avatar}/>
      </div>
  );
};

MainAvatar.propTypes = propTypes;
MainAvatar.defaultProps = defaultProps;

export default MainAvatar;
