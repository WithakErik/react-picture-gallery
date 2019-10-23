import React, { useState, useEffect } from "react";
import Pictures from "./Pictures.jsx";
import DatePicker from 'react-date-picker';
import { Dropdown, Menu, Pagination } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { defaultGalleryStyle, paginateStyle, menuStyle } from './styles.js'

const Gallery = props => {
  // Props we might receive:
  //    tagSearch     ->  Boolean
  //    titleSearch   ->  Boolean
  //    dateFilter    ->  Boolean
  //    dateSort      ->  Boolean
  //    onClick       ->  Function
  //    lightbox      ->  Boolean
  //    galleryStyle  ->  Objecrt with valid JSX CSS
  //    pictureMargin ->  Valid CSS for margin
  //    pictures      ->  Array
  //    |-src
  //    |-thumbnail   ->  String
  //    |-tags        ->  Array
  //    |-title       ->  String
  //    |-description ->  String
  //    |-timestamp   ->  Date
  //    |-height      ->  Valid CSS for height
  //    |-width       ->  Valid CSS for width
  //    |-Any other value that will be passed back to onClick()

  /*  Search states  */
  const [titleSearchQuery, setTitleSearchQuery] = useState();
  const [tagSearchQuery, setTagSearchQuery] = useState();
  const [dateRange, setDateRange] = useState();
  const [dateSort, setDateSort] = useState();
  const [filteredPictures, setFilteredPictures] = useState(props.pictures);

  /*  Page states  */
  const [activePage, setActivePage] = useState(1);
  const [picturesPerPage, setPicturesPerPage] = useState(props.picturesPerPage ? props.picturesPerPage[0] : 10);
  const [activePagePictures, setActivePagePictures] = useState(
    props.pictures.slice(0, picturesPerPage)
  );
  const picturesPerPageOptions = (props.picturesPerPage ? props.picturesPerPage : [5, 10, 25]).map(count => ({key: count, text: count, value: count}));


  useEffect(() => {
  });
  useEffect(() => {
    updatePictures();
  }, [titleSearchQuery]);
  useEffect(() => {

  }, [tagSearchQuery]);
  useEffect(() => {

  }, [dateRange]);
  useEffect(() => {

  }, [dateSort]);
  useEffect(() => {
    updateActivePagePictures();
  }, [activePage]);
  useEffect(() => {
    updateActivePagePictures(1);
  }, [picturesPerPage]);
  useEffect(() => {
    updateActivePagePictures(1);
  }, [filteredPictures]);
  useEffect(() => {

  }, [activePagePictures]);

  const updateActivePagePictures = page => {
    if(page) {
      setActivePage(1);
    }
    const startPage = (page - 1 || activePage - 1) * picturesPerPage;
    setActivePagePictures(filteredPictures.slice(startPage, startPage + picturesPerPage))
  }



  const updatePictures = (page) => {
    if(page) {
      setActivePage(page);
    }
    //  Handle title search
    let pictures = props.pictures.filter(picture => picture.title === (titleSearchQuery || picture.title));

    //  Handle tag search
    console.log(pictures);
    setFilteredPictures(pictures);
  }


  /*  Title search  */
  const handleTitleSearchChange = (e, { value }) => {
    setTitleSearchQuery(value);
  };

  /*  Tag search  */
  const handleTagSearchChange = (e, { value }) => {
    console.log(value)
  }


  

  /*  Pagination  */
  const handlePageChange = (e, pageInfo) => {
    setActivePage(Math.ceil(pageInfo.activePage));
  };

  /*  Pictures per page */
  const handlePicutresPerPageChange = (e, dropdownInfo) => {
    setPicturesPerPage(dropdownInfo.value);
  };

  /*  Set up title search */
  const titleValues = props.pictures
    .reduce((total, current) => {
      total.push(current.title);
      return total;
    }, [])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a - b);
  const titleSearchValues = titleValues.reduce((total, current, index) => {
    total.push({
      key: `title-option-${index}`,
      text: current,
      value: current,
      description: `${
        props.pictures.filter(picture => picture.title === current).length
      }`
    });
    return total;
  }, []);

  /*  Set up tag search  */
  const tagValues = props.pictures
    .reduce((total, current) => {
      total.concat(current.tags);
      return total;
    }, [])
  const tagSearchValues = [];



  return (
    <div style={{...defaultGalleryStyle, ...props.galleryStyle}}>
      {props.dateFilter || props.dateSort || props.tagSearch || props.titleSearch ? (
        <Menu fluid style={menuStyle}>
          <Dropdown
            fluid
            placeholder="Pictures Per Page"
            selection
            options={picturesPerPageOptions}
            onChange={handlePicutresPerPageChange}
          />
        {props.titleSearch ? (
          <Dropdown
            fluid
            button
            search
            selection
            clearable
            placeholder="Search"
            options={titleSearchValues}
            onChange={handleTitleSearchChange}
          />
        ) : null}
        {props.tagSearch ? (
          <Dropdown
            fluid
            button
            search
            selection
            clearable
            placeholder="Search"
            options={tagSearchValues}
            onChange={handleTagSearchChange}
          />
        ) : null}

        </Menu>
      ) : null}
      <Pictures {...props} activePagePictures={activePagePictures} />
      <Pagination
        activePage={activePage}
        onPageChange={handlePageChange}
        ellipsisItem={null}
        totalPages={filteredPictures.length / picturesPerPage}
        style={paginateStyle}
      />
    </div>
  );
}

export default Gallery;