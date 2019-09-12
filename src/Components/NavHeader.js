import React from 'react';
import Header from './Header'
import HamburgerNav from './scripts'
import 'bootstrap/dist/css/bootstrap.min.css';


const NavHeader = props => (
    <header id="home">
        <div className="container">
           <HamburgerNav />
                <nav className="d flex align-items-center justify-content-center">
                    <a className="navbar-brand" href="index.html">
                        <img className="img-thumbnail" src="images/logo.png" alt=""/>
                    </a>
                    <ul className="nav-list text-center p-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#menu">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#chefs">Our Team</a>
                        </li>
                    </ul>
                </nav>
                <div className="hero-text w-100 text-white px-2 px-sm-0">
                    <h1 className="display-4" >Welcome</h1>
                    <p className="lead mb-4 text-white">Baked goods like you've never seen before!</p>
                    <a className="btn px-5 mr-2" href="#">Explore</a>
                    <a className="btn px-5 ml-2" href="#">Find a store</a>
                </div>
            </div>
    </header>
);

export default NavHeader;
