import { Colors } from "./Colors";
//
// STYLED GRID CONTAINERS ---------------------------------------------------------------------
//
export const bodyStyled = {
  display: "flex",
  flexDirection: "row",
  bgcolor: "green",
  width: "100%",
  height: "100vh",
};
export const tablesGridContainer = {
  bgcolor: "white",
  width: 420,
  height: "100vh",
  alignContent: "flex-start",
  boxShadow: "5px 0px 150px -5px rgba(0, 0, 0, 0.15)",
  zIndex: 1,
};
export const flowGridContainer = {
  bgcolor: Colors.body,
  width: "100%",
  height: "100vh",
};
export const titleStyled = {
  bgcolor: "white",
  width: 420,
  height: 60,
  paddingLeft: 2,
  paddingRight: 2,
  boxShadow: "-25px 1px 25px 0 rgba(0, 0, 0, 0.25)",
  zIndex: 1,
};
export const tablesHeaderStyled = {
  bgcolor: Colors.secondary,
  width: "100%",
  height: 50,
  alignItems: "center",
  justifyContent: "space-between",
};

export const tableContentStyled = {
  bgcolor: "white",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 1,
};

export const tableFooter = {
  bgcolor: "white",
  padding: 1,
  paddingLeft: 2,
  alignItems: "center",
  justifyContent: "end",
  borderTop: "1px solid lightgrey",
  borderBottom: "1px solid lightgrey",
};
