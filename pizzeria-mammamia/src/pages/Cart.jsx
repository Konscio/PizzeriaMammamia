import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import PriceFormatter from "../Utils/PriceFormatter";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total, clearCart } = useCart();
  const { token } = useUser();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    if (!token) {
      navigate("/login");
      return;
    }

    setIsProcessing(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart: cart.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            count: item.count,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al procesar el pago");
      }

      clearCart();
      setSuccessMessage("¡Compra realizada con éxito! Gracias por tu pedido.");
    } catch (err) {
      console.error("Error en el checkout:", err);
      setError(err.message || "Ocurrió un error al procesar tu pedido");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <h3 className="cart-title mt-4 mb-3">Detalles del pedido</h3>

      {successMessage && (
        <Alert
          variant="success"
          onClose={() => setSuccessMessage(null)}
          dismissible
        >
          {successMessage}
        </Alert>
      )}

      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      )}

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
                disabled={isProcessing}
              >
                -
              </Button>
              <p className="pizza-count">{item.count}</p>
              <Button
                variant="outline-primary"
                onClick={() => increaseCount(item.id)}
                disabled={isProcessing}
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
              disabled={isProcessing}
            >
              <i className="bi bi-trash-fill me-2"></i>
              Vaciar Carrito
            </Button>
            <Button
              className="pay-button btn-lg"
              variant="dark"
              onClick={handlePayment}
              disabled={isProcessing || cart.length === 0}
            >
              {isProcessing ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Procesando...
                </>
              ) : (
                <>
                  <i className="bi bi-credit-card-fill me-2"></i>
                  {token
                    ? `Pagar (${total.toLocaleString()})`
                    : "Inicia sesión para pagar"}
                </>
              )}
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
