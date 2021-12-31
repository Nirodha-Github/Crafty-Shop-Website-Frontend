import React from "react";
import './../../assets/frontend/css/styles.css';
import './../../assets/frontend/js/scripts.js';
import {Switch,Route,Redirect} from 'react-router-dom';
import publicRouteList from "../../routes/publicRouteList";
import Navbar from '../../layouts/frontend/Navbar';
import Header from '../../layouts/frontend/Header';
import Footer from '../../layouts/frontend/Footer';

function FrontendLayout() {

    return(
        <div>
            <div className="p-0 m-0"><Header /></div>
            <div className="p-0 m-0"><Navbar /></div>
            <div>
                <Switch>
                    {publicRouteList.map((routedata, id) => {
                        return (
                            routedata.component && (
                                <Route
                                    key={id}
                                    path={routedata.path}
                                    exact = {routedata.exact}
                                    name = {routedata.name}
                                    render ={(props) => (
                                        <routedata.component {...props}/>
                                    )}
                                />
                            )
                        )
                    })
                    }

                </Switch>               
            </div>
            <div className="p-0 m-0 footerContainer"><Footer /></div>
        </div>       
        
);
}

export default FrontendLayout;