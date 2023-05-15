import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainPreview from "../MainPreview/MainPreview";
import SmallPreview from "../SmallPreview/SmallPreview";
import "./_container.scss";

const Container = () => {
  const [sidebarContent, setSidebarContent] = useState([
    {
      title: "Hydrogen VS Electric Cars",
      body: "Will hydrogen-fueled cars ever catch up to EVs?",
      id: 1,
    },
    {
      title: "The Downsides of AI Aristry",
      body: "What are the possible adverse effects of on-demand AI image generation?",
      id: 2,
    },
    {
      title: "Is VS Funding Drying Up?",
      body: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
      id: 3,
    },
  ]);
  const [smallPreviewContent, setSmallPreviewContent] = useState([
    {
      id: 1,
      number: "01",
      title: "Reviving Retro PCs",
      body: "What happens when old PCs are given modern upgrades?",
      image: "image-retro-pcs.jpg",
    },
    {
      id: 2,
      number: "02",
      title: "Top 10 Laptops of 2022",
      body: "Our best picks for various needs and budgets.",
      image: "image-top-laptops.jpg",
    },
    {
      id: 3,
      number: "03",
      title: "The Growth of Gaming",
      body: "How the pandemic has sparked fesh opportunities.",
      image: "image-gaming-growth.jpg",
    },
  ]);

  return (
    <main>
      <div className="bigpreview-container">
        <MainPreview />
        {sidebarContent && <Sidebar sidebarContent={sidebarContent} />}
      </div>
      {smallPreviewContent && (
        <SmallPreview smallPreviewContent={smallPreviewContent} />
      )}
    </main>
  );
};

export default Container;
