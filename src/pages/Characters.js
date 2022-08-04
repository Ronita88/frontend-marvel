// import packages
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/characters.css";

function Characters() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // je veux que quand je tape l'url que le contenu de l'url api du reacteur apparaisse
        const response = await axios.get(
          "https://backend-marvel-rone.herokuapp.com/characters"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Encours de chargement...</p>
  ) : (
    <div className="App">
      <div className="">
        <h1>MARVEL CHARACTERS</h1>
        <p>
          Get hooked on a hearty helping of heroes and villains from the humble
          House of Ideas
        </p>
      </div>

      <div className="characters-img">
        {data.results.map((character, index) => {
          // console.log(data.results.name);
          return (
            <Link to={`/character/${character._id}`} key={index}>
              {/* il faut concaténer les 2 clés
            ce code marche aussi mais pas dynamique avec le jpg en dur  
            // <img src={character.thumbnail.path + ".jpg"} />*/}
              <img
                src={`${character.thumbnail.path + "."}${
                  character.thumbnail.extension
                }`}
                alt=""
              />
              <p>{character.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Characters;
