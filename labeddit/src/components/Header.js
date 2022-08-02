import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { goToLoginPage } from '../routes/coordinator';
import { LogoDiv, Logo, NavBar, BtnLogin } from './styledHeader';

function Header({ rightButtonText }) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      goToLoginPage(navigate);
    } else {
      goToLoginPage(navigate);
    }
  };

  return (
    <NavBar>
      <LogoDiv>
        <Logo src={logo} onClick={() => goToLoginPage(navigate)} />
      </LogoDiv>
      <BtnLogin src={logo} onClick={rightButtonAction}>
        {rightButtonText}
      </BtnLogin>
    </NavBar>
  );
}

export default Header;
