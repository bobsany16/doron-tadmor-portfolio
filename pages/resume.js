import Link from "next/link";
import styles from "../styles/Home.module.css";
import Heading from "../components/typography/heading";
import GlobalWrapper from "../components/layout/globalWrapper";
import Layout from "../components/layout";
// import Icon from "../components/icons/icon";
import TopBlock from "../components/blocks/topBlock";
import ThreeBlock from "../components/blocks/threeBlock";
import Card from "../components/cards/cardBackground";

const Resume = () => {
  return (
    <Layout>
      <GlobalWrapper firstChild noPadding>
        <TopBlock twoItem titleLeft="Resumé" titleRight="Download CV" />
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

      <Card
        isExperience
        duration="June - August 2018"
        institution="PricewaterhouseCoopers"
        positionTitle="SUSTAINABILITY CONSULTANT"
        location="Tokyo, Japan"
        logo="/PwC.png"
      />
       <Card
        isExperience
        duration="June - August 2019"
        institution="KPMG"
        positionTitle="DEAL ADVISORY INTERN"
        location="Tel Aviv, Israel"
        logo="/KPMG.png"
      />
       <Card
        isExperience
        duration="June - August 2017"
        institution="US Dept. of the Treasury"
        positionTitle="ANALYST INTERN"
        location="Washington, D.C."
        logo="/USDT.png"
      />
       <Card
        isExperience
        duration="May - June 2017"
        institution="BDO"
        positionTitle="RESEARCH INTERN"
        location="Columbia, MD"
        logo="/BDO.png"
      />
       <Card
        isExperience
        duration="June - August 2016"
        institution="NASA"
        positionTitle="ACCOUNTANT INTERN"
        location="Greenbelt, MD"
        logo="/NASA.png"
      />
    </Layout>
  );
};

export default Resume;
