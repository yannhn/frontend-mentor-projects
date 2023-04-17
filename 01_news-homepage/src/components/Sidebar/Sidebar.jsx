import React from "react";
import "./_sidebar.scss";

const Sidebar = ({ sidebarContent }) => {
  return (
    <aside>
      <h3>New</h3>
      {sidebarContent.map((content) => (
        <div key={content.id}>
          <span>{content.title}</span>
          <p>{content.body}</p>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
