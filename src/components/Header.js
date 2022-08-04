import { Link } from "react-router-dom";

import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to={`/`}>
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-category">
        <Link to={`/characters`}>
          <a>CHARACTERS</a>
        </Link>

        <Link to={`/comics`}>
          <a>COMICS</a>
        </Link>
      </div>

      <h1> WELCOME TO MARVEL TEMPLE</h1>
    </div>
  );
};

export default Header;
