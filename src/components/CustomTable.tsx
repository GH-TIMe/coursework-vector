import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@material-ui/core";
import React, { ChangeEvent } from "react";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import { ColumnsTypes, DataTypes } from "../types";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  container: {
    maxHeight: "580px",
    height: "calc(100vh - 230px)",
  },
  row: {
    cursor: "pointer",
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
});

const useTextField = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
  },
});

interface Props {
  rows: DataTypes[];
  columns: ColumnsTypes[];
  link?: string;
  hover?: boolean;
}

const CustomTable = ({ rows, columns, link = "", hover = true }: Props) => {
  // classes
  const classes = useStyles();
  const classesTextField = useTextField();

  // table pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // link to
  const history = useHistory();
  const handleRowClick = (id: number) => {
    const regex = /\/schemes$/gm;
    const pathname = history.location.pathname;

    if (regex.test(pathname)) {
      history.push(`${pathname}/${id}/wishes`);
    } else {
      history.push(`/${id}/${link}`);
    }
  };

  const handleChangeTextField = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    name: keyof DataTypes
  ) => {
    rows[index] = {
      ...rows[index],
      [name]: "" + +e.target.value,
    };
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <EnhancedTableToolbar />
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className={classes.header}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover={hover}
                    className={hover ? classes.row : ""}
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    onClick={hover ? () => handleRowClick(row.id) : undefined}
                  >
                    {columns.map((column, index) => {
                      const value = row[column.id] || 0;
                      return column.editable ? (
                        <TableCell key={column.id} align={column.align}>
                          <TextField
                            id={`${column.id}_${index}`}
                            type="number"
                            defaultValue={value}
                            color="secondary"
                            className={classes.textField}
                            onChange={(e) =>
                              handleChangeTextField(e, index, column.id)
                            }
                            InputProps={{ classes: classesTextField }}
                          />
                        </TableCell>
                      ) : (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={classes.pagination}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CustomTable;
