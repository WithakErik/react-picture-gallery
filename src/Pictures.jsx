import React, { useState, useEffect } from "react";
import * as styles from './styles';
console.log(styles);

const Pictures = props => {
  const pictureRenderer = (index, picture, onClick) => {
    let title = `title-${index}`;
    let main = `main-${index}`;
    let timestamp = `timestamp-${index}`;
    return (
      <span
        style={styles.main}
        onMouseEnter={() => {
          document.getElementById(main).style.cursor = "pointer";
          document.getElementById(title).style.opacity = 1;
        }}
        onMouseLeave={() => {
          document.getElementById(main).style.cursor = null;
          document.getElementById(title).style.opacity = 0;
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
          {...picture}
        />
        <span id={title} style={{ ...styles.title }}>
          {picture.title}
        </span>
        <span id={timestamp} style={{ ...styles.timestamp }}>
          {picture.timestamp}
        </span>
      </span>
    );
  };
  const spacers = props.activePagePictures.map((picture, index) => (<span key={`spacer-${index}`} style={{ width: picture.width || '150px'}}></span>))
  const pictures = props.activePagePictures.map((picture, index) =>
    pictureRenderer(index, picture, props.onClick)
  ).concat(spacers)
  return (
    <div style={{gridArea: "b", overflowY: 'auto'}}>
        <div style={styles.gallery}>{pictures}</div>
    </div>
  )
}

export default Pictures