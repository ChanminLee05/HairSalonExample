import React from 'react';
import "./Navbar.css";
const NavBar = () => {
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }
    function closeSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }
    return (
        <nav>
            <ul className="sidebar">
                <li className="menu close" onClick={closeSidebar}><i className="fa-solid fa-xmark"></i></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#">Price</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="https://examplesite.trafft.com" target="_blank">Book Online</a></li>
            </ul>
            <ul>
                <li className="logo"><a href="#">Hair Salon</a></li>
                <li className="hideOnMobile"><a href="#about">About</a></li>
                <li className="hideOnMobile"><a href="#service">Services</a></li>
                <li className="hideOnMobile"><a href="#">Price</a></li>
                <li className="hideOnMobile"><a href="#">Contact</a></li>
                <li className="hideOnMobile"><a href="https://examplesite.trafft.com" target="_blank">Book Online</a></li>
                <li className="menu" onClick={showSidebar}><i className="fa-solid fa-bars"></i></li>
            </ul>
        </nav>
    );
};

export default NavBar;
