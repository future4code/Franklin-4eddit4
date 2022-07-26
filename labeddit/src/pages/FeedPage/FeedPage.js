import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useUnprotectedPage';
import Header from '../../components/Header';
import { BASE_URL } from '../../constants/urls';
import {
  Container,
  TextArea,
  BtnButton,
  Divider,
  Post,
  PostContainer
} from './styled';

function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [textArea, setTextArea] = useState('');
  const [userPost, setUserPost] = useState('');

  const handleTextArea = event => {
    setTextArea(event.target.value);
  };
  const handleUserPost = event => {
    setUserPost(event.target.value);
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
        { title: userPost, body: textArea },
        { headers: { Authorization: token } }
      )
      .then(response => {
        alert('Post criado com sucesso');
        setUserPost('');
        setTextArea('');
        getPosts();
      })
      .catch(error => console.log('error'));
  };

  return (
    <Container>
      <Header />
      <TextArea
        value={textArea}
        rows="5"
        cols="50"
        placeholder="Escreva seu post..."
        onChange={handleTextArea}
      />
      <BtnButton onClick={createPost}>Postar</BtnButton>
      <Divider />
      <PostContainer>
        {posts.map(post => {
          return (
            <Post key={post.id}>
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
            </Post>
          );
        })}
      </PostContainer>
    </Container>
  );
}

export default FeedPage;
