import React, { useState } from "react";
import Pictures from "./Pictures.jsx";
import { Dropdown, Menu, Pagination } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Gallery = props => {
  const [activePage, setActivePage] = useState(1);
  const [picturesPerPage, setPicturesPerPage] = useState(20);
  const [currentPictures, setCurrentPictures] = useState(
    props.pictures.slice(0, picturesPerPage)
  );
  const [filteredPictures, setFilteredPictures] = useState(props.pictures);

  /*  Header search data */
  const handleHeaderChange = (e, { value }) => {
    updateFilter(value);
  };
  const handleHeaderSearchChange = (e, { searchQuery }) => {
    updateFilter(searchQuery);
  };
  const updateFilter = searchQuery => {
    const filtered = props.pictures.filter(picture => {
      return picture.header.includes(searchQuery);
    });
    setFilteredPictures(filtered);
    updateCurrentPictures(1, picturesPerPage, filtered);
  };

  /*  Pagination data */
  const handlePageChange = (e, pageInfo) => {
    const currentPage = Math.ceil(pageInfo.activePage);
    setActivePage(currentPage);
    updateCurrentPictures(currentPage, picturesPerPage, filteredPictures);
  };
  const updateCurrentPictures = (activePage, picturesPerPage, pictures) => {
    const startPicture = (activePage - 1) * picturesPerPage;
    setCurrentPictures(
      pictures.slice(startPicture, startPicture + picturesPerPage)
    );
  };

  /*  Set up pictures per page information */
  const picturesPerPageCount = props.picturesPerPageCount || [5, 10, 25];
  let picturesPerPageOptions = [];
  for (let count of picturesPerPageCount) {
    picturesPerPageOptions.push({ key: count, text: count, value: count });
  }
  const handlePicutresPerPageChange = (e, dropdownInfo) => {
    setPicturesPerPage(dropdownInfo.value);
    updateCurrentPictures(1, dropdownInfo.value, filteredPictures);
  };

  /*  Set up search information */
  const headerValues = props.pictures
    .reduce((total, current) => {
      total.push(current.header);
      return total;
    }, [])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a - b);
  const headerSearchValues = headerValues.reduce((total, current, index) => {
    total.push({
      key: `product-option-${index}`,
      text: current,
      value: current,
      description: `${
        props.pictures.filter(picture => picture.header === current).length
      }`
    });
    return total;
  }, []);
  return (
    <div style={props.galleryStyle}>
      <Menu fluid style={{ position: "sticky", top: 0, zIndex: 1 }}>
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
          options={headerSearchValues}
          onChange={handleHeaderChange}
          onSearchChange={handleHeaderSearchChange}
        />
      </Menu>
      <div
        style={{ display: 'flex'}}
      >
        <Pictures {...props} currentPictures={currentPictures} />
      </div>
      <Pagination
        activePage={activePage}
        onPageChange={handlePageChange}
        ellipsisItem={null}
        totalPages={filteredPictures.length / picturesPerPage}
        style={{
          position: "sticky",
          display: "flex",
          justifyContent: "center",
          bottom: 0,
          width: "100%"
        }}
      />
    </div>
  );
}

export default Gallery;