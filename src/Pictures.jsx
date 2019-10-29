import React, { useState, useEffect } from "react";
import {
  mainStyle,
  picturesContainerStyle,
  pictureStyle,
  timestampStyle,
  titleStyle
} from './styles';

const Pictures = props => {
  const pictureRenderer = (index, picture, onClick) => {
    let title = `title-${index}`;
    let main = `main-${index}`;
    let timestamp = `timestamp-${index}`;
    return (
      <span
        style={{ margin: props.pictureMargin, ...mainStyle}}
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
          <span id={title} style={{ ...titleStyle }}>
            {picture.title}
          </span>
        ) : null}
        {picture.timestamp ? (
          <span id={timestamp} style={{ ...timestampStyle }}>
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
    <div style={picturesContainerStyle}>
        <div style={pictureStyle}>{pictures}</div>
    </div>
  )
}

export default Pictures