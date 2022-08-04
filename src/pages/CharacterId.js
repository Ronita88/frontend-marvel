import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CharacterId = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://backend-marvel-rone.herokuapp.com/character/${id}`
        );
        console.log("Hello", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement du character...</p>
  ) : (
    <div>
      <p>{data.description}</p>
    </div>
  );
};

export default CharacterId;
