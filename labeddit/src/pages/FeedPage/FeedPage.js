import { React, useEffect, useState } from 'react';
import axios from 'axios';
import useProtectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header';
import { BASE_URL } from '../../constants/urls';
import {
  Container,
  TextArea,
  BtnButton,
  Divider,
  PostWriteDiv,
  PostTitle
} from './styled';

import PostCard from '../../components/PostCard/PostCard';

function FeedPage() {
  useProtectedPage();
  const [posts, setPosts] = useState([]);
  const [textArea, setTextArea] = useState('');
  const [postTitle, setPostTitle] = useState('');

  const handleTextArea = event => {
    setTextArea(event.target.value);
  };
  const handlePostTitle = event => {
    setPostTitle(event.target.value);
  };

  const token = localStorage.getItem('token');

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

  return (
    <Container>
      <Header rightButtonText={"Logout"} />

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
      {posts.map(post => {
        return (
          <PostCard key={post.id} post={post} />
        );
      })}
    </Container>
  );
}

export default FeedPage;
