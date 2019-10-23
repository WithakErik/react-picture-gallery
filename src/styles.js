/*  Gallery.jsx  */
const gridAreas = `
  "h"
  "b"
  "f"
`;
module.exports.defaultGalleryStyle = {
  position: "relative",
  display: "grid",
  gridTemplateAreas: gridAreas,
  gridTemplateRows: "40px auto 40px",
  height: "100%"
};
module.exports.menuStyle = { gridArea: "h" };
module.exports.paginateStyle = {
  gridArea: "f",
  display: "flex",
  justifyContent: "center",
  width: "100%"
};

/*  Pictures.jsx  */
module.exports.pictureStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
};
module.exports.picturesContainerStyle = {
  gridArea: "b",
  overflowY: "auto"
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
