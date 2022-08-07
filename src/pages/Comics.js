// cette page affiche tous les comics

// import packages
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import "../css/characters&comics.css";

const Comics = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  const [page, setPage] = useState(1); //State pour les pages et permet aussi de tester la dernière page
  const [searchbar, setSearchbar] = useState(""); // State pour la recherche

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backend-marvel-rone.herokuapp.com/comics?limit=100&page=${page}&title=${searchbar}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page, searchbar]); // je passe ici les paramètres à renvoyer, limit n'y est pas parce que je l'ai inscrit en dur dans l'axios.get

  return isLoading ? (
    <p>Encours de chargement...</p>
  ) : (
    <div className="App">
      <div className="filters">
        <div className="searchbar">
          <div>
            <p>
              {data.limit * page} / {data.count} comics
            </p>
          </div>

          <input
            type="text"
            placeholder="Search a comic"
            onChange={(event) => setSearchbar(event.target.value)}
          />
        </div>

        <div className="pagination">
          {/* une ternaire pour dire si la page est différente de 0 et qu'au clique elle passe à 0 alors le bouton disparait*/}
          {page !== 0 && (
            <button onClick={() => setPage(page - 1)}> précédent </button>
          )}
          <p>{page}</p>
          {page <= data.count / data.limit && (
            <button onClick={() => setPage(page + 1)}>suivant</button>
          )}
        </div>
      </div>

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
};
export default Comics;
