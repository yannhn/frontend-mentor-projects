import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainPreview from "../MainPreview/MainPreview";
import SmallPreview from "../SmallPreview/SmallPreview";

const Container = () => {
  const [sidebarContent, setSidebarContent] = useState([
    {
      id: 1,
      title: "Hydrogen VS Electric Cars",
      body: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      id: 2,
      title: "The Downsides of AI Aristry",
      body: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      id: 3,
      title: "Is VS Funding Drying Up?",
      body: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ]);

  const computer =
    "../../../doc/news-homepage-main/assets/images/image-retro-pcs.jpg";
  const keyboard =
    "../../../doc/news-homepage-main/assets/images/image-top-laptops.jpg";
  const controller =
    "../../../doc/news-homepage-main/assets/images/image-gaming-growth.jpg";

  const images = { computer, keyboard, controller };

  const [smallPreviewContent, setSmallPreviewContent] = useState([
    {
      id: 1,
      number: "01",
      title: "Reviving Retro PCs",
      body: "What happens when old PCs are given modern upgrades?",
      image: images.computer,
    },
    {
      id: 2,
      number: "02",
      title: "Top 10 Laptops of 2022",
      body: "Our best picks for various needs and budgets.",
      image: images.keyboard,
    },
    {
      id: 3,
      number: "03",
      title: "The Growth of Gaming",
      body: "How the pandemic has sparked fesh opportunities.",
      image: images.controller,
    },
  ]);

  return (
    <div>
      <MainPreview />
      <Sidebar sidebarContent={sidebarContent} />
      <SmallPreview smallPreviewContent={smallPreviewContent} />
    </div>
  );
};

export default Container;
