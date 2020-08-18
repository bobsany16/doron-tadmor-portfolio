import Head from "next/head";
import styles from "../styles/Home.module.css";
import Heading from "../components/typography/heading";
import Text from "../components/typography/text";
import SubHeading from "../components/typography/subheading";
import GlobalWrapper from "../components/layout/globalWrapper";
import HorizontalLine from "../components/layout/horizontalLine";
import NavBar from "../components/navigation/navBar";
import ButtonPrimary from "../components/buttons/primary";
import Layout from "../components/layout";
import MainAvatar from "../components/photos/avatar";

const Home = () => {
  return (
    <Layout>
      <GlobalWrapper firstChild noPadding>
        <MainAvatar uri="/doron_pic.jpg" size="200" />
        <HorizontalLine />

        <div className={styles.avatarTitle}>
          <Heading type="h3">
            {" "}
            <b>Doron Tadmor</b>
          </Heading>
        </div>

        <br />

        <div className={styles.personalDescription}>
          <Heading type="h5">
            Welcome! I'm <b>Doron</b>. I have expertise in global strategy,
            international development, and sustainability.
          </Heading>
          <br />
          <Heading type="h5">
            Take a look at some of my work and learn more about how I have made
            an impact.
          </Heading>
        </div>
        <br />
        <br />
        <div className={styles.buttonSection}>
          <ButtonPrimary color="blue" url="resume">
            <b>VIEW MY RESUMÉ</b>
          </ButtonPrimary>
          <ButtonPrimary color="black" url="projects">
            <b>VIEW MY PROJECTS</b>
          </ButtonPrimary>
        </div>
      </GlobalWrapper>
    </Layout>
  );
}

export default Home;
