import React from "react";
import { render } from "react-dom";
import Gallery from "../src/Gallery";

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    src: `https://picsum.photos/id/${i}/200/100`,
    thumbnail: `https://picsum.photos/id/${i}/200/100`,
    title: Math.ceil(Math.random() * 10).toString(),
    timestamp: new Date(Math.floor(Math.random() * 100000000)).toDateString(),
    tags: [0, 0, 0, 0].map(() => `tag-${Math.floor(Math.random() * 100)}`),
    description: `Here is a description... Random number: ${Math.floor(
      Math.random() * 10
    )}`,
    height: "150px",
    width: "150px"
  });
}
const handleOnClick = picgure =>
  alert(
    `You selected a picgure with the title "${picgure.title}"! This is where we would redirect the user to /review to modify the picture.`
  );

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
    dateFilter
    dateSort
    picturesPerPage={[5, 10, 25, 50]}
    // lightbox
  />
);
render(<App />, document.getElementById("root"));
