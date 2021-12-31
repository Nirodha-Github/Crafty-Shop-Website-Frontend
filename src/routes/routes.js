import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import ProductCategories from '../components/admin/ProductCategories';
import Products from '../components/admin/Products';
import Users from '../components/admin/Users';
import EditCategory from '../components/admin/category/EditCategory';
import EditProduct from '../components/admin/product/EditProduct';

const routes = [
    { path: '/admin', exact:true, name:'Admin'},
    { path: '/admin/dashboard', exact:true, name:'Dashboard', component: Dashboard},
    { path: '/admin/manage-product-categories', exact:true, name:'ProductCategories', component: ProductCategories},
    { path: '/admin/manage-product-categories/:id', exact:true, name:'EditCategory', component: EditCategory},
    { path: '/admin/manage-products', exact:true, name:'Products', component: Products},
    { path: '/admin/manage-products/:id', exact:true, name:'EditProduct', component: EditProduct},
    { path: '/admin/manage-users', exact:true, name:'Users', component: Users},
    { path: '/admin/admin-profile', exact:true, name:'Profile', component: Profile},
];

export default routes;