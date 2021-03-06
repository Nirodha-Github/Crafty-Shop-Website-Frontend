import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import Page404 from './components/errors/Page404';
import Page403 from './components/errors/Page403';
import Page401 from './components/errors/Page401';
import Home from './components/frontend/Home';
import Profile from './components/frontend/Profile';
import About from './components/frontend/About';
import Videos from './components/frontend/Videos';
import Articles from './components/frontend/Articles';
import ArticleDetail from './components/frontend/components-vlog/ArticleDetail';
//import Orders from './components/frontend/Orders';
import Contact from './components/frontend/Contact';
import Products from './components/frontend/Products';
import ViewProduct from './components/frontend/components-products/ViewProduct';
import ProductDetail from './components/frontend/components-products/ProductDetail';
import axios from 'axios';
import AdminPrivateRoute from './AdminPrivateRoute';


axios.defaults.baseURL= "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] ='application/json';
axios.defaults.headers.post['Accept'] ='application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` :'';
    return config;
});

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AdminPrivateRoute path="/admin" name="Admin" />
          <Route path="/" exact={true} component={Home}/>
          <Route path="/about-us" exact={true} component={About}/>
          <Route path="/contact-us" exact={true} component={Contact}/>
          <Route path="/vlog/videos" exact={true} component={Videos}/>
          <Route path="/vlog/articles" exact={true} component={Articles}/>
          <Route path="/vlog/articles/:id/:slug" exact={true} component={ArticleDetail}/>
          <Route path="/products" exact={true} component={Products}/>
          <Route path="/profile/:id" exact={true} component={Profile}/>
          <Route path="/products/category/:slug" exact={true} component={ViewProduct}/> 
          <Route path="/products/category/:category/:product" exact={true} component={ProductDetail}/> 
          <Route path="/login" exact={true} component = {Login} />
          <Route path="/register" exact={true} component = {Register} />
          <Route path="/403" component = {Page403} />
          <Route path="/404" component = {Page404} />
          <Route path="/401" component = {Page401} />
          {/* <Route path="/admin" name="Admin" render={(props) =><MasterLayout {...props} />} component={MasterLayout}/> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
