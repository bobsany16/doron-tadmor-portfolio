import NavBar from "../components/navigation/navBar";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/navigation/footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doron Tadmor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
