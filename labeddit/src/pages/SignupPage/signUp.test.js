import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import SignUp from './SignupPage'
import { act } from 'react-dom/test-utils'


jest.mock('axios')
jest.mock('react-router-dom', () => ({
   useNavigate: jest.fn(),
 }));
jest.spyOn(window, 'alert').mockImplementation(() => {})
describe("SignUpPage ", () => {
    test("Testa se a API de SignUp é chamada com os dados corretos", async () => {
        const {getByPlaceholderText, getByText } = render(<SignUp/>)
        const userNameInput = getByPlaceholderText("Nome de usuário")
        const emailInput = getByPlaceholderText("Email")
        const passwordInput = getByPlaceholderText("Senha")
        const button = getByText(/Cadastrar/)

        const user = {
            username: "team",
            email: "team@gmail.com",
            password: "1234@team" 
        }

        axios.post.mockResolvedValue({
            data: {
                token: 'mnbzxcv'
            }
        })

       await act(() => {
            userEvent.type(userNameInput, user.username)
            userEvent.type(emailInput, user.email)
            userEvent.type(passwordInput, user.password)
            userEvent.click(button)
          });
          
         
        expect(axios.post).toHaveBeenCalledTimes(1)
        expect(axios.post).toHaveBeenCalledWith("https://labeddit.herokuapp.com/users/signup", user)
        expect(window.alert).toBeCalledWith('Cadastro realizado com sucesso!');
    })

})