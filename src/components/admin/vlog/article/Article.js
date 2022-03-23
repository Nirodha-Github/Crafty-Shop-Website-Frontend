import React from "react";
import ViewArticle from "./ViewArticle";
import AddArticle from "./AddArticle";

function Article() {
    return ( 
        <div className="container-fluid px-4">
            <h4 className="fw-bold">Handcraft Articles<hr /></h4>
            <AddArticle />
            <ViewArticle />
        </div>
     );
}

export default Article;