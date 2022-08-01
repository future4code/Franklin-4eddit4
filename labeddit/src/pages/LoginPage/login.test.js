import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import LoginPage from './LoginPage'
import { act } from 'react-dom/test-utils'

jest.mock('axios')
jest.mock('react-router-dom', () => ({
   useNavigate: jest.fn(),
 }));

describe("Login page ", () => {
    test("API de login é chamada com os dados corretos", async () => {
        const {getByPlaceholderText, getByText } = render(<LoginPage/>)

        const emailInput = getByPlaceholderText("Email")
        const passwordInput = getByPlaceholderText("Senha")
        const button = getByText(/Continuar/)

        const user = {
            email: "team@gmail.com",
            password: "1234@team" 
        }

        axios.post.mockResolvedValue({
            data: {
                token: 'mnbzxcv'
            }
        })

       await act(() => {
            userEvent.type(emailInput, user.email)
            userEvent.type(passwordInput, user.password)
    
            userEvent.click(button)
          });
         
        expect(axios.post).toHaveBeenCalledTimes(1)
        expect(axios.post).toHaveBeenCalledWith("https://labeddit.herokuapp.com/users/login", user)
     
    })
})