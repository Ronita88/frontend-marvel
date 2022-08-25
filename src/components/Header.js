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
            <h3>CHARACTERS</h3>
          </Link>

          <Link to={`/comics`}>
            <h3>COMICS</h3>
          </Link>

          <Link to={`/comics`}>
            <h3>FAVORIS</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
