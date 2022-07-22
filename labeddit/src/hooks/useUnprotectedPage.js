import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { goToFeedPage } from '../routes/coordinator';

// function to let all users access page
const useUnprotectedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      goToFeedPage(navigate);
    }
  }, [navigate]);
};

export default useUnprotectedPage;