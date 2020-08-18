import Link from "next/link";
import styles from "../styles/Home.module.css";
import Heading from "../components/typography/heading";
import GlobalWrapper from "../components/layout/globalWrapper";
import Layout from "../components/layout";
// import Icon from "../components/icons/icon";
import TopBlock from "../components/blocks/topBlock";
import ThreeBlock from "../components/blocks/threeBlock";
import Card from "../components/cards/cardMain";
import {
  experienceData,
  skillsData,
  languageData,
  awardsData,
  interestData,
} from "../components/data/resumeData";
import CardList from "../components/cards/cardList";

const Resume = () => {
  const _renderExperienceCards = (experienceArray) => {
    return experienceArray.map((item, index) => {
      return (
        <Card
          isExperience
          duration={item.duration}
          institution={item.institution}
          positionTitle={item.positionTitle}
          location={item.location}
          achievements={item.achievements}
          logo={item.logo}
          key={index}
        />
      );
    });
  };

  return (
    <Layout>
      <GlobalWrapper firstChild noPadding>
        <TopBlock
          twoItem
          titleLeft="Resumé"
          titleRight="Download CV"
          url="https://drive.google.com/file/d/1PLrGAn92-LbCEB3EbB_ZiNlVomI_LJLs/view"
          // url=""
        />
        {/* <ThreeBlock
          titleLeft="Education"
          titleMiddle="Experience"
          titleRight="Skills"
          anchorLinkLeft="education"
          anchorLinkRight="skills"
          anchorLinkMiddle="experience"
        /> */}
        <Heading type="h5">
          <b>EDUCATION</b>
        </Heading>
      </GlobalWrapper>

      <Card
        isEducation
        duration="2020 - 2021"
        institution="IMPERIAL COLLEGE LONDON"
        degreeOne="• MSc International Management"
        location="London, United Kingdom"
        description="Today’s business environment is truly global and a
        great workplace for people with a thorough understanding of international business dynamics and strong intercultural and interpersonal skills. The MSc International Management offers a large number of international modules, and has a strong focus on developing leadership skills.
       "
        coreCourses="Corporate finance, Competitive Strategy, Decision Analysis, OB, PM"
      />
      <Card
        isEducation
        isDoubleDegree
        hasMinor
        duration="2016 - 2020"
        institution="UNIVERSITY OF MARYLAND"
        degreeOne="• BSc Operations Management and 
        Business Analytics"
        degreeTwo="• BSc International Business"
        minor="Spanish, Tech Entrepreneurship"
        location="College Park, MD"
        description="Today’s business environment is truly global and a
        great workplace for people with a thorough understanding of international business dynamics and strong intercultural and interpersonal skills. The MSc International Management offers a large number of international modules, and has a strong focus on developing leadership skills.
       "
        coreCourses="Corporate finance, Competitive Strategy, Decision Analysis, OB, PM"
      />

      <GlobalWrapper firstChild noPadding>
        <Heading type="h5">
          <b>EXPERIENCE</b>
        </Heading>
      </GlobalWrapper>

      {_renderExperienceCards(experienceData)}
      <GlobalWrapper firstChild noPadding>
        <Heading type="h5">
          <b>SKILLS</b>
        </Heading>
      </GlobalWrapper>

      <CardList hasSeparator data={skillsData} title="PROFESSIONAL SKILLSET" />
      <CardList hasSeparator data={languageData} title="LANGUAGES" />
      <CardList hasSeparator data={awardsData} title="AWARDS" />
      <CardList hasSeparator data={interestData} title="INTERESTS" />
    </Layout>
  );
};

export default Resume;
