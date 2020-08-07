import NavBar from "../components/navigation/navBar";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doron Tadmor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
