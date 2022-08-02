import { React, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
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
  PostWriteDiv,
  PostTitle
} from './styled';
import arrowUp from '../../assets/arrow_up.png';
import arrowDown from '../../assets/arrow_down.png';
import speechBubble from '../../assets/speech_bubble.png';
import { goToPostPage } from '../../routes/coordinator';
import { GlobalContext } from '../../context/global/GlobalState';
import useForm from '../../hooks/useForm';

function FeedPage() {
  useProtectedPage();
  const [posts, setPosts] = useState([]);
  const [textArea, setTextArea] = useState('');
  const [userPost, setUserPost] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [voteSum, setVoteSum] = useState('');

  const { setters } = useContext(GlobalContext);
  const { setPost } = setters;

  const handleTextArea = event => {
    setTextArea(event.target.value);
  };
  const handlePostTitle = event => {
    setPostTitle(event.target.value);
  };
  const [form, onChange, clear] = useForm({ title: '' });

  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  //get all posts from the api
  const getPosts = () => {
    axios
      .get(`${BASE_URL}/posts`, { headers: { Authorization: token } })
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.log(error));
  };
  useEffect(getPosts, []);

  //create a new post
  const createPost = () => {
    axios
      .post(
        `${BASE_URL}/posts`,
        { title: postTitle, body: textArea },
        { headers: { Authorization: token } }
      )
      .then(response => {
        alert('Post criado com sucesso');
        setPostTitle('');
        setTextArea('');
        getPosts();
      })
      .catch(error => console.log('error'));
  };

  //Show comments on a post
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

  //Add a vote
  const addVote = id => {
    axios
      .post(
        `${BASE_URL}/posts/${id}/votes`,
        { direction: 1 },
        {
          headers: { Authorization: token, ContentType: 'application/json' }
        }
      )
      .then(response => {
        console.log(response.data);
        setVoteSum(voteSum + 1);
      })
      .catch(error => console.log(error));
  };
  useEffect(addVote, []);

  //Substract a vote
  const substractVote = id => {
    //   axios
    //     .post(
    //       `${BASE_URL}/posts/${id}/votes`,
    //       { direction: -1 },
    //       {
    //         headers: { Authorization: token, ContentType: 'application/json' }
    //       }
    //     )
    //     .then(response => {
    //       console.log(response.data);
    //     })
    //     .catch(error => console.log(error));
  };

  return (
    <Container>
      <Header rightButtonText={"Logout"}/>

      <PostWriteDiv>
        <PostTitle
          name={'title'}
          value={postTitle}
          onChange={handlePostTitle}
          label={'title'}
          placeholder={'Título do post'}
          type="text"
        />
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
            <Post key={post.id}>
              <SendBy>Enviado por: {post.username}</SendBy>
              <BodyPost> {post.body} </BodyPost>
              <CountersContainer>
                <CountersDiv>
                  <img
                    src={arrowUp}
                    alt="arrowUp"
                    onClick={() => addVote(post.id)}
                  />
                  <p> {post.voteSum} </p>
                  <img src={arrowDown} />
                </CountersDiv>
                <CountersDiv onClick={() => goToPostDetails(post)}>
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
