"use client";

import { useState } from "react";
import Header from "../Header/Header";
import Navitem from "./NavItem/Navitem";
// import "./Navbar.css";

const Navbar = () => {
    const [imgSrc, setImgSrc] = useState<string>("");

    return (
        <>
            <div>
                <div className="nav-wrapper">
                    <div className="parent-container">
                        <div className="nav-bar-container">
                            <div className="logo">
                                <img
                                    style={{ height: "45%", width: "45%" }}
                                    src={`https://piemultilingualbackend.onrender.com/${imgSrc}`}
                                    alt="image not found"
                                />
                            </div>
                        </div>
                        <div>
                            <Navitem setImgSrc={setImgSrc} />
                        </div>
                    </div>
                </div>
                <div className="header-container">
                    <div className="header-child">
                        <Header />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
