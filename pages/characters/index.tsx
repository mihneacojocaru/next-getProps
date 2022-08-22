import { NextPage } from "next";
import Link from "next/link";
import ApiData from "../../sevices/apiData";

import styles from "../../styles/Home.module.scss";

const AllCharacters: NextPage = ({ results }: any) => {
  return (
    <div className={styles.container}>
      <h2>Here are all characters</h2>
      <Link href="/">
        <a className={styles.link}>Back home</a>
      </Link>
      <ul className={styles.grid}>
        {results.map((elem: any) => {
          const link =
            "characters/" + elem.name.toLowerCase().replace(/ /g, "-");
          return (
            <Link key={elem._id} href={link}>
              <a>{elem.name}</a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default AllCharacters;

export async function getStaticProps() {
  const apiData = new ApiData();
  const results = await apiData.getDataAirbender();

  return {
    props: { results },
  };
}
