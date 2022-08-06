// cette page doit afficher la liste des comics du personnage cliqué
// je dois utiliser cette => Route : /comics/:characterId

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Character = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();
  console.log(characterId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backend-marvel-rone.herokuapp.com/comics/${characterId}`
        );
        console.log("Hello", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p>En cours de chargement du character...</p>
  ) : (
    <div>
      <img src={data.thumbnail.path + "." + data.thumbnail.extension} alt="" />

      {data.comics.map((comic, index) => {
        return (
          <div key={index}>
            <img
              src={`${comic.thumbnail.path + "."}${comic.thumbnail.extension}`}
              alt=""
            />
            <p>{comic.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Character;
