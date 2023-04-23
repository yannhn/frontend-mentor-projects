import React from "react";
import "./_smallPreview.scss";

const SmallPreview = ({ smallPreviewContent }) => {
  console.log(smallPreviewContent);
  return (
    <section className="smallpreview-container">
      {smallPreviewContent.map((content) => (
        <div key={content.id} className="smallpreview-item">
          <div>
            <img src={content.image} />
          </div>
          <div className="smallpreview-text">
            <span>{content.number}</span>
            <h5>{content.title}</h5>
            <p>{content.body}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SmallPreview;
