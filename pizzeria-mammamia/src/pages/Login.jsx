import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password === "" || email === "") {
      setError("¡Todos los campos son obligatorios!");
      return;
    }
    if (password.length < 6) {
      setError("¡La contraseña debe tener al menos 6 digitos!");
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message || "Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="formulario mt-4" id="login">
      {error && (
        <Alert variant="danger" onClose={() => setError("")} dismissible>
          {error}
        </Alert>
      )}
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Ingresa tu email"
            required
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
            required
            minLength="6"
          />
        </div>
        <button type="submit" className="btn btn-dark" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
};

export default Login;
