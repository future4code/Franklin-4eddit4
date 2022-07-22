export const goBack = (navigate) => {
  navigate(-1);
};

export const goToLoginPage= (navigate) => {
  navigate('/');
};

export const goToFeedPage = (navigate) => {
  navigate('/posts');
};

export const goToSignupPage = (navigate) => {
  navigate('/signup');
};

export const goToPostPage = (navigate, id) => {
  navigate(`/post/${id}`);
};
