import React, { useContext,  useState } from "react";
import { Post, SendBy, BodyPost, CountersContainer, CountersDiv, PostContainer } from "./styled";
import arrowUp from '../../assets/arrow_up.png';
import arrowDown from '../../assets/arrow_down.png';
import speechBubble from '../../assets/speech_bubble.png';
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { GlobalContext } from "../../context/global/GlobalState";
import { goToPostPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
    const token = localStorage.getItem('token');
    const [voteSum, setVoteSum] = useState(Number(post.voteSum));
    const [lastDirection, setLastDirection] = useState(0);
    const { setters } = useContext(GlobalContext);
    const { setPost } = setters;
    const navigate = useNavigate();

    const vote = (id, direction) => {
        if (lastDirection !== direction) {
            setLastDirection(direction);
            axios
                .post(
                    `${BASE_URL}/posts/${id}/votes`,
                    { direction: direction },
                    {
                        headers: {
                            Authorization: token,
                            ContentType: 'application/json'
                        }
                    }
                )
                .then(response => {
                    console.log(response.data);
                    if (voteSum > -1 && voteSum < 1) {
                        setVoteSum(direction);
                    } else {
                        setVoteSum(voteSum + direction);
                    }
                })
                .catch(error => console.log(error));
        }
    };

    const goToPostDetails = post => {
        setPost({
            username: post.username,
            id: post.id,
            body: post.body,
            voteSum: voteSum,
            commentCount: post.commentCount
        });
        goToPostPage(navigate, post.id);
    };

    return (
        <PostContainer>
            <Post key={post.id}>
                <SendBy>Enviado por: {post.username}</SendBy>
                <BodyPost> {post.body} </BodyPost>
                <CountersContainer>
                    <CountersDiv>
                        <img
                            src={arrowUp}
                            alt="arrowUp"
                            onClick={() => vote(post.id, 1)}
                        />
                        <p> {voteSum} </p>
                        <img
                            src={arrowDown}
                            alt={"Arrow Down"}
                            onClick={() => vote(post.id, -1)} />
                    </CountersDiv>
                    <CountersDiv onClick={() => goToPostDetails(post)}>
                        <img src={speechBubble} alt={"Arrow Down"} />
                        <p> {post.commentCount} </p>
                    </CountersDiv>
                </CountersContainer>
            </Post>
        </PostContainer>
    );
};

export default PostCard;
