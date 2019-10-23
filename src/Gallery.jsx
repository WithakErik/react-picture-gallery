import React, { useState, useEffect } from "react";
import Pictures from "./Pictures.jsx";
import DatePicker from 'react-date-picker';
import { Dropdown, Menu, Pagination } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Gallery = props => {
  // Props we might receive:
  //    tagSearch     ->  Boolean
  //    titleSearch   ->  Boolean
  //    dateFilter    ->  Boolean
  //    dateSort      ->  Boolean
  //    onClick       ->  Function
  //    lightbox      ->  Boolean
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
  const [tagSearchQuery, setTagearchQuery] = useState();
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

  }, [titleSearchQuery]);
  useEffect(() => {

  }, [tagSearchQuery]);
  useEffect(() => {

  }, [dateRange]);
  useEffect(() => {

  }, [dateSort]);
  useEffect(() => {

  }, [activePage]);
  useEffect(() => {

  }, [picturesPerPage]);
  useEffect(() => {

  }, [filteredPictures]);
  useEffect(() => {

  }, [activePagePictures]);


  /*  Title search  */
  const handleTitleChange = (e, { value }) => {

    updateFilter(value);
  };
  const handleTitleSearchChange = (e, { value }) => {
    updateFilter(value);
  };








  const updateFilter = searchQuery => {
    const filtered = props.pictures.filter(picture => {
      return picture.title.includes(searchQuery);
    });
    setFilteredPictures(filtered);
    updateActivePagePictures(1, picturesPerPage, filtered);
  };

  /*  Tags search  */


  /*  Pagination  */
  const handlePageChange = (e, pageInfo) => {
    setActivePage(Math.ceil(pageInfo.currentPage));
  };
  const updateActivePagePictures = (activePage, picturesPerPage, pictures) => {
    const startPicture = (activePage - 1) * picturesPerPage;
    setActivePagePictures(
      pictures.slice(startPicture, startPicture + picturesPerPage)
    );
  };

  /*  Pictures per page */
  // const picturesPerPageCount = props.picturesPerPageCount || [5, 10, 25];
  // let picturesPerPageOptions = [];
  // for (let count of picturesPerPageCount) {
  //   picturesPerPageOptions.push({ key: count, text: count, value: count });
  // }
  const handlePicutresPerPageChange = (e, dropdownInfo) => {
    setPicturesPerPage(dropdownInfo.value);
    updateActivePagePictures(1, dropdownInfo.value, filteredPictures);
  };

  /*  Set up search information */
  const titleValues = props.pictures
    .reduce((total, current) => {
      total.push(current.title);
      return total;
    }, [])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a - b);
  const titleSearchValues = titleValues.reduce((total, current, index) => {
    total.push({
      key: `product-option-${index}`,
      text: current,
      value: current,
      description: `${
        props.pictures.filter(picture => picture.title === current).length
      }`
    });
    return total;
  }, []);







  const gridAreas = `
    "h"
    "b"
    "f"
  `;
  return (
    <div style={{ position: 'relative', display: 'grid', gridTemplateAreas: gridAreas, gridTemplateRows: '40px auto 40px', height: '100%', ...props.galleryStyle}}>
      {props.dateFilter || props.dateSort || props.tagSearch || props.titleSearch ? (
        <Menu fluid style={{ gridArea: 'h'}}>
          <Dropdown
            fluid
            placeholder="Pictures Per Page"
            selection
            options={picturesPerPageOptions}
            onChange={handlePicutresPerPageChange}
          />



          <Dropdown
            fluid
            button
            search
            selection
            clearable
            placeholder="Search"
            options={titleSearchValues}
            onChange={handleTitleChange}
            onSearchChange={handleTitleSearchChange}
          />
        </Menu>
      ) : null}
      <Pictures {...props} activePagePictures={activePagePictures} />
      <Pagination
        activePage={activePage}
        onPageChange={handlePageChange}
        ellipsisItem={null}
        totalPages={filteredPictures.length / picturesPerPage}
        style={{
          gridArea: 'f',
          display: "flex",
          justifyContent: "center",
          width: "100%"
        }}
      />
    </div>
  );
}

export default Gallery;