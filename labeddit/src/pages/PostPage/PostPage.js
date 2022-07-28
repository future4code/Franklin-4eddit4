import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useUnprotectedPage';
import Header from '../../components/Header';
import { BASE_URL } from '../../constants/urls';
import {
  Container,
  Post,
  SendBy,
  BodyPost,
  CountersDiv,
  CountersContainer,
  Comment,
  BtnButton,
  Divider,
  CommentsContainer
} from './styled';
import arrowUp from '../../assets/arrow_up.png';
import arrowDown from '../../assets/arrow_down.png';
import speechBubble from '../../assets/speech_bubble.png';
import { GlobalContext } from '../../context/global/GlobalState';

function PostPage() {
  const [postComment, setPostComment] = useState([]);
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem('token');
  const params = useParams();
  console.log(params);
  const { state } = useContext(GlobalContext);
  const { post } = state;

  console.log(post);

  const getPostComment = () => {
    axios
      .get(`${BASE_URL}/posts/${params.id}/comments`, {
        headers: { Authorization: token }
      })
      .then(response => {
        setPostComment(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  };
  useEffect(getPostComment, []);

  const createComment = () => {
    axios
      .post(`${BASE_URL}/posts/${params.id}/comments`, {
        headers: { Authorization: token }
      })
      .then(response => {
        setComments(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <Container>
      <Header />
      <Post key={post.id}>
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
      <Comment rows="4" cols="50" placeholder="Adicionar comentário" />
      <BtnButton onClick={createComment}>Responder</BtnButton>
      <Divider />
      <CommentsContainer>
        {postComment.map(comment => {
          console.log(comment);
          return (
            <Post>
              <SendBy>Enviado por: {comment.username}</SendBy>
              <BodyPost> {comment.body} </BodyPost>
              <CountersContainer>
                <CountersDiv>
                  <img src={arrowUp} />
                  <p> {comment.voteSum} </p>
                  <img src={arrowDown} />
                </CountersDiv>
              </CountersContainer>
            </Post>
          );
        })}
      </CommentsContainer>
    </Container>
  );
}

export default PostPage;
