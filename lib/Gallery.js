"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Pictures = _interopRequireDefault(require("./Pictures"));

var _reactDaterangePicker = _interopRequireDefault(require("@wojtekmaj/react-daterange-picker"));

var _semanticUiReact = require("semantic-ui-react");

require("semantic-ui-css/semantic.min.css");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Gallery = function Gallery(props) {
  /*  Validate (tag/title)Search/dateRan/picturesPerPage flags  */
  var tagSearchIsEnabled = props.tagSearch && props.pictures.some(function (picture) {
    return picture.tags;
  });
  var titleSearchIsEnabled = props.titleSearch && props.pictures.some(function (picture) {
    return picture.title;
  });
  var dateRangeIsEnabled = props.dateRange && props.pictures.some(function (picture) {
    return picture.timestamp;
  });
  var dateSortIsEnabled = props.dateSort && props.pictures.some(function (picture) {
    return picture.timestamp;
  });
  var picturesPerPageIsEnabled = props.picturesPerPage.length;
  /*  Set up date range  */

  var sortedDates = props.pictures.reduce(function (total, current) {
    total.push(new Date(current.timestamp));
    return total;
  }, []).sort(function (a, b) {
    return new Date(a).getTime() - new Date(b).getTime();
  });
  var startDate = sortedDates[0];
  var endDate = new Date(sortedDates[sortedDates.length - 1]).getTime() > new Date().getTime() ? new Date() : new Date(sortedDates[sortedDates.length - 1]);
  /*  Search states  */

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      titleSearchQuery = _useState2[0],
      setTitleSearchQuery = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      tagSearchQuery = _useState4[0],
      setTagSearchQuery = _useState4[1];

  var _useState5 = (0, _react.useState)([startDate, endDate]),
      _useState6 = _slicedToArray(_useState5, 2),
      dateRange = _useState6[0],
      setDateRange = _useState6[1]; // const [dateSort, setDateSort] = useState(0);   // COMING SOON!!


  var _useState7 = (0, _react.useState)(props.pictures),
      _useState8 = _slicedToArray(_useState7, 2),
      filteredPictures = _useState8[0],
      setFilteredPictures = _useState8[1];
  /*  Page states  */


  var _useState9 = (0, _react.useState)(1),
      _useState10 = _slicedToArray(_useState9, 2),
      activePage = _useState10[0],
      setActivePage = _useState10[1];

  var _useState11 = (0, _react.useState)(props.picturesPerPage ? props.picturesPerPage[0] : 10),
      _useState12 = _slicedToArray(_useState11, 2),
      picturesPerPage = _useState12[0],
      setPicturesPerPage = _useState12[1];

  var _useState13 = (0, _react.useState)(props.pictures.slice(0, picturesPerPage)),
      _useState14 = _slicedToArray(_useState13, 2),
      activePagePictures = _useState14[0],
      setActivePagePictures = _useState14[1];

  var picturesPerPageOptions = props.picturesPerPage.map(function (count) {
    return {
      key: count,
      text: count,
      value: count
    };
  });
  /*  Set up state change triggers  */

  (0, _react.useEffect)(function () {
    updatePictures(1);
  }, [titleSearchQuery, tagSearchQuery, dateRange]);
  (0, _react.useEffect)(function () {
    updateActivePagePictures(1);
  }, [picturesPerPage, filteredPictures]);
  (0, _react.useEffect)(function () {
    updateActivePagePictures();
  }, [activePage]);
  /*  Apply all filters and sorts  */

  var updatePictures = function updatePictures(page) {
    if (page) {
      setActivePage(page);
    }

    var pictures = props.pictures.filter(function (picture) {
      return picture.title === (titleSearchQuery || picture.title);
    });

    if (tagSearchQuery.length) {
      pictures = pictures.filter(function (picture) {
        return tagSearchQuery.some(function (tag) {
          return picture.tags.some(function (pictureTag) {
            return pictureTag === tag;
          });
        });
      });
    }

    if (dateRangeIsEnabled && dateRange.length) {
      pictures = pictures.filter(function (picture) {
        return new Date(picture.timestamp).getTime() >= new Date(dateRange[0]).getTime() && new Date(picture.timestamp).getTime() <= new Date(dateRange[1]).getTime();
      });
    }

    setFilteredPictures(pictures);
  };
  /*  Update visible pictures  */


  var updateActivePagePictures = function updateActivePagePictures(page) {
    if (page) {
      setActivePage(1);
    }

    var startPage = (page - 1 || activePage - 1) * picturesPerPage;
    setActivePagePictures(filteredPictures.slice(startPage, startPage + picturesPerPage));
  };
  /*  Handle searches and date range  */


  var handleTitleSearchChange = function handleTitleSearchChange(e, _ref) {
    var value = _ref.value;
    setTitleSearchQuery(value);
  };

  var handleTagSearchChange = function handleTagSearchChange(e, _ref2) {
    var value = _ref2.value;
    setTagSearchQuery(value);
  };

  var handleDateRange = function handleDateRange(value) {
    if (value) {
      setDateRange(value);
    } else {
      setDateRange([startDate, endDate]);
    }
  };
  /*  Handle pagination  */


  var handlePageChange = function handlePageChange(e, pageInfo) {
    setActivePage(Math.ceil(pageInfo.activePage));
  };

  var handlePicutresPerPageChange = function handlePicutresPerPageChange(e, dropdownInfo) {
    setPicturesPerPage(dropdownInfo.value);
  };
  /*  Set up search options  */


  var titleValues = props.pictures.reduce(function (total, current) {
    total.push(current.title);
    return total;
  }, []).filter(function (value, index, self) {
    return self.indexOf(value) === index;
  }).sort(function (a, b) {
    return a - b;
  });
  var titleSearchValues = titleValues.reduce(function (total, current, index) {
    total.push({
      key: "title-option-".concat(index),
      text: current,
      value: current,
      description: "".concat(props.pictures.filter(function (picture) {
        return picture.title === current;
      }).length)
    });
    return total;
  }, []);
  var tagValues = props.pictures.reduce(function (total, current) {
    return total.concat(current.tags);
  }, []).filter(function (value, index, self) {
    return self.indexOf(value) === index;
  }).sort(function (a, b) {
    return a - b;
  });
  var tagSearchValues = tagValues.reduce(function (total, current, index) {
    total.push({
      key: "tag-option-".concat(index),
      text: current,
      value: current,
      description: "".concat(props.pictures.filter(function (picture) {
        return picture.tags && picture.tags.some(function (tag) {
          return tag === current;
        });
      }).length)
    });
    return total;
  }, []);
  return _react["default"].createElement("div", {
    style: _objectSpread({}, _styles.defaultGalleryStyle, {}, props.galleryStyle)
  }, tagSearchIsEnabled || titleSearchIsEnabled || dateRangeIsEnabled || dateSortIsEnabled && picturesPerPageIsEnabled ? _react["default"].createElement(_semanticUiReact.Menu, {
    fluid: true,
    style: _styles.menuStyle
  }, _react["default"].createElement(_semanticUiReact.Dropdown, {
    fluid: true,
    selection: true,
    options: picturesPerPageOptions,
    onChange: handlePicutresPerPageChange,
    value: picturesPerPage
  }), titleSearchIsEnabled ? _react["default"].createElement(_semanticUiReact.Dropdown, {
    fluid: true,
    button: true,
    search: true,
    selection: true,
    clearable: true,
    placeholder: "Titles",
    options: titleSearchValues,
    onChange: handleTitleSearchChange
  }) : null, tagSearchIsEnabled ? _react["default"].createElement(_semanticUiReact.Dropdown, {
    fluid: true,
    button: true,
    search: true,
    multiple: true,
    selection: true,
    clearable: true,
    placeholder: "Tags",
    options: tagSearchValues,
    onChange: handleTagSearchChange
  }) : null, dateRangeIsEnabled ? _react["default"].createElement(_reactDaterangePicker["default"], {
    minDate: startDate,
    maxDate: new Date(),
    value: dateRange,
    onChange: handleDateRange
  }) : null) : null, _react["default"].createElement(_Pictures["default"], _extends({}, props, {
    activePagePictures: activePagePictures
  })), _react["default"].createElement(_semanticUiReact.Pagination, {
    activePage: activePage,
    onPageChange: handlePageChange,
    ellipsisItem: null,
    totalPages: filteredPictures.length / picturesPerPage,
    style: _styles.paginateStyle
  }));
};

var _default = Gallery;
exports["default"] = _default;