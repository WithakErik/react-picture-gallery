import React from "react";
import { render } from "react-dom";
import Gallery from "../src/Gallery";
import uuid from 'uuid/v4';

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    src: `https://picsum.photos/id/${i}/200/100`,
    thumbnail: `https://picsum.photos/id/${i}/200/100`,
    title: Math.ceil(Math.random() * 10).toString(),
    timestamp: new Date(
      Math.floor(Math.random() * 1000000000000) + 100000000000
    ).toDateString(),
    tags: [0, 0, 0, 0].map(() => `Random tag with number-${Math.floor(Math.random() * 100)}`),
    description: `Here is a description... Random number: ${Math.floor(
      Math.random() * 10
    )}`,
    height: "150px",
    width: "150px",
    UID: uuid()
  });
}
const handleOnClick = picture => console.log(picture);
const pictures = data.sort((a, b) => new Date(a.footer) > new Date(b.footer));
const galleryStyle = {
  backgroundColor: "#333"
};
const App = () => (
  <Gallery
    galleryStyle={galleryStyle}
    pictureMargin="10px"
    pictures={pictures}
    onClick={handleOnClick}
    tagSearch
    titleSearch
    dateRange
    dateSort
    picturesPerPage={[5, 10, 25, 50]}
  />
);
render(<App />, document.getElementById("root"));
