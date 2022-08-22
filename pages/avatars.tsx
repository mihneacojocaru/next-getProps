import styles from "../styles/Avatars.module.scss";

export default function Avatars({ avatars }: any) {
  return (
    <div className={styles.container}>
      <h1>Avatars</h1>
      <ul>
        {avatars.map((avatar: any) => {
          return <li key={avatar._id}>{avatar.name}</li>;
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://last-airbender-api.herokuapp.com/api/v1/characters/avatar"
  );
  const avatars = await response.json();

  return {
    props: {
      avatars,
    },
  };
}
