import { Link } from "react-router-dom";

import logo from "../assets/img/logo.png";
import "../css/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to={`/`}>
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <h1>DISCOVERY</h1>
      <div className="nav-category">
        <Link to={`/characters`}>
          <a>CHARACTERS</a>
        </Link>

        <Link to={`/comics`}>
          <a>COMICS</a>
        </Link>

        <Link to={`/comics`}>
          <a>FAVORIS</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
