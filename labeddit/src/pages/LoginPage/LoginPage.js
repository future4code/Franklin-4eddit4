import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';
import {
  goToFeedPage,
  goToLoginPage,
  goToSignupPage
} from '../../routes/coordinator';
import useForm from '../../hooks/useForm';
import { BASE_URL } from '../../constants/urls';
import logo from '../../assets/logo.png';
import {
  Title,
  Logo,
  Form,
  InputArea,
  BtnButton,
  Divider,
  BtnSignUp,
  ContaineLogin,
  Text
} from './styled';

function LoginPage() {
  // useUnprotectedPage();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [form, onChange] = useForm({ email: '', password: '' });

  //Function to save States on tag <form>
  const onSubmitForm = event => {
    event.preventDefault();
  };

  const login = ({ setRightButtonText }) => {
    axios
      .post(`${BASE_URL}/users/login`, form)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        goToFeedPage(navigate);
        setRightButtonText('Logout');
      })
      .catch(error => console.log(error));
  };

  return (
    <ContaineLogin>
      <Logo src={logo} />

      <Title>LabEddit</Title>
      <Text>O projeto de rede social da Labenu</Text>
      <Form onSubmit={onSubmitForm}>
        <InputArea
          name={'email'}
          value={form.email}
          onChange={onChange}
          label={'email'}
          placeholder={'Email'}
          type="email"
          required
        />
        <InputArea
          name={'password'}
          value={form.password}
          onChange={onChange}
          placeholder={'Senha'}
          label={'senha'}
          type="password"
          required
        />
        <BtnButton onClick={login}>Continuar</BtnButton>
      </Form>
      <Divider></Divider>
      <BtnSignUp onClick={() => goToSignupPage(navigate)} type={'submit'}>
        Crie uma conta!
      </BtnSignUp>
    </ContaineLogin>
  );
}

export default LoginPage;
