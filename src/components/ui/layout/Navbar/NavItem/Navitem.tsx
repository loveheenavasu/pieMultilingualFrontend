/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
} from "../../../../../../node_modules/@mui/material/index";

interface DataItem {
  _id: string;
  name: string;
  link: string;
  icon: string;
}
const Navitem = ({ setImgSrc }: any) => {
  const [menuData, setMenuData] = useState<{ data: DataItem[] }>({ data: [] });
  const [isSearch, setisSearch] = useState<Boolean[]>([]);
  const windowWidth = window.innerWidth;
  console.log(menuData, "menuData");
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://piemultilingualbackend.onrender.com/header"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMenuData(data);
      setImgSrc(data.headerLogo);
    } catch (error) {}
  };

  const searchBar = async () => {
    try {
      const response = await fetch(
        "https://piemultilingualbackend.onrender.com/setting"
      );
      const data = await response.json();
      setisSearch(data?.searchBar);
      console.log(data, "asljflsajfslj", data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
    searchBar();
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 40;

  return (
    <>
      {windowWidth > 770 ? (
        <div>
          <div className="container-item-search">
            <div className="nav-link">
              {menuData?.data?.map((item, index) => (
                <>
                  <div className="items-link">
                    {index == 0 && (
                      <img
                        src={`https://piemultilingualbackend.onrender.com/${item.icon}`}
                        alt="im"
                      />
                    )}
                    <a href={item.link}>{item.name}</a>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="search-wrapper">
            {isSearch && (
              <>
                <input className="search-input" placeholder="Search" />
                <div className="search-icon-wrapper">
                  <img
                    className="search-icon"
                    src="/images/search.png"
                    alt="search"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="container-item">
            <div className="nav-link">
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                <div className="search-wrapper">
                  {isSearch && (
                    <>
                      <input className="search-input" placeholder="Search" />
                      <div className="search-icon-wrapper">
                        <img
                          className="search-icon"
                          src="/images/search.png"
                          alt="search"
                        />
                      </div>
                    </>
                  )}
                </div>
                {menuData?.data?.map((item, index) => (
                  <>
                    <MenuItem
                      key={item?.name}
                      selected={item.name === "Pyxis"}
                      onClick={handleClose}
                    >
                      <div className="items-link">
                        {index == 0 && (
                          <img
                            src={`https://piemultilingualbackend.onrender.com/${item.icon}`}
                            alt="im"
                          />
                        )}
                        <a href={item.link}>{item.name}</a>
                      </div>
                    </MenuItem>
                  </>
                ))}
              </Menu>
            </div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <img
                className="hamburger-icon"
                src="/images/hamburger.png"
                alt="search"
              />
            </IconButton>
          </div>
        </>
      )}
      <div></div>
    </>
  );
};

export default Navitem;
