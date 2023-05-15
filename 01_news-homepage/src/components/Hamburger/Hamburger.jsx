import React from "react";
import "./_hamburger.scss";

const Hamburger = ({ toggleHamburger }) => {
  return (
    <>
      <nav className="hamburger">
        <div className="close" onClick={toggleHamburger}>
          <img src="/icon-menu-close.svg" alt="" />
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
      <div className="overlay"></div>
    </>
  );
};

export default Hamburger;
