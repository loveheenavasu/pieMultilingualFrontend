/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";

import {
  Box,
  CircularProgress,
} from "../../../../../node_modules/@mui/material/index";
import Navbar from "../Navbar/Navbar";
import Form from "../../Form/Form";
import { getImageURL } from "@/utils/image";

interface ExpectedDataFormat {
  heroSection: {
    imageUrl: string;
  };
  data: {
    imageUrl: string;
  }[];
}

const HomeContainer = () => {
  const [imageData, setImageData] = useState<ExpectedDataFormat | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://piemultilingualbackend.onrender.com/heroSection"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response?.json?.();

      setImageData(data);
    } catch (error) {
      console.error(error, "errror occured");
    }
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
                  backgroundImage: ` url(${getImageURL(
                    imageData?.heroSection?.imageUrl
                  )})`,
                }}
              >
                <div className="trust-box">
                  {" "}
                  <div className="client-logo-container">
                    <p className="trusted-text ">Trusted by Client</p>
                    <div className="client-wrapper">
                      {imageData?.data?.map((ele) => (
                        <div key={ele?.imageUrl} className="logo-wrapper">
                          <img
                            className="client-logo"
                            src={getImageURL(ele?.imageUrl)}
                            alt={`Client Logo `}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="logo-form-container">
                  <div className="form-component">
                    <Form />
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
