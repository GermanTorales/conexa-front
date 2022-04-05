import React from "react";

import "./Login.styles.css";

const LoginView = ({ handleChange, handleSubmit }) => {
  return (
    <div className="container">
      <div className="form__container">
        <form>
          <div className="form__input">
            <label for="email">Correo electronico</label>
            <input
              id="email"
              type="email"
              placeholder="Ingrese su correo electronico"
              onChange={handleChange}
            />
          </div>
          <div className="form__input">
            <label for="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Ingrese su contraseña"
              onChange={handleChange}
            />
          </div>
          <div className="form__button">
            <button type="button" onClick={handleSubmit}>
              Iniciar sesion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
