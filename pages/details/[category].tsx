import React, { useEffect, useState } from "react";
import ApiData from "../../sevices/apiData";
import { useRouter } from "next/router";

import styles from "../../styles/Category.module.scss";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

interface Location {
  name: string;
  url: string;
}

const Category = ({ data, params }: any) => {
  const [character, setCharacter] = useState<Character | undefined>();

  useEffect(() => {
    let name = params.category.replace(/\-/g, " ");
    data.forEach((el: any) => {
      if (el.name.toLowerCase() === name) setCharacter(el);
    });
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h2>This is a custom page for: {character?.name}</h2>
      <p>{character?.name}</p>
      <img src={character?.image} alt={character?.name} />
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>
        <a className={styles.link} onClick={handleClick}>
          Go Back
        </a>
      </p>
    </div>
  );
};

export default Category;

export async function getStaticProps({ params }: any) {
  const apiData = new ApiData();
  const results = await apiData.getData();

  return {
    props: {
      data: results,
      params,
    },
  };
}

export async function getStaticPaths() {
  const apiData = new ApiData();
  const results = await apiData.getData();

  return {
    paths: results.map((obj: any) => {
      const name = obj.name.toLowerCase().replace(/ /g, "-");
      return {
        params: {
          category: name,
        },
      };
    }),
    fallback: false,
  };
}
