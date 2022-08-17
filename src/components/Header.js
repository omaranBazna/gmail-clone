import React from "react";
import "./styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
      <div className="header-middle">
        <SearchIcon />
        <ArrowDropDownIcon className="header-inputCaret" />
      </div>
      <div className="header-right"></div>
    </div>
  );
};

export default Header;
