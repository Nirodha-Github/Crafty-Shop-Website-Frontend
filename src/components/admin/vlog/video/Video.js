import React from "react";
import ViewVideo from "./ViewVideo";
import AddVideo from "./AddVideo";

function Video() {
    return ( 
        <div className="container-fluid px-4">
            <h4 className="fw-bold">Handcraft Videos<hr /></h4>
            <AddVideo />
            <ViewVideo />
        </div>
     );
}

export default Video;