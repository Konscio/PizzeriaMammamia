import React from "react";
import Boton from "./Boton";
import { useCart } from "../context/CartContext";

function CardPizza({ id, img, name, ingredients, price }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      img,
      name,
      price,
      count: 1,
    });
  };

  return (
    <div>
      <div className="card h-100" style={{ width: "90%" }}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5
            className="card-title fs-3"
            style={{ textTransform: "capitalize" }}
          >
            Pizza {name}
          </h5>
        </div>
        <ul className="list-group list-group-flush text-center">
          <li className="list-group-item">
            <h4>Ingredientes:</h4>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li className="ingredients" key={index}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </li>
          <li className="list-group-item fs-4">Precio: ${price}</li>
        </ul>
        <div className="card-body text-center">
          <a href="#" className="card-link">
            <Boton colorButton="btn btn-light" textButton="Ver más"></Boton>
          </a>
          <a href="#" className="card-link">
            <Boton
              colorButton="btn btn-dark"
              textButton="Añadir"
              onClick={handleAddToCart}
            ></Boton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
