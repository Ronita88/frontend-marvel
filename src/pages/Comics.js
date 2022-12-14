// cette page affiche tous les comics

// import packages
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import "../css/characters&comics.css";
import Hero from "../components/Hero";

const Comics = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams("");
  console.log(id);

  const [page, setPage] = useState(0); //State pour les pages et permet aussi de tester la dernière page
  const [searchbar, setSearchbar] = useState(""); // State pour la recherche

  const comicsForEachpage = data.limit;
  const totalPages = Math.ceil(data.count / comicsForEachpage);
  const changePage = ({ selected }) => {
    setPage(selected);
  };

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
      <div className="container">
        <Hero />
      </div>

      <div className="container">
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
            <ReactPaginate
              className="allNumberPage"
              previousLabel={"previous"}
              nextLabel={"next"}
              pageCount={totalPages}
              onPageChange={changePage}
              containerClassName={"navigationButtons"}
              previousLinkClassName={"previousButton"}
              nextLinkClassName={"nextButton"}
              disabledClassName={"navigationDisabled"}
              activeClassName={"navigationActive"}
            />
          </div>
        </div>

        <div className="characters-img">
          {data.results.map((comic, index) => {
            return (
              <div className="container-grid">
                <div className="card">
                  <div className="container-img" key={index}>
                    <img
                      src={`${comic.thumbnail.path + "."}${
                        comic.thumbnail.extension
                      }`}
                      alt="comics"
                    />
                    <p>{comic.title}</p>
                    <p>{comic.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Comics;
