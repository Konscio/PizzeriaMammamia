import React, { useState } from "react";

const Formulario = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    if (password === "" || email === "") {
      alert("¡Todos los campos son obligatorios!");
      return;
    }
    if (password.length < 6) {
      alert("¡La contraseña debe tener al menos 6 digitos!");
      return;
    } else {
      alert("¡Bienvenido de vuelta!");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div class="formulario mt-4" id="login">
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
        <button type="submit" className="tbtn btn-dark">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
