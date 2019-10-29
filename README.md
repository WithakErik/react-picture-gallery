## Live example [here](https://withakerik.github.io/react-picture-gallery/)
## [GitHub](https://github.com/WithakErik/react-picture-gallery.git)
---
# Examples
```
const pictures = [
  {
    src: "https://media.tenor.com/images/916c85aa24280f510de1e985ad718267/tenor.gif",         // string
    thumbnail: "https://media.tenor.com/images/916c85aa24280f510de1e985ad718267/tenor.gif",   // string
    title: "Border Collie",           // string or number
    alt: "l0l @ this p00ch!",         // string or number
    description: "Doggy dog",         // string or number
    timestamp: 'july 4, 1776',        // valid date - will be converted using new Date()
    height: '100px',                  // string - any valid CSS
    width: '100px',                   // string - any valid CSS
    tags: ['funny', 'humor', 'l0l'],  // array of strings or numbers
    ...anyOtherValues                 // all values will be returned when using onClick()
  }
];
const otherOptions = {
  tagSearch,                                        // boolean that enables searching by tags
  titleSearch,                                      // boolean that enables searching by titles
  dateRange,                                        // boolean that enables filtering by date range
  dateSort,                                         // coming soon!
  onClick: picture => console.log(picture),         // function that returns information tied to picture
  lightbox,                                         // coming soon!
  galleryStyle: { backgroundColor: 'steelblue' },   // object - any valid JSX CSS
  pictureMargin: '10px',                            // text - any valid CSS
  picturesPerPage: [5, 10, 25, 50, 100],            // array of numbers
}
```