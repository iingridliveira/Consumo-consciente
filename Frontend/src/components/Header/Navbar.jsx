/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ logo, title, Products, Home }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary"
      style={{ minHeight: "80px" }} // Aumenta a altura da barra
    >
      <div className="container">
        {/* Logo e título */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center text-white"
        >
          <img
            src={logo}
            alt="Descrição da imagem"
            className="me-5 w-100"
            style={{ height: "50px", fontSize:"500px" }} // Aumenta o tamanho do logo para corresponder à altura
          />
          <h1 className="m-0">{title}</h1>
        </Link>

        {/* Botão para dispositivos móveis */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links e barra de pesquisa */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link to="/Home" className="nav-link text-white">
                {Home}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                {Products}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
