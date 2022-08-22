import styles from "../../styles/Affiliations.module.scss";

export default function Affiliations({ characters, affiliationId }: any) {
  return (
    <div>
      <h1>Affiliation matching "{affiliationId}" </h1>
      <ul className={styles.grid}>
        {characters.map((character: any) => {
          return (
            <li key={character._id}>
              <div className={styles.container}>
                <div className={styles.imageContainer}>
                  <img src={character.photoUrl} />
                </div>
                <h2>{character.name}</h2>
                <p>Affiliation: {character.affiliation}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  const affiliationId = params.affiliationId.replace(/\-/g, "+");
  const response = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=${affiliationId}`
  );
  const characters = await response.json();

  return {
    props: {
      characters,
      affiliationId,
    },
  };
}
