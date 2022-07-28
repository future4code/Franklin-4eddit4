import { React, useContext, useEffect, useState } from 'react';
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
  PostContainer,
  SendBy,
  BodyPost,
  CountersDiv,
  CountersContainer,
  PostWriteDiv
} from './styled';
import arrowUp from '../../assets/arrow_up.png';
import arrowDown from '../../assets/arrow_down.png';
import speechBubble from '../../assets/speech_bubble.png';
import { goToPostPage } from '../../routes/coordinator';
import { GlobalContext } from '../../context/global/GlobalState';

function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [textArea, setTextArea] = useState('');
  const [userPost, setUserPost] = useState('');
  const { setters } = useContext(GlobalContext);
  const { setPost } = setters;

  const handleTextArea = event => {
    setTextArea(event.target.value);
  };
  const handleUserPost = event => {
    setUserPost(event.target.value);
  };

  const token = localStorage.getItem('token');

  const navigate = useNavigate();

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

  const goToPostDetails = post => {
    setPost({
      username: post.username,
      id: post.id,
      body: post.body,
      voteSum: post.voteSum,
      commentCount: post.commentCount
    });
    goToPostPage(navigate, post.id);
  };

  return (
    <Container>
      <Header />

      <PostWriteDiv>
        <TextArea
          value={textArea}
          rows="5"
          cols="50"
          placeholder="Escreva seu post..."
          onChange={handleTextArea}
        />
        <BtnButton onClick={createPost}>Postar</BtnButton>
        <Divider />
      </PostWriteDiv>
      <PostContainer>
        {posts.map(post => {
          return (
            <Post key={post.id} onClick={() => goToPostDetails(post)}>
              <SendBy>Enviado por: {post.username}</SendBy>
              <BodyPost> {post.body} </BodyPost>
              <CountersContainer>
                <CountersDiv>
                  <img src={arrowUp} />
                  <p> {post.voteSum} </p>
                  <img src={arrowDown} />
                </CountersDiv>
                <CountersDiv>
                  <img src={speechBubble} />
                  <p> {post.commentCount} </p>
                </CountersDiv>
              </CountersContainer>
            </Post>
          );
        })}
      </PostContainer>
    </Container>
  );
}

export default FeedPage;
