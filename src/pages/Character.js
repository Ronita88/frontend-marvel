// cette page doit afficher la liste des comics du personnage cliqué
// je dois utiliser cette => Route : /comics/:characterId

import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../css/character.css";

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
    <div className="container">
      <div className="character-container">
        <Link to="/characters" className="character-overview">
          <img
            src={`${data.thumbnail.path + "."}${data.thumbnail.extension}`}
            alt=""
          />
        </Link>
        <div className="character-text">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </div>
      </div>

      <div className="character-img">
        {data.comics.map((comic, index) => {
          return (
            <div className="comics-card">
              <div className="container-comics-img">
                <img
                  src={`${comic.thumbnail.path + "."}${
                    comic.thumbnail.extension
                  }`}
                  alt=""
                />
                <div className="comics-text" key={index}>
                  <h2>{comic.title}</h2>
                  <p>{comic.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
