import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header';
import { BASE_URL } from '../../constants/urls';
import {
  Container,
  PostComment,
  Comment,
  BtnButton,
  Divider,
  CommentsContainer,
  CloseBtn
} from './styled';
import closeButton from '../../assets/close_button.png';
import { GlobalContext } from '../../context/global/GlobalState';
import { goBack } from '../../routes/coordinator';
import PostCard from '../../components/PostCard/PostCard';
import CommentCard from '../../components/CommentCard/CommentCard';

function PostPage() {
  useProtectedPage();
  const [postComment, setPostComment] = useState([]); // all comments posted
  const [comments, setComments] = useState([]); // new comment

  const { state } = useContext(GlobalContext);
  const { post } = state;

  const token = localStorage.getItem('token');
  const params = useParams();
  const navigate = useNavigate();

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
    const body = { body: comments };
    axios
      .post(`${BASE_URL}/posts/${params.id}/comments`, body, {
        headers: { Authorization: token }
      })
      .then(response => {
        setComments([]);
        getPostComment();
      })
      .catch(error => console.log(error));
  };

  const handleChange = event => {
    setComments(event.target.value);
  };

  return (
    <Container>
      <Header rightButtonText={"Logout"} />
      <CloseBtn
        src={closeButton}
        alt="close button"
        onClick={() => goBack(navigate)}
      />
      <PostCard key={post.id} post={post} />
      <PostComment>
        <Comment
          rows="4"
          cols="50"
          placeholder="Adicionar comentário"
          value={comments}
          onChange={handleChange}
        />
        <BtnButton onClick={createComment}>Responder</BtnButton>
      </PostComment>
      <Divider />
      <CommentsContainer>
        {postComment.map(comment => {
          return (
            <CommentCard comment={comment}/>
          );
        })}
      </CommentsContainer>
    </Container>
  );
}

export default PostPage;
