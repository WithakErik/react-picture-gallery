import React, { useState, useEffect } from "react";
import Pictures from "./Pictures";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Dropdown, Menu, Pagination } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { defaultGalleryStyle, menuStyle, paginateStyle, subMenuStyle } from './styles.js'

const Gallery = props => {

  /*  Validate (tag/title)Search/dateRan/picturesPerPage flags  */
  const tagSearchIsEnabled = props.tagSearch && props.pictures.some(picture => picture.tags)
  const titleSearchIsEnabled = props.titleSearch && props.pictures.some(picture => picture.title)
  const dateRangeIsEnabled = props.dateRange && props.pictures.some(picture => picture.timestamp)
  const dateSortIsEnabled = props.dateSort && props.pictures.some(picture => picture.timestamp)
  const picturesPerPageIsEnabled = props.picturesPerPage.length

  /*  Set up date range  */
  const sortedDates = props.pictures
    .reduce((total, current) => {
      total.push(new Date(current.timestamp));
      return total;
    }, [])
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  const startDate = new Date(sortedDates[0]);
  const endDate = new Date();

  /*  Search states  */
  const [titleSearchQuery, setTitleSearchQuery] = useState();
  const [tagSearchQuery, setTagSearchQuery] = useState();
  const [dateRange, setDateRange] = useState([startDate, endDate]);
  const [filteredPictures, setFilteredPictures] = useState(props.pictures);

  /*  Page states  */
  const [activePage, setActivePage] = useState(1);
  const [picturesPerPage, setPicturesPerPage] = useState(props.picturesPerPage ? props.picturesPerPage[0] : 10);
  const [activePagePictures, setActivePagePictures] = useState(
    props.pictures.slice(0, picturesPerPage)
  );
  const picturesPerPageOptions = props.picturesPerPage.map(count => ({key: count, text: count, value: count}));

  /*  Set up state change triggers  */
  useEffect(() => {
    updatePictures(1);
  }, [titleSearchQuery, tagSearchQuery, dateRange]);
  useEffect(() => {
    updateActivePagePictures(1);
  }, [picturesPerPage, filteredPictures]);
  useEffect(() => {
    updateActivePagePictures();
  }, [activePage]);

  /*  Apply all filters and sorts  */
  const updatePictures = (page) => {
    if(page) {
      setActivePage(page);
    }
    let pictures;
    if(titleSearchIsEnabled) {
      pictures = props.pictures.filter(picture => !titleSearchQuery || picture.title === titleSearchQuery);
    }
    if(tagSearchIsEnabled) {
      pictures = pictures.filter(picture => picture.tags.some(pictureTag => !tagSearchQuery || pictureTag === tagSearchQuery));
    }
    if(dateRangeIsEnabled && dateRange.length) {
      pictures = pictures.filter(picture => new Date(picture.timestamp).getTime() >= new Date(dateRange[0]).getTime()
        && new Date(picture.timestamp).getTime() <= new Date(dateRange[1]).getTime());
    }
    setFilteredPictures(pictures);
  }

  /*  Update visible pictures  */
  const updateActivePagePictures = page => {
    if(page) {
      setActivePage(1);
    }
    const startPage = (page - 1 || activePage - 1) * picturesPerPage;
    setActivePagePictures(filteredPictures.slice(startPage, startPage + picturesPerPage))
  }

  /*  Handle searches and date range  */
  const handleTitleSearchChange = (e, { value }) => {
    setTitleSearchQuery(value);
  }
  const handleTagSearchChange = (e, { value }) => {
    setTagSearchQuery(value);
  }
  const handleDateRange = value => {
    if(value) {
      setDateRange(value);
    }
    else {
      setDateRange([startDate, endDate]);
    }
  }

  /*  Handle pagination  */
  const handlePageChange = (e, pageInfo) => {
    setActivePage(Math.ceil(pageInfo.activePage));
  };
  const handlePicutresPerPageChange = (e, dropdownInfo) => {
    setPicturesPerPage(dropdownInfo.value);
  };

  /*  Set up search options  */
  const titleValues = props.pictures
    .reduce((total, current) => total.concat(current.title), [])
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
        props.pictures.filter(picture => picture.tags && picture.tags.some(tag => tag === current)).length
      }`
    })
    return total;
  }, []);

  return (
    <div style={{...defaultGalleryStyle, ...props.galleryStyle}}>
      {tagSearchIsEnabled || titleSearchIsEnabled || dateRangeIsEnabled || dateSortIsEnabled && picturesPerPageIsEnabled ? (
        <Menu style={menuStyle}>
          <div style={subMenuStyle}>
            <Dropdown
              fluid
              selection
              options={picturesPerPageOptions}
              onChange={handlePicutresPerPageChange}
              value={picturesPerPage}
            />
          {titleSearchIsEnabled ? (
            <Dropdown
              fluid
              selection
              search
              clearable
              placeholder="Titles"
              options={titleSearchValues}
              onChange={handleTitleSearchChange}
            />
          ) : null}
          {tagSearchIsEnabled ? (
            <Dropdown
              fluid
              selection
              search
              clearable
              placeholder="Tags"
              options={tagSearchValues}
              onChange={handleTagSearchChange}
            />
          ) : null}
          </div>
        {dateRangeIsEnabled ? (
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
        boundaryRange={0}
        ellipsisItem={null}
        totalPages={filteredPictures.length / picturesPerPage}
        style={paginateStyle}
      />
    </div>
  );
}

export default Gallery;