import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const TextArea = styled.textarea`
  width: 90%;
  margin-top: 50px;
  background: #ededed;
  border: none;
  color: red;
  border-radius: 12px;
`;

export const BtnButton = styled.button`
  width: 90%;
  height: 51px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  color: white;
  border-radius: 27px;
  border: none;
`;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  margin: 18px 0;
`;

export const PostContainer = styled.ul`
  width: 100%;
`;

export const Post = styled.li`
  width: 90%;
  border-radius: 12px;
  border: 1px #e0e0e0;
  background: #fbfbfb;
  list-style: none;
  margin: 0;
`;
