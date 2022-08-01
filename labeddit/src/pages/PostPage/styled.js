import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CloseBtn = styled.img`
  position: absolute;
  left: 0;
  margin: 13px 0 13px 34px;
`;

export const Post = styled.li`
  width: 90%;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  background: #fbfbfb;
  list-style: none;
  margin-top: 28px;
  text-align: left;
  padding: 10px;
  box-sizing: border-box;
  word-wrap: break-word;
`;

export const SendBy = styled.p`
  font-size: 12px;
  color: #6f6f6f;
`;

export const BodyPost = styled.p`
  font-size: 18px;
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

export const PostComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const Comment = styled.textarea`
  width: 90%;
  margin-top: 12px;
  background: #ededed;
  border: none;
  border-radius: 12px;
  padding: 15px;
  box-sizing: border-box;
  font-family: 'IBM Plex Sans', sans-serif;
`;

export const BtnButton = styled.button`
  width: 90%;
  height: 51px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  color: white;
  border-radius: 27px;
  border: none;
  margin: 12px 0;
`;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;
