import React, { useState, useEffect } from "react";
import Pictures from "./Pictures.jsx";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Dropdown, Menu, Pagination } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { defaultGalleryStyle, paginateStyle, menuStyle } from './styles.js'

const Gallery = props => {

  /*  Set up date range  */
  const sortedDates = props.pictures
    .reduce((total, current) => {
      total.push(new Date(current.timestamp));
      return total;
    }, [])
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  const startDate = sortedDates[0]
  const endDate = new Date(sortedDates[sortedDates.length - 1]).getTime() > new Date().getTime() ? new Date() : new Date(sortedDates[sortedDates.length - 1])

  /*  Search states  */
  const [titleSearchQuery, setTitleSearchQuery] = useState();
  const [tagSearchQuery, setTagSearchQuery] = useState([]);
  const [dateRange, setDateRange] = useState([startDate, endDate]);
  const [dateSort, setDateSort] = useState(0);
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
    updatePictures(1);
  }, [titleSearchQuery]);
  useEffect(() => {
    updatePictures(1);
  }, [tagSearchQuery]);
  useEffect(() => {
    updatePictures(1);
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

  /*  Apply all filters and sorts  */
  const updatePictures = (page) => {
    if(page) {
      setActivePage(page);
    }
    //  Handle title search
    let pictures = props.pictures.filter(picture => picture.title === (titleSearchQuery || picture.title));

    //  Handle tag search
    if(tagSearchQuery.length) {
      pictures = pictures.filter(picture => tagSearchQuery.some(tag => picture.tags.some(pictureTag => pictureTag === tag)))
    }

    //  Handle date range
    if(dateRange.length) {
      pictures = pictures.filter(picture => new Date(picture.timestamp).getTime() >= new Date(dateRange[0]).getTime() && new Date(picture.timestamp).getTime() <= new Date(dateRange[1]).getTime())
    }
    //  Handle date sort
    setFilteredPictures(pictures);
  }

  /*  Update visible pictures */
  const updateActivePagePictures = page => {
    if(page) {
      setActivePage(1);
    }
    const startPage = (page - 1 || activePage - 1) * picturesPerPage;
    setActivePagePictures(filteredPictures.slice(startPage, startPage + picturesPerPage))
  }

  /*  Title search  */
  const handleTitleSearchChange = (e, { value }) => {
    setTitleSearchQuery(value);
  };

  /*  Tag search  */
  const handleTagSearchChange = (e, { value }) => {
    setTagSearchQuery(value);
  }

  /*  Date range  */
  const handleDateRange = value => {
    if(value) {
      setDateRange(value);
    }
    else {
      setDateRange([startDate, endDate]);
    }
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
    .reduce((total, current) => total.concat(current.tags), [])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a - b);
  const tagSearchValues = tagValues.reduce((total, current, index) => {
    total.push({
      key: `tag-option-${index}`,
      text: current,
      value: current,
      description: `${
        props.pictures.filter(picture => picture.tags.some(tag => tag === current)).length
      }`
    })
    return total;
  }, []);

  return (
    <div style={{...defaultGalleryStyle, ...props.galleryStyle}}>
      {props.dateFilter || props.dateSort || props.tagSearch || props.titleSearch ? (
        <Menu fluid style={menuStyle}>
          <Dropdown
            fluid
            placeholder="Pictures/Page"
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
            placeholder="Search Titles"
            options={titleSearchValues}
            onChange={handleTitleSearchChange}
          />
        ) : null}
        {props.tagSearch ? (
          <Dropdown
            fluid
            button
            search
            multiple
            selection
            clearable
            placeholder="Search Tags"
            options={tagSearchValues}
            onChange={handleTagSearchChange}
          />
        ) : null}
        {props.dateRange ? (
          <DateRangePicker
            minDate={startDate}
            maxDate={new Date()}
            value={dateRange}
            onChange={handleDateRange}
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