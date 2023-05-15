import React, { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import "./_header.scss";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    console.log("TEST");
  };

  return (
    <header>
      <img src="/logo.svg" />
      <nav className="nav">
        <div onClick={toggleHamburger} className="hamburgerButton">
          <img src="/icon-menu.svg" alt="" />
        </div>

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
      {hamburgerOpen && <Hamburger toggleHamburger={toggleHamburger} />}
    </header>
  );
};

export default Header;
