import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  container: {
    maxHeight: "580px",
    height: "calc(100vh - 150px)",
  },
  row: {
    cursor: "pointer",
  },
  subrow: {
    paddingLeft: "50px",
  },
  emptyCell: {
    width: "48px",
    padding: 0,
  },
  header: {
    fontWeight: 700,
  },
  pagination: {
    backgroundColor: "rgb(161, 52, 60)",
    color: "white",
  },
  textField: {
    width: "80px",
  },
  input: {
    width: "100px",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
});
