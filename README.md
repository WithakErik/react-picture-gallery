## Live example [here](https://withakerik.github.io/react-picture-gallery/)
![altText](https://i.imgur.com/PZrnx1t.jpg "Totally awesome react picture gallery!")
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
const handleClick = picture => console.log(picture);
<Gallery
  galleryStyle={galleryStyle}
  pictureMargin="10px"
  pictures={pictures}
  onClick={handleClick}
  tagSearch
  titleSearch
  dateRange
  picturesPerPage={[10, 25, 50, 100]}
/>
```
---
# Pictures Options #
|Key              |Type    |Required|Options/Action                                         |
|----------------:|--------|:------:|-------------------------------------------------------|
|***src***        |String  |No      |Any valid link to a picture                            | 
|***thumbnail***  |String  |Yes     |Any valid link to a picture                            |
|***title***      |String  |No      |Required when `titleSearch` is enabled                 |
|***alt***        |String  |No      |                                                       |
|***description***|String  |No      |                                                       |
|***timestamp***  |Date    |No      |Required when `dateRange` is enabled                   |
|***height***     |CSS     |No      |Any valid CSS value for `height` (default is `150px`)  |
|***width***      |CSS     |No      |Any valid CSS value for `width` (default is `150px`)   |
|***tags***       |Array   |No      |Array of Strings (required when `tagSearch` is enabled)|
---
# Gallery Options #
|Key                  |Type    |Required|Options/Action                                             |
|--------------------:|--------|:------:|-----------------------------------------------------------|
|***galleryStyle***   |JSX CSS |No      |Any valid JSX CSS for the gallery                          | 
|***pictureMargin***  |CSS     |No      |Any valid CSS value for `margin`                           |
|***pictures***       |Object  |Yes     |Pictures to be displayed                                   |
|***onClick***        |Function|No      |Function will receive all values of selected picture object|
|***tagSearch***      |Boolean |No      |Enable/disable tag searching functionality                 |
|***titleSearch***    |Boolean |No      |Enable/disable title searching functionality               |
|***dateRange***      |Boolean |No      |Enable/disable date range filtering functionality          |
|***picturesPerPage***|Array   |No      |Array of numbers (default is `[5, 10, 25, 50]`)            |
---
***Notes:***
* anyOtherValues can be an object of any values that would be needed for the handleClick function