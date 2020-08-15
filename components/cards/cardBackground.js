import styles from "/Users/linhanhnguyen/Documents/GitHub/freelance/doron-tadmor/styles/Cards.module.css";
import Heading from "../typography/heading";
import HorizontalLine from "../layout/horizontalLine";
import PropTypes from "prop-types";
import Text from "../typography/text";
import CardHeader from "./cardHeader";
import FlatList from "../list/flatList";

const propTypes = {
    isExperience: PropTypes.bool,
    isSkills: PropTypes.bool,
    isEducation: PropTypes.bool,
    isDoubleDegree: PropTypes.bool,
    hasMinor: PropTypes.bool,

    //for all
    duration: PropTypes.string,
    institution: PropTypes.string,
    location: PropTypes.string,

    //If isEducation
    degreeOne: PropTypes.string,
    degreeTwo: PropTypes.string,
    minor: PropTypes.string,
    description: PropTypes.string,
    coreCourses: PropTypes.string,

    //If isExperience
    positionTitle: PropTypes.string,
    achievements: PropTypes.array,
    logo: PropTypes.string,

    //If isSkills
    subSectionTitle: PropTypes.string,
    list: PropTypes.array,
  },
  defaultProps = {
    isExperience: false,
    isSkills: false,
    isEducation: false,
    isDoubleDegree: false,
    hasMinor: false,
  };

const Card = ({
  isExperience,
  isSkills,
  isEducation,
  isDoubleDegree,
  hasMinor,
  degreeOne,
  degreeTwo,
  minor,
  description,
  coreCourses,
  duration,
  location,
  institution,
  positionTitle,
  logo,
  achievements,
  children,
}) => {
  if (isEducation) {
    return (
      <div className={styles.cardComponent}>
        <CardHeader title={duration} subTitle={institution}>
          <Heading type="h6">{degreeOne}</Heading>
          {isDoubleDegree && <Heading type="h6">{degreeTwo}</Heading>}
          {hasMinor && <Heading type="h6">• Minors: {minor}</Heading>}
          <br />
          <Heading type="h6">{location}</Heading>
        </CardHeader>

        <HorizontalLine fullWidth />

        <Text isBig>{description}</Text>
        <br />
        <Text isBold={false}>
          <b>Core courses: </b> {coreCourses}
        </Text>
      </div>
    );
  } else if (isExperience) {
    return (
      <div className={styles.cardComponent}>
        <CardHeader
          hasLogo
          title={duration}
          subTitle={positionTitle}
          logo={logo}
        >
          <Heading type="h6">{institution}</Heading>
          <Heading type="h6">{location}</Heading>
        </CardHeader>

        <HorizontalLine fullWidth />

        <FlatList data={achievements} isBig />
      </div>
    );
  } else {
    return <div>Hi</div>;
  }
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
