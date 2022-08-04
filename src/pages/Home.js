import { Link, useNavigate } from "react-router-dom";

import hero from "../assets/img/hero.png";

import "./home.css";

const Home = () => {
  return (
    <div className="homepage">
      <img src={hero} alt="" />
    </div>
  );
};

export default Home;
