import React from "react";
import "./_mainPreview.scss";

const MainPreview = () => {
  return (
    <section className="main-preview">
      <img className="main-preview-mobile-img" src="/image-web-3-mobile.jpg" />
      <div
        className="main-preview-desktop-img"
        style={{
          backgroundImage: `url("/image-web-3-desktop.jpg")`,
        }}
      ></div>
      <div className="main-preview-lower">
        <h2>The Bright Future of Web 3.0?</h2>
        <div className="main-preview-lower-text">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulffilling its promise?
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default MainPreview;
