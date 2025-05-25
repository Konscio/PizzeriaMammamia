import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { pizzaCart as initialCart } from "../Utils/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const increaseCount = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseCount = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <>
      <h3 className="cart-title mt-4 mb-3">Detalles del pedido</h3>
      {cart.length === 0 ? (
        <p className="empty-cart">El carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <div className="shopping-cart" key={item.id}>
            <img className="img-pizza" src={item.img} alt="Pizza" />
            <h5 className="name-pizza" style={{ textTransform: "capitalize" }}>
              {item.name}
            </h5>
            <p className="price-pizza">${item.price}</p>
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
        ))
      )}
      <h5 className="total mb-3">Total: ${total.toLocaleString()}</h5>
      <Button className="pay-button mb-5 btn-lg" variant="dark">
        Pagar
      </Button>
    </>
  );
};

export default Cart;
