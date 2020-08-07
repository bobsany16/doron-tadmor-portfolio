import Link from "next/link";
import styles from "../styles/Home.module.css";
import Heading from "../components/typography/heading";
import GlobalWrapper from "../components/layout/globalWrapper";
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <GlobalWrapper>
        <Heading>MORE</Heading>
      </GlobalWrapper>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>ABOUT ME</h1> */}

        <Heading>ABOUT ME</Heading>

        <h3>
          <Link href="/">
            <a>Back home</a>
          </Link>
        </h3>
      </main>
    </Layout>
  );
};

export default Home;
