import React from "react";
import Summary from "./dashboard/Summary";

function Dashboard() {
    return ( 
        <div className="container-fluid px-4">
            <h4 className="fw-bold">Dashboard<hr /></h4>
            <section><Summary /></section>
        </div>
     );
}

export default Dashboard;