"use client"

import { useEffect, useState } from "react";
import "./Header.css";

interface Data {
    name: string;
    link: string;
}

const Header = () => {
    const [headerData, setHeaderData] = useState<Data[]>([]);
    console.log(headerData, "headerData")



    const fetchData = async () => {
        try {
            const response = await fetch("https://piemultilingualbackend.onrender.com/menus");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setHeaderData(data);
        } catch (error) {
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(headerData, "headerData")
    return (
        <div className="nav-bar">
            {headerData?.map((item, index) => {
                return (
                    <>
                        <div className="nav-bar-child">
                            <a href={item.link}>{item.name}</a>
                        </div>
                    </>
                )
            })
            }

        </div >
    )
}

export default Header
