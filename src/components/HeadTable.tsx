import { Checkbox, TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";

import { HeadCell } from "../types";

interface HeadTableProps {
  numSelected?: number;
  rowCount?: number;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  headCells: HeadCell[];
  checkbox?: boolean;
}

const HeadTable = (props: HeadTableProps) => {
  const {
    numSelected = 0,
    rowCount = 0,
    onSelectAllClick = () => {},
    headCells,
    checkbox = true,
  } = props;

  return (
    <TableHead>
      <TableRow>
        {checkbox ? (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={
                checkbox && numSelected > 0 && numSelected < rowCount
              }
              checked={rowCount > 0 && numSelected === rowCount}
              inputProps={{ "aria-label": "select all models" }}
              onChange={(e) => onSelectAllClick(e)}
            />
          </TableCell>
        ) : null}
        {headCells.map(({ id, numeric, disablePadding, label }) => (
          <TableCell
            key={id}
            align={numeric ? "right" : "left"}
            padding={disablePadding ? "none" : "default"}
          >
            {label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default HeadTable;
