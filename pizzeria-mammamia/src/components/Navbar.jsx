import Boton from "./Boton";
import PriceFormatter from "../Utils/PriceFormatter";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function NavBar() {
  const { total } = useCart();
  const token = true;

  if (token) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid d-flex justify-content-between">
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="text-decoration-none">
                  <p className="navbar-brand mb-0 text-decoration-none">
                    ¡Pizzería Mamma Mia!
                  </p>
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"}>
                  <Boton
                    textButton="Home"
                    colorButton="btn btn-outline-light"
                  />
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link to={"/profile"}>
                  <Boton
                    textButton="Profile"
                    colorButton="btn btn-outline-light"
                  />
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link to={"/login"}>
                  <Boton
                    textButton="Logout"
                    colorButton="btn btn-outline-light"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/cart"} className="text-decoration-none">
                <span className="navbar-text text-light">
                  Total <PriceFormatter precio={total} />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid d-flex justify-content-between">
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="navbar-brand mb-0">¡Pizzería Mamma Mia!</p>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Boton textButton="Home" colorButton="btn btn-outline-light" />
              </li>
              <li className="nav-item ms-2">
                <Boton textButton="Login" colorButton="btn btn-outline-light" />
              </li>
              <li className="nav-item ms-2">
                <Boton
                  textButton="Register"
                  colorButton="btn btn-outline-light"
                />
              </li>
            </ul>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="navbar-text text-light">
                Total $ {total.toLocaleString()}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
