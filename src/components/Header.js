import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../css/header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="header-container">
        <div className="logo-container">
          <Link to={`/`}>
            <img className="logo" src={logo} alt="" />
          </Link>
          <div className="header-title">
            <h1> DISCOVERY</h1>
          </div>
        </div>

        <div className="nav-category">
          <Link to={`/characters`}>
            <h2>CHARACTERS</h2>
          </Link>

          <Link to={`/comics`}>
            <h2>COMICS</h2>
          </Link>

          <Link to={`/comics`}>
            <h2>FAVORIS</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
