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
  PostComment,
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
  const [postComment, setPostComment] = useState([]); // all comments posted
  const [comments, setComments] = useState([]); // new comment

  const token = localStorage.getItem('token');
  const params = useParams();

  const { state } = useContext(GlobalContext);
  const { post } = state;

  console.log(post);

  //Get all comments from a especific post
  const getPostComment = () => {
    axios
      .get(`${BASE_URL}/posts/${params.id}/comments`, {
        headers: { Authorization: token }
      })
      .then(response => {
        setPostComment(response.data);
      })
      .catch(error => console.log(error));
  };
  useEffect(getPostComment, []);

  // Create a new comment
  const createComment = () => {
    axios
      .post(`${BASE_URL}/posts/${params.id}/comments`, {
        headers: { Authorization: token }
      })
      .then(response => {
        setComments(response.data);
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
            <img src={arrowUp} alt="arrow up" />
            <p> {post.voteSum} </p>
            <img src={arrowDown} alt="arrow down" />
          </CountersDiv>
          <CountersDiv>
            <img src={speechBubble} alt="speech bubble" />
            <p> {post.commentCount} </p>
          </CountersDiv>
        </CountersContainer>
      </Post>
      <PostComment>
        <Comment rows="4" cols="50" placeholder="Adicionar comentário" />
        <BtnButton onClick={createComment}>Responder</BtnButton>
      </PostComment>
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
