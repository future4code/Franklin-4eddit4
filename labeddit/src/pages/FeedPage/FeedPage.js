import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useUnprotectedPage';
import Header from '../../components/Header';
import { BASE_URL } from '../../constants/urls';

function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [textArea, setTextArea] = useState('');

  const handleTextArea = event => {
    setTextArea(event.target.value);
  };

  const token = localStorage.getItem('token');

  const getPosts = () => {
    axios
      .get(`${BASE_URL}/posts`, { headers: { Authorization: token } })
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.log(error));
  };
  useEffect(getPosts, []);

  const createPost = () => {
    axios
      .post(
        `${BASE_URL}/posts`,
        { title: 'Z maguinho do Piauí', body: textArea },
        { headers: { Authorization: token } }
      )
      .then(response => {
        console.log('Post criado com sucesso');
        setTextArea('');
      })
      .catch(error => console.log('error'));
  };

  return (
    <div>
      <Header />
      <textarea
        value={textArea}
        rows="4"
        cols="50"
        label="Escreva seu post..."
        onChange={handleTextArea}
      ></textarea>
      <button onClick={createPost}>Postar</button>
      <div></div>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.id}>
              <p>Enviado por: {post.title}</p>
              <p> {post.body} </p>
              <div>
                <div>
                  <img src="" />
                  <p> {post.voteSum} </p>
                  <img src="" />
                </div>
                <div>
                  <img src="" />
                  <p> {post.commentCount} </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FeedPage;
