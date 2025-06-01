import { useNavigate, Link } from "react-router-dom";
import notFoundImage from "../assets/img/404notfound.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="row align-items-center g-4">
        <div className="col-md-6 text-center">
          <img
            src={notFoundImage}
            alt="Error 404"
            className="img-fluid rounded"
            style={{ maxHeight: "500px", width: "auto" }}
          />
        </div>

        <div className="col-md-6 text-center text-md-start">
          <h2 className="display-5 mb-3">¡Página no encontrada!</h2>
          <p className="lead text-muted mb-4">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>

          <div className="d-flex gap-3 justify-content-center justify-content-md-start">
            <button
              className="btn btn-outline-secondary d-flex align-items-center gap-2"
              onClick={() => navigate(-1)}
            >
              <i className="bi bi-arrow-left"></i>Volver
            </button>

            <Link to={"/"}>
              <button className="btn btn-primary d-flex align-items-center gap-2">
                <i className="bi bi-house-door"></i>Ir al inicio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
