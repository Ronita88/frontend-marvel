// cette page affiche tous les comics

import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../css/characters&comics.css";

// import packages

function Comics() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backend-marvel-rone.herokuapp.com/comics`
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
      <div className="characters-img">
        {data.results.map((comic, index) => {
          return (
            <div>
              <div>
                <div key={index}>
                  <img
                    src={`${comic.thumbnail.path + "."}${
                      comic.thumbnail.extension
                    }`}
                    alt=""
                  />
                  <p>{comic.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Comics;
