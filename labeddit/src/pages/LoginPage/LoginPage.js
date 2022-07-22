import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"


function LoginPage() {
    return(
        <div>
            <img src="£££" />
            <p>O projeto de rede social da Labenu</p>
            <form>
                <input type='text' placeholder='Nome' required />
                <input type='password' placeholder='Senha' required />
                <button>Continuar</button>
            </form>
            <div></div>
            <button>Crie uma conta!</button>
        </div>
    )

}

export default LoginPage;