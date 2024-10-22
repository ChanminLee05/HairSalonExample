import React from 'react';
import "./Page.css";
import Cover from "../../Assets/salon-cover.jpg"
import Navbar from "../Nav/Navbar";
import HairCut from "../../Assets/scissors.png";
import HairPerm from "../../Assets/perm.png";
import HairColor from "../../Assets/hair-dye.png";
import About from "../../Assets/about.jpg";

import {Link} from "react-router-dom";
const Page = () => {
    return (
        <div className="salon-page">
            <Navbar />
            <div className="cover-section">
                <div className="cover-txt">
                    <h1>Make Your Style</h1>
                    <h1>Best Salon in Edmonton</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut harum in totam
                        voluptatibus. Alias aliquam, commodi deleniti dignissimos dolor eum facere, fugiat fugit,
                        inventore perferendis perspiciatis provident repellendus tempore!
                    </p>
                    <a href="https://examplesite.trafft.com" target="_blank"><i className="fa-regular fa-calendar-check"></i>Book Online</a>
                </div>
                <img className="cover-img" src={Cover} alt="" />
            </div>
            <div className="about-section" id="about">
                <h1>About Us</h1>
                <div className="about-us">
                    <img src={About} alt="" className="about-img"/>
                    <div className="about-txt">
                        <h1>Korean Hair Dresser</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dignissimos exercitationem
                            inventore tenetur! Aliquid, asperiores consequatur esse ex expedita laboriosam magnam magni
                            minima nam, non odit ratione sequi tempora voluptatibus!</p>
                    </div>
                </div>
            </div>
            <div className="service-section" id="service">
                <h1>Services</h1>
                <div className="hair-service-container">
                    <div className="hair-service hair-cut">
                        <img src={HairCut} alt="" className="hair-img hair-cut-img"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="hair-service hair-perm">
                        <img src={HairPerm} alt="" className="hair-img hair-perm-img"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="hair-service hair-color">
                        <img src={HairColor} alt="" className="hair-img hair-color-img"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
