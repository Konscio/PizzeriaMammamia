import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PriceFormatter from "../Utils/PriceFormatter";
import Boton from "../components/Boton";

function Pizza() {
  const { id } = useParams();
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchPizzas() {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      setError(error.message);
      console.error("Error obteniendo pizzas: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPizzas();
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border mt-5" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  const selectedPizza = pizzas.find((pizza) => pizza.id === id);

  return (
    <div className="d-flex justify-content-center">
      {selectedPizza ? (
        <div className="card h-100 mb-5 mt-3" style={{ width: "50%" }}>
          <img
            src={selectedPizza.img}
            className="card-img-top"
            alt={`Pizza ${selectedPizza.name}`}
          />
          <div className="card-body">
            <h5
              className="card-title fs-2"
              style={{ textTransform: "capitalize" }}
            >
              Pizza {selectedPizza.name}
            </h5>
          </div>
          <div className="card-body">
            <h5 className="card-title fs-3">Descripción:</h5>
            <p>{selectedPizza.desc}</p>
          </div>
          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item">
              <h4>Ingredientes:</h4>
              <ul>
                {selectedPizza.ingredients?.map((ingredient, index) => (
                  <li
                    className="ingredients"
                    key={index}
                    style={{ textTransform: "capitalize" }}
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </li>
            <li className="list-group-item fs-4">
              Precio: {<PriceFormatter precio={selectedPizza.price} />}
            </li>
          </ul>
          <div className="card-body text-center">
            <a href="#" className="card-link">
              <Boton colorButton="btn btn-light" textButton="Ver más" />
            </a>
            <a href="#" className="card-link">
              <Boton colorButton="btn btn-dark" textButton="Añadir" />
            </a>
          </div>
        </div>
      ) : (
        <p className="text-center mt-4">No se encontró la pizza con ID: {id}</p>
      )}
    </div>
  );
}

export default Pizza;
