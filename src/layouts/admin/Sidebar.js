import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard,MdOutlineOndemandVideo } from './../../../node_modules/react-icons/md';
import { VscFeedback } from './../../../node_modules/react-icons/vsc';
import { AiFillCarryOut,AiFillReconciliation} from './../../../node_modules/react-icons/ai';
import { FaAngleRight,FaUsers,FaShoppingCart,FaFileInvoiceDollar,FaFileSignature } from './../../../node_modules/react-icons/fa';

function Sidebar() {

    return ( 
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
            <div className="nav">
                <div className="sb-sidenav-menu-heading">OVERVIEW</div>
                <Link className="nav-link" to="/admin/dashboard">
                    <div className="sb-nav-link-icon"><MdDashboard  size={20}/></div>
                    Dashboard
                </Link>

                <div className="sb-sidenav-menu-heading">MANAGE PRODUCTS</div>
                <Link className="nav-link" to="/admin/manage-products">
                    <div className="sb-nav-link-icon"><AiFillCarryOut size={20}/></div>
                    Products
                    <div className="sb-sidenav-collapse-arrow"><FaAngleRight  size={20}/></div>
                </Link>
                <Link className="nav-link" to="/admin/manage-product-categories">
                    <div className="sb-nav-link-icon"><AiFillReconciliation  size={20}/></div>
                    Product Categories
                    <div className="sb-sidenav-collapse-arrow"><FaAngleRight  size={20}/></div>
                </Link>

                <div className="sb-sidenav-menu-heading">MANAGE VLOG</div>
                <Link className="nav-link" to="/admin/manage-videos">
                    <div className="sb-nav-link-icon"><MdOutlineOndemandVideo size={20}/></div>
                    Videos
                    <div className="sb-sidenav-collapse-arrow"><FaAngleRight  size={20}/></div>
                </Link>
                <Link className="nav-link" to="/admin/manage-articles">
                    <div className="sb-nav-link-icon"><FaFileSignature  size={20}/></div>
                    Articles
                    <div className="sb-sidenav-collapse-arrow"><FaAngleRight  size={20}/></div>
                </Link>

                <div className="sb-sidenav-menu-heading">MANAGE</div>
                <Link className="nav-link" to="/admin/manage-users">
                    <div className="sb-nav-link-icon"><FaUsers  size={20}/></div>
                    Users
                    <div className="sb-sidenav-collapse-arrow"><FaAngleRight  size={20}/></div>
                </Link>
                <Link className="nav-link" to="/admin/manage-orders">
                    <div className="sb-nav-link-icon"><FaShoppingCart  size={20}/></div>
                    Orders
                    <div className="sb-sidenav-collapse-arrow"><FaAngleRight  size={20}/></div>
                </Link>
                <Link className="nav-link" to="/admin/manage-feedback">
                    <div className="sb-nav-link-icon"><VscFeedback  size={20}/></div>
                    Feedback
                    <div className="sb-sidenav-collapse-arrow"><FaAngleRight size={20} /></div>
                </Link>
                <Link className="nav-link" to="/admin/manage-transactions">
                    <div className="sb-nav-link-icon"><FaFileInvoiceDollar size={20} /></div>
                    Transactions
                    <div className="sb-sidenav-collapse-arrow"><FaAngleRight size={20} /></div>
                </Link>
            </div>
        </div>
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Crafty Shop Admin
        </div>
    </nav>
     );
}

export default Sidebar;