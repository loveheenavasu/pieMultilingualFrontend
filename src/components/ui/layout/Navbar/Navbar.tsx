/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Header from "../Header/Header";
import Navitem from "./NavItem/Navitem";
import { getImageURL } from "@/utils/image";

const Navbar = () => {
  const [imgSrc, setImgSrc] = useState<string>("");

  return (
    <>
      <div>
        <div className="nav-wrapper">
          <div className="parent-container">
            <div className="nav-bar-container">
              {/* <div className="top-navbar-logo-container"> */}
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  overflow: "hidden",
                }}
                src={getImageURL(imgSrc)}
                alt="image not found"
              />
              {/* </div> */}
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
