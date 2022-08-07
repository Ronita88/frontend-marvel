// cette page liste tous les characters
// je veux que quand je clique sur un character, me renvoie à la page du character

// import packages
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/characters&comics.css";
import Hero from "../components/Hero";

function Characters() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  const [page, setPage] = useState(0);
  const [searchbar, setSearchbar] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // je veux que quand je tape l'url que le contenu de l'url api du reacteur apparaisse
        const response = await axios.get(
          `https://backend-marvel-rone.herokuapp.com/characters?limit=100&page=${page}&name=${searchbar}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page, searchbar]);

  return isLoading ? (
    <p>Encours de chargement...</p>
  ) : (
    <div className="App">
      <div className="container">
        <Hero />
      </div>

      {/* barre de recherche par nom de character */}
      <div className="container">
        <div className="searchbar">
          <div>
            <p>
              {data.limit * page} / {data.count} characters
            </p>
          </div>

          <input
            type="text"
            placeholder="Search a character"
            onChange={(event) => setSearchbar(event.target.value)}
          />
        </div>

        {/* bloc pour gérer la pagination */}
        <div className="pagination">
          {/* une ternaire pour dire si la page est différente de 0 et qu'au clique elle passe à 0 alors le bouton disparait*/}
          {page !== 0 && (
            <button onClick={() => setPage(page - 1)}> PREV </button>
          )}
          <p>{page}</p>
          {page <= data.count / data.limit && (
            <button onClick={() => setPage(page + 1)}>NEXT</button>
          )}
        </div>
      </div>

      <div className="container">
        <div className="characters-img">
          {/* je veux mapper le contenu de l'url */}
          {data.results.map((character, index) => {
            // console.log(data.results.name);

            return (
              <div className="container-grid">
                <div className="card">
                  {/*  si veut faire apparaitre juste la photo, mettre ce qui suit dans le link to ${character._id} */}
                  <Link to={`/character/${character._id}`} key={index}>
                    {/* il faut concaténer les 2 clés
          ce code marche aussi mais pas dynamique avec le jpg en dur  
          // <img src={character.thumbnail.path + ".jpg"} />*/}
                    <div className="container-img">
                      <img
                        src={`${character.thumbnail.path + "."}${
                          character.thumbnail.extension
                        }`}
                        alt="characters picture"
                      />
                    </div>

                    <p>{character.name}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Characters;
