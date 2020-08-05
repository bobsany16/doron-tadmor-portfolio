import Head from "next/head";
import styles from "../styles/Home.module.css";
import Heading from "../components/typography/heading";
import Text from "../components/typography/text";
import SubHeading from "../components/typography/subheading";
import GlobalWrapper from "../components/layout/globalWrapper";
import HorizontalLine from "../components/layout/horizontalLine";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doron Tadmor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navContainer}>
        NavBar
      </div>

      <GlobalWrapper noPadding className={styles.mainBackground}>
      <GlobalWrapper firstChild >
        <Heading>Hello,</Heading>
        <SubHeading>A subheading</SubHeading>
        <HorizontalLine />
        <Text>What's Up</Text>
      </GlobalWrapper>

      </GlobalWrapper>

 
      

      {/* <HorizontalLine /> */}
      
      {/* <GlobalWrapper lastChild noPadding>
        <Heading>Hello,</Heading>
        <SubHeading>A subheading</SubHeading>
        <HorizontalLine />
        <Text>What's Up</Text>
      </GlobalWrapper> */}

     
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

        {/* <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h3>About Me &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
     
    </div>
  );
}
