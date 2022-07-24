import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';
import { goToFeedPage, goToSignupPage } from '../../routes/coordinator';
import useForm from '../../hooks/useForm';
import { BASE_URL } from '../../constants/urls';
import logo from '../../assets/logo.png';

function LoginPage() {
  // useUnprotectedPage();
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ email: '', password: '' });

  //Function to save States on tag <form>
  const onSubmitForm = event => {
    event.preventDefault();
  };

  const login = () => {
    axios
      .post(`${BASE_URL}/users/login`, form)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        clear();
        goToFeedPage(navigate);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <img src={logo} />
      <p>O projeto de rede social da Labenu</p>
      <form onSubmit={onSubmitForm}>
        <input
          name={'email'}
          value={form.email}
          onChange={onChange}
          label={'email'}
          type="email"
          required
        />
        <input
          name={'password'}
          value={form.password}
          onChange={onChange}
          label={'senha'}
          type="password"
          required
        />
        <button onClick={login}>Continuar</button>
      </form>
      <div></div>
      <button onClick={() => goToSignupPage(navigate)} type={'submit'}>
        Crie uma conta!
      </button>
    </div>
  );
}

export default LoginPage;
