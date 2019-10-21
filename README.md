# Pictures

```
pictures = [
  {
    src: "https://dog.ceo/api/breeds/image/random", // text
    thumbnail: "https://dog.ceo/api/breeds/image/random", // text
    header: "Border Collie", // text or number
    alt: "l0l @ this p00ch!", // text or number
    footer: "Doggy dog" // text or number
  }
];
```

# Gallery

```
thumbnailHeight: "150px"                          //  Any valid CSS
thumbnailWidth: "150px"                           //  Any valid CSS
margin: "10px"                                    //  Any valid CSS
pictures: pictures                                //  Array from above ^^^
onClick: (picture) => (console.log(picture))      //  Function that will receive selected picture info
galleryStyle: { backgroundColor: 'steelblue' }    //  Any valid CSS for JSX
```
