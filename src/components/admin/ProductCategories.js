import React from "react";
import AddCategory from "./category/AddCategory";
import ViewCategory from "./category/ViewCategory";

function ProductCategories() {

    return ( 
        <div className="container-fluid px-4">
            <h4 className="fw-bold">Product Categories<hr /></h4>
            <AddCategory />
            <ViewCategory />
        </div>
     );
}

export default ProductCategories;