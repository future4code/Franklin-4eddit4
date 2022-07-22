import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useUnprotectedPage"
import Header from "../../components/Header";


function FeedPage() {
    return(
        <div>
            <Header/>
            <textarea rows="4" cols="50" label="Escreva seu post..."></textarea>
            <button>Postar</button>
            <div></div>
            <div>
                {/*     AREA DE POST PEGOS DA API     */}
            </div>
        </div>
    )

}

export default FeedPage;