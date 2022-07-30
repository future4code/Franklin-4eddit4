import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const PostWriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

export const PostTitle = styled.input`
  width: 100%;
  margin: 28px 0 12px 0;
  border-radius: 12px;
  padding: 15px;
  box-sizing: border-box;
  font-family: 'IBM Plex Sans', sans-serif;
  background: #ededed;
  border: none;
`;

export const TextArea = styled.textarea`
  background: #ededed;
  border: none;
  border-radius: 12px;
  padding: 15px;
  box-sizing: border-box;
  font-family: 'IBM Plex Sans', sans-serif;
  width: 100%;
`;

export const BtnButton = styled.button`
  height: 51px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  color: white;
  border-radius: 27px;
  border: none;
  margin: 20px 0;
  width: 100%;
`;

export const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  width: 100%;
  margin-bottom: 20px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

export const Post = styled.li`
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  background: #fbfbfb;
  list-style: none;
  margin: 0 0 10px 0;
  text-align: left;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  word-wrap: break-word;
`;

export const SendBy = styled.p`
  font-size: 12px;
  color: #6f6f6f;
  width: 100%;
`;

export const BodyPost = styled.p`
  font-size: 18px;
  width: 100%;
`;

export const CountersContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const CountersDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 3px 10px;
  height: 20px;
  font-size: 10px;
  font-weight: 700;
  margin-right: 10px;
  gap: 10px;
`;
