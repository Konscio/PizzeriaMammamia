import React, { useState } from "react";

const Formulario = () => {
  const [password, setPassword] = useState("");
  const [passwordmatch, setPasswordMatch] = useState("");
  const [email, setEmail] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    if (password === "" || passwordmatch === "" || email === "") {
      alert("¡Todos los campos son obligatorios!");
      return;
    }
    if (password !== passwordmatch) {
      alert("¡Ambas constraseñas deben coincidir!");
      return;
    }
    if (password.length < 6) {
      alert("¡La contraseña debe tener al menos 6 digitos!");
      return;
    } else {
      alert("¡Te registraste exitosamente!");
    }
    setEmail("");
    setPassword("");
    setPasswordMatch("");
  };

  return (
    <div class="formulario mt-4" id="register">
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
          />
        </div>
        <button type="submit" className="tbtn btn-dark">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
