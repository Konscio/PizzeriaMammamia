import Boton from "./Boton";

function NavBar() {
  const total = 25000;
  const token = true;

  if (token) {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid d-flex justify-content-between">
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <p class="navbar-brand mb-0">¡Pizzería Mamma Mia!</p>
              </li>
            </ul>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Boton textButton="Home" colorButton="btn btn-outline-light" />
              </li>
              <li class="nav-item ms-2">
                <Boton
                  textButton="Profile"
                  colorButton="btn btn-outline-light"
                />
              </li>
              <li class="nav-item ms-2">
                <Boton
                  textButton="Logout"
                  colorButton="btn btn-outline-light"
                />
              </li>
            </ul>
          </div>

          <ul class="navbar-nav">
            <li class="nav-item">
              <span class="navbar-text text-light">
                Total $ {total.toLocaleString()}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid d-flex justify-content-between">
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <p class="navbar-brand mb-0">¡Pizzería Mamma Mia!</p>
              </li>
            </ul>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Boton textButton="Home" colorButton="btn btn-outline-light" />
              </li>
              <li class="nav-item ms-2">
                <Boton textButton="Login" colorButton="btn btn-outline-light" />
              </li>
              <li class="nav-item ms-2">
                <Boton
                  textButton="Register"
                  colorButton="btn btn-outline-light"
                />
              </li>
            </ul>
          </div>

          <ul class="navbar-nav">
            <li class="nav-item">
              <span class="navbar-text text-light">
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
