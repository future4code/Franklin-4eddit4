import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import FeedPage from './FeedPage';
import { act } from 'react-dom/test-utils';

jest.mock('axios');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}));

describe('Feed page', () => {
  test('API com as postagens é chamada', async () => {
    const { getByPlaceholderText, getByText } = render(<FeedPage />);

    const postInput = getByPlaceholderText('Escreva seu post...');

    const postTest = {
      title: 'Post teste',
      body: 'Mock post teste'
    };

    const token = 'mnbzxcv';

    axios.get.mockResolvedValue({
      data: {
        postTest
      }
    });

    await act(() => {
      userEvent.type(emailInput, user.email);
      userEvent.type(passwordInput, user.password);

      userEvent.click(button);
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      'https://labeddit.herokuapp.com/posts'
    );
  });
});
