import Heading from "../components/typography/heading";
import GlobalWrapper from "../components/layout/globalWrapper";
import Layout from "../components/layout";
// import Icon from "../components/icons/icon";
import TopBlock from "../components/blocks/topBlock";
import ThreeBlock from "../components/blocks/threeBlock";
import Card from "../components/cards/cardMain";
import projectsData from "../components/data/projectData";

const _renderProjects = (projectsArray) => {
  return projectsArray.map((item, index) => {
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

const _renderProjectCards = (projectCards) => {
  return projectCards.map((item, index) => {
    return (
      <div key={index}>
        <GlobalWrapper firstChild noPadding>
          <Heading type="h5">
            <b>{item.section}</b>
          </Heading>
        </GlobalWrapper>
        {_renderProjects(item.data)}
      </div>
    );
  });
};

const Projects = () => {
  return (
    <Layout>
      <GlobalWrapper firstChild noPadding>
        <TopBlock oneItem titleLeft="Projects" />
      </GlobalWrapper>
      {_renderProjectCards(projectsData)}
    </Layout>
  );
};

export default Projects;
