import hero from "../assets/img/hero.png";

import "../css/home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="header-container">
        <div className="homepage-img">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
