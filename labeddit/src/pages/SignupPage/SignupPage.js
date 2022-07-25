import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import Header from "../../components/Header"
import { Title, Form, InputArea, Link, BtnSignUp} from "./styled";
import { goToFeedPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";

function SignUpPage() {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ username: '', email: '', password: '' });

    const onSubmitForm = event => {
        event.preventDefault();
      };

    const SignUp = () => {
        axios
          .post(`${BASE_URL}/users/signup`, form)
          .then(response => {
            localStorage.setItem('token', response.data.token);
            alert("Cadastro realizado com sucesso!")
            clear();
            goToFeedPage(navigate);
          })
          .catch(error => console.log(error));
      };

    return(
        <div>
            <Header/>
            <Title>Ola, boas vindas ao LabEddit ;)</Title>
            <Form onSubmit={onSubmitForm}>
                <InputArea type='text' name={'username'} value={form.username} onChange={onChange} placeholder='Nome de usuário' required/>
                <InputArea type='email' name={'email'} value={form.email} onChange={onChange} placeholder='E-mail' required/>
                <InputArea type='password' name={'password'} value={form.password} onChange={onChange} placeholder='Senha' required/>
                <label>
                    Ao continuar, você concorda com o nosso <Link href="£££">Contrato de usuário</Link> e nossa <Link href="###">Política de Privacidade</Link>
                </label>
                <p>
                <input type='checkbox'/><label>Eu concordo em receber emails sobre coisas legais no LabEddit.</label>
                </p>
                <BtnSignUp onClick={SignUp}>Cadastrar</BtnSignUp>
            </Form>
        </div>
    )
}

export default SignUpPage;