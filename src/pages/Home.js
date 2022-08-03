import axios from "axios";
import { useEffect, useState } from "react";

// import packages

function Home() {
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
      {data.results.map((character, index) => {
        // console.log(data.results.name);
        return (
          <div>
            <p key={index}>{character.name}</p>
            <img src={character.thumbnail.path + ".jpg"} />
          </div>
        );
      })}
      <h1>hello sweetie</h1>
    </div>
  );
}

export default Home;
