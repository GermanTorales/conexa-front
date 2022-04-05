import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../../config/Axios';
import LoginView from './LoginView';
import { ErrorLoginSwal, Spinner, SuccessLoginSwal } from '../../components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const data = { email, password };

      const response = await Axios.post('/users/login', data);

      if (response.status < 400) {
        const { token } = response.data;

        localStorage.setItem('token', token);

        SuccessLoginSwal();
        navigate('/');
      } else {
        ErrorLoginSwal();
      }
    } catch (error) {
      ErrorLoginSwal();
    }

    setLoading(false);
  };

  const handleChange = event => {
    const { value, id } = event.target;

    id === 'email' ? setEmail(value) : setPassword(value);
  };

  if (loading) return <Spinner />;

  return (
    <LoginView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      showPassword={showPassword}
      handleShowPassword={handleShowPassword}
    />
  );
};

export default Login;
