import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { goToLoginPage } from '../routes/coordinator';
import { LogoDiv, Logo, NavBar, BtnLogin } from './styledHeader';

function Header() {
  const navigate = useNavigate();
  return (
    <NavBar>
      <LogoDiv>
        <Logo src={logo} onClick={() => goToLoginPage(navigate)} />
      </LogoDiv>
      <BtnLogin src={logo} onClick={() => goToLoginPage(navigate)}>
        Entrar
      </BtnLogin>
    </NavBar>
  );
}

export default Header;
