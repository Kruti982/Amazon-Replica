import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <img src="/amazonlogo.png" alt="Amazon logo" />
          </div>
          <div className="searchInput">
            <div className="nav_searchbaar">
              <input type="text" name="" id="" />
            </div>
            <div className="search_icon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <a href="">Sign in</a>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={0} color="primary">
              <a id="cart" href="">
                <ShoppingCartIcon id="icon" />
                cart
              </a>
            </Badge>
          </div>
          <div>
            <Avatar className="avtar" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
