import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Axios from "../../config/Axios";
import LoginView from "./LoginView";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const data = { email, password };

      const response = await Axios.post("/users/login", data);

      if (response.status < 400) {
        Swal.fire({
          title: "Bienvenido",
          text: "Inicio de sesion exitoso",
          icon: "success",
        });

        const { token } = response.data;

        localStorage.setItem("token", token);

        navigate("/home");
      }
    } catch (error) {
      Swal.fire({
        title: "Lo siento",
        text: "El correo electronico o la contraseña son incorrectos",
        icon: "error",
      });
    }
  };

  const handleChange = (event) => {
    const { value, id } = event.target;

    id === "email" ? setEmail(value) : setPassword(value);
  };

  return <LoginView handleChange={handleChange} handleSubmit={handleSubmit} />;
};

export default Login;
