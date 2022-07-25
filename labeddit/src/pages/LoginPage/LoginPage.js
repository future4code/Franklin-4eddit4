import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';
import { goToFeedPage, goToSignupPage } from '../../routes/coordinator';
import useForm from '../../hooks/useForm';
import { BASE_URL } from '../../constants/urls';
import logo from '../../assets/logo.png';
import { Title, Logo, Form, InputArea, BtnButton, Divider, BtnSignUp, ContaineLogin} from './styled';


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
    <ContaineLogin>
      <Logo src={logo} />
      <Title>LabEddit</Title>
      <p>O projeto de rede social da Labenu</p>
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
