import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <Link className="navbar-brand" href="/">
                        <img className="logo" src="/image/logo.png" alt=""></img>
                    </Link>
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav nav-text">
                            <Link className="nav-item nav-a active" to="/"> <span className="nav-text">Home</span></Link>
                            <Link className="nav-item nav-a" to="/products"><span className="nav-text">Products</span></Link>
                            <Link className="nav-item nav-a" to="/category"><span className="nav-text">Category</span></Link>
                        </div>
                    </div>
                    <Link className="nav-item nav-a login-btn" to="/login"> <span className="nav-text login-btn">Login</span></Link>
                </nav>
            </div>
        );
    }
}

export default Header;