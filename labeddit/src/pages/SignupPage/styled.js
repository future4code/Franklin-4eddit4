import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans';
  font-style: normal;
  margin: 0 auto;
  width: 100vw;
`;

export const Title = styled.h1`
  width: 90%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 43px;
  color: #373737;
  text-align: left;
  margin: 29px 0 0 0;
`;

export const Form = styled.form`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans';
  font-style: normal;
  width: 100%;
  margin-top: 194px;
`;

export const InputArea = styled.input`
  box-sizing: border-box;
  width: 90%;
  height: 60px;
  margin: 5px;
  padding: 17px;
  background: #ffffff;
  border: 1px solid #d5d8de;
  border-radius: 4px;
`;

export const Text = styled.p`
  width: 90%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
`;

export const Link = styled.a`
  font-family: 'Noto Sans', sans-serif;
  color: #4088cb;
  text-decoration: none;
`;
export const BtnSignUp = styled.button`
  width: 100%;
  height: 51px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  color: white;
  border-radius: 27px;
  border: none;
  margin-top: 41px;
  font-weight: 700;
`;
