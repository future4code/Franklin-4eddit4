import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useUnprotectedPage';
import Header from '../../components/Header';
import { BASE_URL } from '../../constants/urls';
import { Divider, InputPost, BtnButton, ContainerPost, ContainerBox, FooterPost, SmallBox, Logo } from './styled';
import up from "../../assets/up.png"
import down from "../../assets/down.png"
import coment from "../../assets/coment.png"

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
        getPosts()
      })
      .catch(error => console.log('error'));
  };

  return (
    <div>
      <Header />
      <ContainerPost>
      <input value={userPost} placeholder='autor' onChange={handleUserPost}/>
      <InputPost
        value={textArea}
        rows="4"
        cols="50"
        placeholder="Escreva seu post..."
        onChange={handleTextArea}
      ></InputPost>
      <BtnButton onClick={createPost}>Postar</BtnButton>
      <Divider></Divider>
      <div>
        {posts.map(post => {
          return (
            <ContainerBox key={post.id}>
              <p>Enviado por: {post.title}</p>
              <p> {post.body} </p>
              <FooterPost>
                <SmallBox>
                  <Logo src={up} />
                  <p> {post.voteSum} </p>
                  <Logo src={down} />
                </SmallBox>
                <SmallBox>
                  <Logo src={coment} />
                  <p> {post.commentCount} </p>
                </SmallBox>
              </FooterPost>
            </ContainerBox>
          );
        })}
      </div>
      </ContainerPost>
    </div>
  );
}

export default FeedPage;
