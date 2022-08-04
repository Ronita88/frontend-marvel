import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ComicId = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backend-marvel-rone.herokuapp.com/comic/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement du comic...</p>
  ) : (
    <div>
      <img
        src={`${data.thumbnail.path + "."}${data.thumbnail.extension}`}
        alt=""
      />
      <p>{data.description}</p>
    </div>
  );
};
export default ComicId;
