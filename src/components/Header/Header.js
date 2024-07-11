import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Noor Shop</h1>
      <nav className="navigation-container">
        <ul>
          <li>
            <Link to="/">
              <HomeOutlinedIcon sx={{ marginRight: "10px" }} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <InfoOutlinedIcon sx={{ marginRight: "10px" }} />
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <CallOutlinedIcon sx={{ marginRight: "10px" }} />
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Search />
    </header>
  );
};

export default Header;
