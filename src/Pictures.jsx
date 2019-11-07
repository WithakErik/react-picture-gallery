import React, { useState, useEffect } from "react";
import './styles.css';

const Pictures = props => {
  const pictureRenderer = (index, picture, onClick) => {
    let title = `title-${index}`;
    let main = `main-${index}`;
    let timestamp = `timestamp-${index}`;
    return (
      <span
        style={{ margin: props.pictureMargin }}
        className="main"
        onMouseEnter={() => {
          document.getElementById(main).style.cursor = "pointer";
          if (picture.title) {
            document.getElementById(title).style.opacity = 1;
          }
        }}
        onMouseLeave={() => {
          document.getElementById(main).style.cursor = null;
          if (picture.title) {
            document.getElementById(title).style.opacity = 0;
          }
        }}
        id={`main-${index}`}
        key={`main-${index}`}
        onClick={() => onClick(picture)}
      >
        <img
          height={picture.height || '150px'}
          width={picture.width || '150px'}
          margin={picture.margin || 0}
          alt={picture.alt}
          src={picture.thumbnail}
        />
        {picture.title ? (
          <span id={title} className="title">
            {picture.title}
          </span>
        ) : null}
        {picture.timestamp ? (
          <span id={timestamp} className="timestamp">
            {picture.timestamp}
          </span>
        ) : null}
      </span>
    );
  };
  const spacers = props.activePagePictures.map((picture, index) => (
    <span
      key={`spacer-${index}`}
      style={{ width: picture.width || '150px', margin: `0 ${props.pictureMargin || 0}`}}
    />
  ));
  const pictures = props.activePagePictures.map((picture, index) =>
    pictureRenderer(index, picture, props.onClick)
  ).concat(spacers)
  return (
    <div className="pictures-container">
        <div className="picture">{pictures}</div>
    </div>
  )
}

export default Pictures