import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignupPage/SignupPage';
import PostPage from '../pages/PostPage/PostPage';
import FeedPage from '../pages/FeedPage/FeedPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts" element={<FeedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
