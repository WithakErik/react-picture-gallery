# This is an rough draft that I plan to refine in the near future
---
## Live example [here](https://withakerik.github.io/react-picture-gallery/)
---
# Examples

```
const pictures = [
  {
    src: "https://dog.ceo/api/breeds/image/random",         // string
    thumbnail: "https://dog.ceo/api/breeds/image/random",   // string
    title: "Border Collie",                                 // string or number
    alt: "l0l @ this p00ch!",                               // string or number
    description: "Doggy dog",                               // string or number
    timestamp: 'july 4, 1776',                              // text - will be converted using new Date()
    height: '100px',                                        // string - any valid CSS
    width: '100px',                                         // string - any valid CSS
    tags: ['funny', 'humor', 'l0l'],                        // array of strings or numbers
    ...anyOtherValues                                       // all values will be returned when using onClick()
  }
];
const otherOptions = {
  tagSearch,                                                // boolean that enables searching by tags
  titleSearch,                                              // boolean that enables searching by titles
  dateRange,                                                // boolean that enables filtering by date range
  dateSort,                                                 // coming soon!
  onClick: picture => console.log(picture),                 // function that returns information tied to picture
  lightbox,                                                 // coming soon!
  galleryStyle: { backgroundColor: 'steelblue' },           // object - any valid JSX CSS
  pictureMargin: '10px',                                    // text - any valid CSS
  picturesPerPage: [5, 10, 25, 50, 100],                    // array of numbers
}
```
---
# Notes:
dateSort will be implamented next, and maybe title sort too?