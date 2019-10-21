import React from 'react'
import { render } from 'react-dom'
import Gallery from '../src/Gallery'

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        src: `https://picsum.photos/id/${i}/200/100`,
        thumbnail: `https://picsum.photos/id/${i}/200/100`,
        header: Math.ceil(Math.random() * 100).toString(),
        footer: new Date(Math.floor(Math.random() * 100000000)).toDateString()
    });
}
const handleOnClick = photo =>
    alert(
        `You selected a photo with the title "${
            photo.header
        }"! This is where we would redirect the user to /review to modify the picture.`
    );

const pictures = data.sort((a, b) => new Date(a.footer) > new Date(b.footer));
const galleryStyle = {
    backgroundColor: "#333"
};

const App = () => <Gallery
    pictures={pictures}
    thumbnailHeight="150px"
    thumbnailWidth="150px"
    margin="10px"
    onClick={handleOnClick}
    galleryStyle={galleryStyle}
/>
render(<App />, document.getElementById('root'))