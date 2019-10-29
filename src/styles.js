module.exports.defaultGalleryStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  alignItems: "center"
};
module.exports.menuStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  /*  Next line (padding: "0 3px 15px") adjustd styling to handle issues of react-daterange-picker overflowing  */
  padding: "0 3px 15px"
};
module.exports.subMenuStyle = {
  display: "flex",
  alignItems: "center",
  position: "relative",
  width: "100%",
  padding: "3px"
};
module.exports.paginateStyle = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  position: "relative"
};

/*  Pictures.jsx  */
module.exports.pictureStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
};
module.exports.picturesContainerStyle = {
  overflowY: "auto",
  height: "100%"
};
module.exports.titleStyle = {
  opacity: 0,
  backgroundColor: "rgba(0, 0, 0, 0.69)",
  textAlign: "center",
  color: "white",
  position: "absolute",
  width: "100%",
  left: "0",
  transition: "222ms"
};
module.exports.mainStyle = {
  position: "relative",
  lineHeight: "1"
};
module.exports.timestampStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.69)",
  textAlign: "center",
  color: "white",
  position: "absolute",
  width: "100%",
  padding: "3px 0",
  margin: "0",
  left: "0",
  bottom: "0"
};
