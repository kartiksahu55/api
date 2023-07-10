import "./Nav.css"
import logo from "../../logo-design-blank-circle-blue-and-orange-png-2.png"
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <header>
      <div id="_logo">
        <img
          id="logo-image"
          src={logo}
          alt="Logo"
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link className="navbar_page activeNav" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar_page" to="/signup">
              SignUp
            </Link>
          </li>
          <li>
            <Link className="navbar_page" to="/login">
              LogIn
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
