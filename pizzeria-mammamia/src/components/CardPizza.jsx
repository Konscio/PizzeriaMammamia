import React from "react";
import Boton from "./Boton";

function CardPizza({ img, name, ingredients, price }) {
  return (
    <div>
      <div className="card h-100" style={{ width: "90%" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-3">Pizza {name}</h5>
        </div>
        <ul className="list-group list-group-flush text-center">
          <li className="list-group-item">
            <h4>Ingredientes:</h4>
            <ul>
              {ingredients.map((index, ingredient) => (
                <li className="ingredients" key={ingredient}>
                  {index}
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
            <Boton colorButton="btn btn-dark" textButton="Añadir"></Boton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
