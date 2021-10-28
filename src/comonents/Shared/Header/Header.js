import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#"><img className="logo navbar-brand" src={logo} alt="" /></a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                        </ul>
                        <form className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-start align-items-lg-center">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/donation" className="nav-link active" aria-current="page">Donation</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/eventsAdded" className="nav-link active" aria-current="page">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link active" aria-current="page">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link active" aria-current="page"><button type="button" className="btn btn-primary btn-md px-4">Register</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/volunteersRegisterList" className="nav-link active" aria-current="page"><button type="button" className="btn btn-dark btn-md px-4">Admin</button></Link>
                            </li>
                        </ul>
                        </form>
                        </div>
                    </div>
            </nav>
        </div>
    );
};

export default Header;