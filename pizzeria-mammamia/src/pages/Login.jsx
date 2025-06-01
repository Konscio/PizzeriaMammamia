import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const validarDatos = (e) => {
    e.preventDefault();

    if (password === "" || email === "") {
      alert("¡Todos los campos son obligatorios!");
      return;
    }
    if (password.length < 6) {
      alert("¡La contraseña debe tener al menos 6 digitos!");
      return;
    }

    // Si la validación es exitosa:
    login();
    alert("¡Bienvenido de vuelta!");
    navigate("/");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="formulario mt-4" id="login">
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Ingresa tu email"
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
