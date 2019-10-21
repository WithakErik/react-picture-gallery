import React, { useState, useEffect } from "react";

const Pictures = props => {
  const galleryStyle = {
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
    justifyContent: "center",
  };
  const headerStyle = {
    opacity: 0,
    backgroundColor: "rgba(0, 0, 0, 0.69)",
    textAlign: "center",
    fontSize: props.headerFontSize,
    color: "white",
    position: "absolute",
    width: "100%",
    left: 0,
    top: 0,
    transition: "500ms"
  };
  const bodyStyle = {
    position: "relative",
    margin: props.margin,
    height: props.thumbnailHeight,
    width: props.thumbnailWidth
  };
  const footerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.69)",
    textAlign: "center",
    color: "white",
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0
  };
  const pictureRenderer = (index, picture, onClick) => {
    let header = `header-${index}`;
    let body = `body-${index}`;
    let footer = `footer-${index}`;
    return (
      <div
        style={bodyStyle}
        onMouseEnter={() => {
          document.getElementById(body).style.cursor = "pointer";
          document.getElementById(header).style.opacity = 1;
        }}
        onMouseLeave={() => {
          document.getElementById(body).style.cursor = null;
          document.getElementById(header).style.opacity = 0;
        }}
        id={`body-${index}`}
        key={`body-${index}`}
        onClick={() => onClick(picture)}
      >
        <img
          height={props.thumbnailHeight}
          width={props.thumbnailWidth}
          margin="0"
          padding="0"
          alt={picture.alt}
          {...picture}
        />
        <span id={header} style={{ ...headerStyle }}>
          {picture.header}
        </span>
        <span id={footer} style={{ ...footerStyle }}>
          {picture.footer}
        </span>
      </div>
    );
  };
  const pictures = props.currentPictures.map((picture, index) =>
    pictureRenderer(index, picture, props.onClick)
  );
  return <div style={galleryStyle}>{pictures}</div>;
}

export default Pictures