import { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/Characters.module.scss";
const Character: NextPage = ({ character }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={character.photoUrl} />
      </div>
      <h2>{character.name}</h2>
      <p>Affiliation: {character.affiliation}</p>
      <Link href="/">
        <a className={styles.link}>Back home</a>
      </Link>
    </div>
  );
};

export default Character;

export async function getStaticProps({ params }: any) {
  const results = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?name=${params.characterId.replace(
      /\-/g,
      "+"
    )}`
  );
  const character = await results.json();

  return {
    props: {
      character: character[0],
    },
  };
}

export async function getStaticPaths() {
  const result = await fetch(
    "https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500"
  );
  const characters = await result.json();

  return {
    paths: characters.map((character: any) => {
      const characterId = character.name.toLowerCase().replace(/ /g, "-");

      return {
        params: {
          characterId,
        },
      };
    }),
    fallback: false,
  };
}
