import Heading from "../components/typography/heading";
import GlobalWrapper from "../components/layout/globalWrapper";
import Layout from "../components/layout";
// import Icon from "../components/icons/icon";
import TopBlock from "../components/blocks/topBlock";
import ThreeBlock from "../components/blocks/threeBlock";
import Card from "../components/cards/cardBackground";
import projectsData from "../components/data/projectData";

const _renderProjectCards = (projectList) => {
  return projectList.map((item, index) => {
    return (
      <Card
        isProject
        institution={item.institution}
        positionTitle={item.positionTitle}
        description={item.description}
        key={index}
      />
    );
  });
};

const Projects = () => {
  return (
    <Layout>
      <GlobalWrapper firstChild noPadding>
        <TopBlock oneItem titleLeft="Projects" />
        <br/>
        <Heading type="h5">
          <b>Impact</b>
        </Heading>
      </GlobalWrapper>
      {_renderProjectCards(projectsData)}
    </Layout>
  );
};

export default Projects;
