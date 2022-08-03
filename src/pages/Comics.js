import axios from "axios";
import { useEffect, useState } from "react";

// import packages

function Comics() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend-marvel-rone.herokuapp.com/comics"
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
    <div>
      {data.results.map((comic, index) => {
        return (
          <div key={index}>
            <p k>{comic.title}</p>
            <img
              src={`${comic.thumbnail.path + "."}${comic.thumbnail.extension}`}
              alt=""
            />
            <p>{comic.description}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Comics;
