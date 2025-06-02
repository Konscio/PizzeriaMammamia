import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Register = () => {
  const [password, setPassword] = useState("");
  const [passwordmatch, setPasswordMatch] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password === "" || passwordmatch === "" || email === "") {
      setError("¡Todos los campos son obligatorios!");
      return;
    }
    if (password !== passwordmatch) {
      setError("¡Ambas contraseñas deben coincidir!");
      return;
    }
    if (password.length < 6) {
      setError("¡La contraseña debe tener al menos 6 digitos!");
      return;
    }

    setIsLoading(true);
    try {
      await register(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message || "Error al registrar usuario");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="formulario mt-4" id="register">
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
        <div className="form-group">
          <label>Confirmar contraseña</label>
          <input
            type="password"
            name="passwordmatch"
            className="form-control"
            onChange={(e) => setPasswordMatch(e.target.value)}
            value={passwordmatch}
            placeholder="Confirma tu contraseña"
            required
            minLength="6"
          />
        </div>
        <button type="submit" className="btn btn-dark" disabled={isLoading}>
          {isLoading ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </div>
  );
};

export default Register;
