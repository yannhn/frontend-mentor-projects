import React from "react";

const SmallPreview = ({ smallPreviewContent }) => {
  console.log(smallPreviewContent);
  return (
    <div>
      {smallPreviewContent.map((content) => (
        <div key={content.id}>
          <div>
            <img src={content.image} />
          </div>
          <div>
            <span>{content.number}</span>
            <h5>{content.title}</h5>
            <p>{content.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallPreview;
