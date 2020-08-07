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

export default function Home() {
  return (
    <Layout>
      <GlobalWrapper firstChild noPadding>
        <br />
        <Heading type="h2">Welcome!</Heading>
        <br />
        <Heading type="h4">
          I'm{" "}
          <i>
            <b>Doron Tadmor</b>
          </i>
          .
          <br />I have expertise in global strategy, international development,
          and sustainability.
        </Heading>
        <br /> <br />
        <Heading type="h6">
          <i>
            Take a look at some of my work and learn more about how I have made
            an impact.
          </i>
        </Heading>
        <br />
        <br />
        <div className={styles.buttonSection}>
          <ButtonPrimary color="blue">VIEW MY RESUMÉ</ButtonPrimary>
          <ButtonPrimary color="black">VIEW MY PROJECTS</ButtonPrimary>
        </div>
      </GlobalWrapper>
    </Layout>
  );
}
