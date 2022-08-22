import styles from "../styles/About.module.scss";
import Link from "next/link";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>This is the about page</h2>
      <Link href="/">
        <a className={styles.link}>Back home</a>
      </Link>
    </div>
  );
};

export default About;
