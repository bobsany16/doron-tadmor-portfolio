import Link from "next/link";
import styles from "../styles/Home.module.css";
import Heading from "../components/typography/heading";
import GlobalWrapper from "../components/layout/globalWrapper";
import Layout from "../components/layout";
// import Icon from "../components/icons/icon";
import TopBlock from "../components/blocks/topBlock";
import ThreeBlock from "../components/blocks/threeBlock";

const Resume = () => {
  return (
    <Layout>
      <GlobalWrapper firstChild noPadding>
        <TopBlock twoItem titleLeft="Resumé" titleRight="Download CV" />
        <ThreeBlock
          titleLeft="Education"
          titleMiddle="Experience"
          titleRight="Skills"
          anchorLinkLeft="education"
          anchorLinkRight="skills"
          anchorLinkMiddle="experience"
        />
      </GlobalWrapper>

      <main className={styles.main} id="education">
        <h1 className={styles.title}>ABOUT ME</h1>

        <h3>
          <Link href="/">
            <a>Back home</a>
          </Link>
        </h3>
      </main>

    </Layout>
  );
};

export default Resume;
