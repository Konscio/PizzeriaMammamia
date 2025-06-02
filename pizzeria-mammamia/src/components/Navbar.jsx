import Boton from "./Boton";
import PriceFormatter from "../Utils/PriceFormatter";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function NavBar() {
  const { total } = useCart();
  const { token, logout, userProfile } = useUser();
  const [logoutError, setLogoutError] = useState(null);

  const handleLogout = async () => {
    setLogoutError(null);
    try {
      await logout();
    } catch (error) {
      setLogoutError("Error al cerrar sesión. Intenta nuevamente.");
      console.error("Logout error:", error);
    }
  };

  if (token) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        {logoutError && (
          <Alert
            variant="danger"
            dismissible
            onClose={() => setLogoutError(null)}
          >
            {logoutError}
          </Alert>
        )}

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
                    textButton={"Profile"}
                    colorButton="btn btn-outline-light"
                  />
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Boton
                  textButton="Logout"
                  colorButton="btn btn-outline-light"
                  onClick={handleLogout}
                />
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
                <Link to={"/"}>
                  <Boton
                    textButton="Home"
                    colorButton="btn btn-outline-light"
                  />
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link to={"/login"}>
                  <Boton
                    textButton="Login"
                    colorButton="btn btn-outline-light"
                  />
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link to={"/register"}>
                  <Boton
                    textButton="Register"
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
  }
}

export default NavBar;
