"use client";
import React, { useState, useEffect } from "react";

import "./HomeContainer.css";

import {
    Box,
    CircularProgress,
} from "../../../../../node_modules/@mui/material/index";
import Navbar from "../Navbar/Navbar";
import Form from "../../Form/Form";

const HomeContainer = ({ setLoading }: any) => {
    const [imageData, setImageData] = useState<ImageData | null>(null);

    console.log(imageData, imageData);
    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://piemultilingualbackend.onrender.com/heroSection"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setImageData(data);
        } catch (error) { }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(imageData, "imageData");
    return (
        <>
            {imageData ? (
                <>
                    <Navbar />
                    <div className="body-container">
                        <div className="banner-container">
                            <div
                                className="banner-image"
                                style={{
                                    backgroundImage: `url(https://piemultilingualbackend.onrender.com/${imageData?.heroSectionLogo})`,
                                }}
                            >
                                <div className="trust-box">
                                    {" "}
                                    <div className="client-logo-container">
                                        <p className="trusted-text ">Trusted by Client</p>
                                        <div className="client-wrapper">
                                            <div className="logo-wrapper">
                                                <img
                                                    className="client-logo"
                                                    src={`https://piemultilingualbackend.onrender.com/${imageData?.clientLogo1}`}
                                                    alt={`Client Logo `}
                                                />
                                            </div>
                                            <div className="logo-wrapper">
                                                <img
                                                    className="client-logo"
                                                    src={`https://piemultilingualbackend.onrender.com/${imageData?.clientLogo2}`}
                                                    alt={`Client Logo`}
                                                />
                                            </div>
                                            <div className="logo-wrapper">
                                                <img
                                                    className="client-logo"
                                                    src={`https://piemultilingualbackend.onrender.com/${imageData?.clientLogo3}`}
                                                    alt={`Client Logo`}
                                                />
                                            </div>
                                            <div className="logo-wrapper">
                                                <img
                                                    className="client-logo"
                                                    src={`https://piemultilingualbackend.onrender.com/${imageData?.clientLogo4}`}
                                                    alt={`Client Logo `}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="logo-form-container">
                                    <div className="form-component">
                                        <Form/>
                                    </div>
                                </div>
                            </div>

                            <div></div>
                        </div>
                    </div>
                </>
            ) : (
                <Box
                    sx={{
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
        </>
    );
};

export default HomeContainer;
