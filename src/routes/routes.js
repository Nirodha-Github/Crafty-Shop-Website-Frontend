import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import ProductCategories from '../components/admin/ProductCategories';
import Products from '../components/admin/Products';
import Users from '../components/admin/Users';
import Feedback from '../components/admin/Feedback';
import EditCategory from '../components/admin/category/EditCategory';
import EditProduct from '../components/admin/product/EditProduct';
import Video from '../components/admin/vlog/video/Video';
import EditVideo from '../components/admin/vlog/video/EditVideo';
import Article from '../components/admin/vlog/article/Article';
import EditArticle from '../components/admin/vlog/article/EditArticle';

const routes = [
    { path: '/admin', exact:true, name:'Admin'},
    { path: '/admin/dashboard', exact:true, name:'Dashboard', component: Dashboard},
    { path: '/admin/manage-product-categories', exact:true, name:'ProductCategories', component: ProductCategories},
    { path: '/admin/manage-product-categories/:id', exact:true, name:'EditCategory', component: EditCategory},
    { path: '/admin/manage-products', exact:true, name:'Products', component: Products},
    { path: '/admin/manage-products/:id', exact:true, name:'EditProduct', component: EditProduct},
    { path: '/admin/manage-users', exact:true, name:'Users', component: Users},
    { path: '/admin/admin-profile', exact:true, name:'Profile', component: Profile},
    { path: '/admin/manage-feedback', exact:true, name:'Feedback', component: Feedback},
    { path: '/admin/manage-videos', exact:true, name:'Video', component: Video},
    { path: '/admin/manage-videos/:id', exact:true, name:'EditVideo', component: EditVideo},
    { path: '/admin/manage-articles', exact:true, name:'Article', component: Article},
    { path: '/admin/manage-articles/:id', exact:true, name:'EditArticle', component: EditArticle},
];

export default routes;