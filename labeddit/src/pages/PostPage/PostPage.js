import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useUnprotectedPage"
import Header from "../../components/Header"

function PostPage() {
    return(
        <div>
            <Header/>
            <div>
                {/*     AREA DO POST PEGO DA API     */}
            </div>
            <textarea rows="4" cols="50" label="Adicionar comentário"></textarea>
            <button>Responder</button>
            <div></div>
            <div>
                {/*     AREA DE COMENTARIOS PEGOS DA API     */}
            </div>

        </div>
    )

}

export default PostPage;