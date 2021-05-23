import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useStyles } from "../styles";

type LoaderProps = {
  empty?: number;
  content: number;
  repeat: number;
};

const Loader: React.FC<LoaderProps> = ({ empty = 0, content, repeat }) => {
  const classes = useStyles();

  return (
    <>
      {[...Array(repeat)].map((_, index) => (
        <TableRow key={index}>
          {[...Array(empty)].map((_, index) => (
            <TableCell key={index} className={classes.emptyCell}></TableCell>
          ))}

          {[...Array(content)].map((_, index) => (
            <TableCell key={index}>
              <Skeleton variant="text" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default Loader;
