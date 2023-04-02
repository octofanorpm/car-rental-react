import "./style.css";
import { Link } from "react-router-dom";
import logo from "../Footer/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md pt-4 stynav">
        <div className="container-fluid">
          <p>
            <Link to="/">
              <img src={logo} />
            </Link>
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">
                Our Services
              </a>
              <a className="nav-link" href="#">
                Why Us
              </a>
              <a className="nav-link" href="#">
                Testimonial
              </a>
              <a className="nav-link">FAQ</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
