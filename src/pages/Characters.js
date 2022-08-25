// cette page liste tous les characters
// je veux que quand je clique sur un character, me renvoie à la page du character

// import packages
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../css/characters&comics.css";
import Hero from "../components/Hero";

function Characters() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const { id } = useParams();

  // ici les states des éléments de gestion de recherche et de page
  const [page, setPage] = useState(0);
  const [searchbar, setSearchbar] = useState("");

  // je crée ma variable de gestion des characters par page en dehors du useEffect pour éviter le rafraichissement de la recherche inutilement
  const charactersForEachpage = data.limit; //limit de 100 par page

  // Math.ceil permet d'arrondir à l'entier supérieur
  // la variable totalPage divise la clé count / limit pour avoir le nombre de page

  //les variables totalPages et changePage sont déjà déterminés par le package du componsant react paginate
  const totalPages = Math.ceil(data.count / charactersForEachpage);
  const changePage = ({ selected }) => {
    setPage(selected);
  };

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
          <ReactPaginate
            className="allNumberPage"
            previousLabel={"previous"}
            nextLabel={"next"}
            pageCount={totalPages}
            onPageChange={changePage}
          />
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
                        alt="characters pic"
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
