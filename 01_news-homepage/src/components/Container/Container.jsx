import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainPreview from "../MainPreview/MainPreview";
import SmallPreview from "../SmallPreview/SmallPreview";
import "./_container.scss";

const Container = () => {
  const [sidebarContent, setSidebarContent] = useState([]);
  const [smallPreviewContent, setSmallPreviewContent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/sidebarContent")
      .then((res) => res.json())
      .then((data) => setSidebarContent(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/smallPreviewContent")
      .then((res) => res.json())
      .then((data) => setSmallPreviewContent(data));
  }, []);

  return (
    <main>
      <section className="upper-part">
        <MainPreview />
        {sidebarContent && <Sidebar sidebarContent={sidebarContent} />}
      </section>
      {smallPreviewContent && (
        <SmallPreview smallPreviewContent={smallPreviewContent} />
      )}
    </main>
  );
};

export default Container;
