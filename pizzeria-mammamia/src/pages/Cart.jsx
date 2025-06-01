import React from "react";
import Button from "react-bootstrap/Button";
import PriceFormatter from "../Utils/PriceFormatter";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total, clearCart } = useCart();
  const { token } = useUser();
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!token) {
      navigate("/login");
      return;
    }

    alert("Procesando pago...");
  };

  return (
    <>
      <h3 className="cart-title mt-4 mb-3">Detalles del pedido</h3>
      {cart.length === 0 ? (
        <p className="empty-cart">El carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="shopping-cart" key={item.id}>
              <img className="img-pizza" src={item.img} alt="Pizza" />
              <h5
                className="name-pizza"
                style={{ textTransform: "capitalize" }}
              >
                {item.name}
              </h5>
              <p className="price-pizza">
                <PriceFormatter precio={item.price} />
              </p>
              <Button
                variant="outline-danger"
                onClick={() => decreaseCount(item.id)}
              >
                -
              </Button>
              <p className="pizza-count">{item.count}</p>
              <Button
                variant="outline-primary"
                onClick={() => increaseCount(item.id)}
              >
                +
              </Button>
            </div>
          ))}
          <div className="cart-actions mt-4 mb-5">
            <Button
              variant="danger"
              onClick={clearCart}
              className="me-3 btn-lg"
            >
              <i className="bi bi-trash-fill me-2"></i>
              Vaciar Carrito
            </Button>
            <Button
              className="pay-button btn-lg"
              variant="dark"
              onClick={handlePayment}
            >
              <i className="bi bi-credit-card-fill me-2"></i>
              {token ? `Pagar` : "Inicia sesión para pagar"}
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
