import React from "react";
import "./_header.scss";

const Header = () => {
  return (
    <header>
      <img src="../../../doc/news-homepage-main/assets/images/logo.svg" />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
