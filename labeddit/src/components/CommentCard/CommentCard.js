import React, { useState } from "react";
import { BodyComment, Comment, CountersContainer, CountersDiv, SendBy } from "./styled";
import arrowUp from '../../assets/arrow_up.png';
import arrowDown from '../../assets/arrow_down.png';
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const CommentCard = ({ comment }) => {
    const [voteSum, setVoteSum] = useState(Number(comment.voteSum));
    const token = localStorage.getItem('token');
    const [lastDirection, setLastDirection] = useState(0);

    const vote = (id, direction) => {
        if (lastDirection !== direction) {
            setLastDirection(direction);
            axios
                .post(
                    `${BASE_URL}/comments/${id}/votes`,
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

    return (
        <Comment>
            <SendBy>Enviado por: {comment.username}</SendBy>
            <BodyComment> {comment.body} </BodyComment>
            <CountersContainer>
                <CountersDiv>
                    <img
                        src={arrowUp}
                        alt="arrowUp"
                        onClick={() => vote(comment.id, 1)}
                    />
                    <p> {voteSum} </p>
                    <img
                        src={arrowDown}
                        alt={"Arrow Down"}
                        onClick={() => vote(comment.id, -1)} />
                </CountersDiv>
            </CountersContainer>
        </Comment>
    );
};

export default CommentCard;
