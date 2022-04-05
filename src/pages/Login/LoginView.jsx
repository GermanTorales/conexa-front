import React from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import './Login.styles.css';

const LoginView = ({ handleChange, handleSubmit, showPassword, handleShowPassword }) => {
  return (
    <div className="container">
      <div className="form__container">
        <div className="login__title">
          <h1>Conexa challenge</h1>
        </div>
        <form>
          <div className="form__input">
            <label htmlFor="email">Correo electronico</label>
            <input id="email" type="email" placeholder="Ingrese su correo electronico" onChange={handleChange} />
          </div>
          <div className="form__input form__input__icons">
            <label htmlFor="password">Contraseña</label>
            {showPassword ? (
              <AiFillEyeInvisible className="password__icon" onClick={handleShowPassword} />
            ) : (
              <AiFillEye className="password__icon" onClick={handleShowPassword} />
            )}
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Ingrese su contraseña"
              onChange={handleChange}
              className="form__input__field"
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
