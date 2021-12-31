import React from "react";
import ViewUser from "./user/ViewUser";

function Users() {
    return ( 
        <div className="container-fluid px-4">
            <h4 className="fw-bold">Users<hr /></h4>
            <ViewUser />
        </div>
     );
}

export default Users;