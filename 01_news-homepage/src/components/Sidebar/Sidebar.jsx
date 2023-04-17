import React from "react";

const Sidebar = ({ sidebarContent }) => {
  return (
    <aside>
      <h3>New</h3>
      {sidebarContent.map((content) => (
        <div key={content.id}>
          <h4>{content.title}</h4>
          <p>{content.body}</p>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
