import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import Header from "../../components/Header"

function SignUpPage() {
    return(
        <div>
            <Header/>
            <h1>Ola, boas vindas ao LabEddit ;)</h1>
            <form>
                <input type='text' placeholder='Nome de usuário' required/>
                <input type='email' placeholder='E-mail' required/>
                <input type='password' placeholder='Senha' required/>
                <p>
                    Ao continuar, você concorda com o nosso <a href="£££">Contrato de usuário</a> e nossa <a href="###">Política de Privacidade</a>
                </p>
                <input type='checkbox'/> Eu concordo em receber emails sobre coisas legais no LabEddit.

                <button>Cadastrar</button>
            </form>
        </div>
    )
}

export default SignUpPage;