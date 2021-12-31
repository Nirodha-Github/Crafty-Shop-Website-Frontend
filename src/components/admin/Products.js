import React from "react";
import AddProduct from "./product/AddProduct";
import ViewProduct from "./product/ViewProduct";

function Products() {
    return ( 
        <div className="container-fluid px-4">
            <h4 className="fw-bold">Products<hr /></h4>
            <AddProduct />
            <ViewProduct />
        </div>
     );
}

export default Products;